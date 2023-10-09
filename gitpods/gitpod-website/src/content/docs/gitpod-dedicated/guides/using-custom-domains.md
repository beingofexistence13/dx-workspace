---
section: guides
title: Using Custom Domains - Gitpod Dedicated docs
---

# Using Custom Domains

To enable your Gitpod Dedicated instance to use your custom domain, you will need to follow the process below. For more information about how to create a Gitpod Dedicated instance, please see [Getting Started](/docs/gitpod-dedicated/guides/getting-started).

> ℹ️ Changing to a custom domain can also be done once an instance is already running. However, this requires coordination with Gitpod:

-   Gitpod needs to ship a new release to the instance that updates the internally used domain
-   The customer needs to recreate the SSO, git provider and OIDC configurations

The process to use custom domains requires:

1. The TLS certificate to be used with the custom domain needs to be uploaded to AWS Certificate Manager.

    > ⚠️ You are responsible the ongoing validity of this certificate. The certificate must be valid for the following (sub)domains:
    >
    > - `yourinstance.yourcustomdomain.com`
    > - `*.yourinstance.yourcustomdomain.com`
    > - `*.ws.yourinstance.yourcustomdomain.com`

2. The `ARN of the certificate` needs to be provided to Gitpod along with the `domain name`. The certificate needs to be accessible to the account where Gitpod is installed in.
3. The instance will be created as per [Getting Started](/docs/gitpod-dedicated/guides/getting-started)
4. Once created, you need to ensure that you can actually route to the instance:

    1. Navigate to the DNS zone that controls your domain.
    2. Add a record the following CNAME records:

        > ℹ️ You can also find the list of domains that need to be redirected to by navigate to Route 53 > DNS zones > [your-instance-name.gitpod.cloud](http://your-instance-name.gitpod.cloud) in the AWS account that Gitpod Dedicated is running in. All `A` ,`AAAA` and `CNAME` records require a redirect from your custom domain.

        - From `gitpod.yourcustomdomain.com` to `your-instance-name.gitpod.cloud`
        - From `*.gitpod.yourcustomdomain.com` to `*.your-instance-name.gitpod.cloud`
        - From `*.ws.gitpod.yourcustomdomain.com` to `*.ws.your-instance-name.gitpod.cloud`
        - From `*.lssh.gitpod.yourcustomdomain.com` to `*.lssh.your-instance-name.gitpod.cloud`
        - From `services.gitpod.yourcustomdomain.com` to `services.your-instance-name.gitpod.cloud`
