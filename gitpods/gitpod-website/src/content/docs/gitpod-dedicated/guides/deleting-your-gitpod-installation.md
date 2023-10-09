---
section: guides
title: Deleting your Gitpod installation - Gitpod Dedicated docs
---

# Deleting your Gitpod installation

> ℹ️ If you need to delete your Gitpod installation, this guide will show you how.
>
> This is useful in case you no longer need your Gitpod installation, or if you need to re-run the CloudFormation installation process.
>
> Unfortunately, this is not as easy as just deleting the CloudFormation Stack in AWS, because CloudFormation creates some resources that it cannot delete itself (for example, new DNS records generated to issue certificates; CloudWatch log groups; ECR image repositories; Elastic IPs…)

In order to completely delete a Gitpod installation that was created via a CloudFormation template, you will need to use a tool like [cloud-nuke](https://github.com/gruntwork-io/cloud-nuke) to clean up all resources in your account.

> ❗️**Disclaimer**: By design, [cloud-nuke](https://github.com/gruntwork-io/cloud-nuke) will completely and permanently delete all the resources present in your AWS sub-account. This is highly destructive. Please use with extreme caution.

Here are the steps to follow to delete all the resources in the AWS sub-account used for your Gitpod installation:

<details class="mt-macro ml-2">

<summary class="text-body text-p-medium">1. Delete resources in the AWS account of the Gitpod Dedicated instance</summary>

<div class="ml-2">

1. Go to the Route53 hosted zone and delete the 3 CNAME records. This this should speed things up as these records don’t get deleted (or created) as part of the stack and deletion fails for the hosted zone

2. Delete the CloudFormation stack of the Gitpod installation

    > ⚠️ When deleting failed CloudFormation stacks, sometimes the delete will fail because of a particular resource. When you try to delete the stack again, it will warn you which resources it failed on with a link to the resource. Click those links and manually delete them via the UI, then re-trigger the stack delete. It may give you an option to ignore those resources that failed previously, this time check all of those and the stack delete should succeed. If the `lambdacellstatecontrollersub` or `lambdacellstatecontrollertrigger` resources get stuck (CREATE_IN_PROGRESS status for over an hour), then reach out to Gitpod Support.

3. Delete the CloudFormation stack used to create the role used to execute the Gitpod CloudFormation template

</div>

</details>

<details class="mt-macro mb-micro ml-2">

<summary class="text-body text-p-medium">2. Delete any residual resources in the AWS account using <code>cloud-nuke</code></summary>

<div class="ml-2">

1.  Install [cloud-nuke](https://github.com/gruntwork-io/cloud-nuke)

2.  Ensure the user or role active in your AWS CLI has access to the AWS Account where Gitpod is installed into

3.  Run cloud-nuke on the account: `cloud-nuke aws --exclude-resource-type transit-gateway`

    -   The `transit-gateway` resource type is excluded because the transit
        gateway is shared between accounts, so this is necessary to not delete
        the transit gateway in the other AWS Account - assuming that Transit Gateway is used for other purposes as well.
    -   You can also add the `--region us-east-2,global` flags to greatly speed up the cloud-nuke, but sometimes you will need to check all regions to ensure all resources are deleted.
    -   Manually delete any DNS records and zones, as cloud-nuke doesn’t support this yet.

</div>

</details>

Once this process is complete, all the resources in your AWS account will have been removed. You can then re-install Gitpod from scratch by running a new CloudFormation template, or delete the AWS sub-account if you no longer need it.
