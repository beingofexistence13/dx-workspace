---
author: sagor999, aledbf, kylos101, csweichel
date: Friday, 4 Feb 2022 11:00:00 UTC
excerpt: On January 25th Gitpod experienced a global outage. What happened? Why was there data loss? So what exactly happened during the outage? How are we improving Gitpod?
image: teaser.png
subtitle: what happened and how we're improving
teaserImage: teaser.png
title: January 25th Outage
---

On January 25th Gitpod experienced [a global outage](https://www.gitpodstatus.com/incidents/tk0f7xcw8q94) that resulted in workspaces not being able to be started, as well as already running workspaces experienced a data loss. The outage lasted for a little over an hour.

## What happened?

At around 5.44pm UTC (all times in this article will be in UTC) we noticed a high error rate when pulling images from the Google Container Registry (GCR or gcr.io) with an error `cannot get manifest`. Our team immediately started to diagnose what might have caused this, if this was on our end or if Google services were experiencing issues. We started looking at logs and noticed another error while trying to pull an image: `dial tcp: i/o timeout failed to do request` which showed there was some sort of connectivity problem with GCR. We immediately checked Google’s status page to see if there are active outages, but there was only one message: `The Service Usage API is experiencing elevated error rates when listing "available services" or listing "disabled services" resulting in API call failures.` That did not seem related to GCR service, so we assumed that an issue must be on our end instead.

About 10 minutes later we started getting reports from users not being able to start workspaces and our on-call team started an incident response process.

While we were digging into why we are having problems connecting to GCR, as a precaution, we started to spin up new workspace clusters in EU and US. This was just in case something went bad with existing clusters and we needed to move users to new clusters (that was a good idea). Due to our recent work in automating cluster creation, we were able to start the spin up process in the background via a [werft](https://github.com/csweichel/werft) job to create new clusters (which takes about 20 minutes).

After looking at logs, we noticed that we were having a lot of DNS errors coming from our CoreDNS pods: `[ERROR] plugin/errors: 2 storage.googleapis.com. A: read udp 192.168.60.206:55169->8.8.8.8:53: i/o timeout`. So now it seems like we are not able to talk to Google’s DNS. But checking DNS and status page again showed no errors. Clearly, we were having networking issues in our clusters, but it was still not clear as to why (no recent changes were done to our clusters).

At this time new clusters were ready and we checked if those were having issues as well or not. Turns out they were not affected and were working fine. We made a decision to start redirecting traffic to new clusters so that our users will be able to use Gitpod again, while we will continue looking into what happened with the existing cluster.

Once traffic was diverted to new clusters, we immediately saw workspaces starting up and users reporting in [Discord](https://www.gitpod.io/chat) that they are able to start workspaces.

After we confirmed that Gitpod is working, we marked the incident as “Monitoring” and we started the process of trying to understand what happened to the old cluster.

## Why was there data loss?

We upload workspace content backups into a private Google Cloud Storage (GCS) bucket. Unfortunately, if our backup service is not able to connect to GCS, then any backup will fail. And that’s exactly what happened in this case due to the DNS outage. The backup service attempted to resolve the address of GCS but was not able to, and the backup process failed. We are prioritizing work on improving our backup process. As engineers, we truly understand how soul-crushing it is to lose several hours of your work and are fully committed to improving our backup procedures to ensure that it doesn’t happen again.

## So what exactly happened during the outage?

![It was DNS](/images/blog/no-way-it-is-dns/it-was-dns.png)

We had a DNS failure inside our cluster. We are using Google’s primary DNS server (`8.8.8.8`) to resolve any public addresses, and our cluster was not able to communicate with that server. It looked like any traffic on port 53 UDP was just not getting through, resulting in timeout errors.

We checked ARP table for overflow, but it appears to be within normal limits before, during, and after the outage.

We also checked the conntrack table if it got full, but our conntrack utilization was at about 10% only.

When we switched traffic away from this cluster, it appears to have recovered shortly after. Indicating some sort of load issue.

Additional tests were performed on the old cluster to try to reproduce the problem (without the time pressure of recovering as fast as possible), to better understand why we were not able to reach 8.8.8.8 from our cluster. Unfortunately, we were unable to recreate the conditions that led to the network failure.

In the meantime, we can take solid steps on improving our DNS resiliency and storage durability, more about it in the section below.

## How are we improving Gitpod?

There are two big areas of improvement that we can do in light of this outage.

The first one, most critical, is to avoid any data loss. For this we have created [an epic on GitHub to track the work that needs to be done](https://github.com/gitpod-io/gitpod/issues/7901). User data (`/workspace`) is persisted to individual nodes in workspace clusters. If a node or cluster fails before a backup finishes, and we miss our chance to manually backup (which doesn't scale well), data loss occurs.

To protect your data, we'll use cloud provider persistent volumes, which can survive node and cluster failures. Also, if a workspace enters a state where it cannot be started, we'll make it possible for you to download your files. Presently, you can only download your files if the workspace is stopped.

The second one is to improve DNS resilience. Instead of relying on just one DNS server, we now have 3 different ones: an internal one to GCP, Google’s public 8.8.8.8, and another one is Cloudflare’s 1.1.1.1. That way if something happens to one of them, we should still be able to connect to the others.

We are also planning on doing more DNS resiliency work and you [can track it in this epic](https://github.com/gitpod-io/gitpod/issues/7843).

## Conclusion

As hard as we try to prevent outages, they sometimes happen. The best we can do is learn from them and improve our infrastructure going forward. We have plans on better support for multi-region clusters (currently we only have two, US and EU), as well as going multi-cloud at some point in the future.

As an apology to our users, [we are also issuing credits to out customers](/contact/support). If you are a paid user, we’d like to offer you a refund for the last three months. If you are on the free plan, we’d like to offer you a coupon for 3 months of our unleashed plan.
