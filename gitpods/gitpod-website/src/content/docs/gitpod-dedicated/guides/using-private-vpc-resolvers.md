---
section: guides
title: Using Private VPC Resolvers - Gitpod Dedicated docs
---

# Using Private VPC Resolvers

To enable your Gitpod Dedicated instance (and thus your workspaces) to resolve domains that are managed via a private DNS zone, please follow these steps:

1. Navigate to Route53 and the hosted Zone managing the domains you want the Gitpod instance to be able to route to. Navigate to the configuration section of the hosted zone. If you are creating a new zone, this will be the first screen shown.

    <details class="ml-4">

    <summary class="text-body text-p-medium mt-micro">You should now see a configuration screen like this:</summary>

    ![Gitpod Dedicated Configuration screen](/images/docs/gitpod-dedicated/guides/using-private-vpc-resolvers/configuration-screen.webp)

    </details>

2. Add the Gitpod VPC to the “VPCs to associate with the hosted zone”. If you want to reconfigure an existing existing zone, you will need to do this via the AWS CLI.
   ![Gitpod Dedicated Associate VPC screen](/images/docs/gitpod-dedicated/guides/using-private-vpc-resolvers/associate-vpc-screen.webp)

3. The Gitpod VPC, and thus the Gitpod instance and workspaces should now be able to resolve all of the private DNS records that the hosted Zone has access to.
