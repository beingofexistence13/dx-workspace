---
section: gitpod-dedicated/reference
title: Infrastructure Update Changelog - Gitpod Dedicated docs
---

# Infrastructure Update Changelog

> ℹ️ This is a changelog detailing the changes that go into Infrastructure updates. More information on these updates can be found in [Deployment and Updates](/docs/gitpod-dedicated/background/deployment-updates). A guide on how to apply them can be found in [Updating the Gitpod Dedicated Infrastructure](/docs/gitpod-dedicated/guides/updating-gitpod-dedicated-infrastructure).

<details>
    <summary class="text-body text-large mt-8"><b>Infrastructure Update v37</b> (released 26 September, 2023 )</summary>

<div class="ml-2 md:ml-4">

> ❗️ This update impacts running workspaces and should not be done during working hours. **You can expect a downtime of 4 minutes** after the CloudFormation Change Set is applied as new nodes are spun up.

### How to update

-   We have improved the template distribution process starting with this release. We now distribute templates as S3 URLs, which are readable only from the cell AWS account. This paves the way for a much more simplified upgrade process moving forward, so stay tuned!

-   Your Gitpod Account Manager will provide you with two updated CloudFormation templates in the form of S3 URLs(one for the infrastructure template role and one for Gitpod itself) that both need to be applied as change sets.

-   Follow the process laid out on [Updating the Gitpod Dedicated Infrastructure](/docs/gitpod-dedicated/guides/updating-gitpod-dedicated-infrastructure)

### Changelog

-   Support for in-place AMI updates for all clusters
-   Improved cell lambda image update workflow, triggered by new Gitpod Dedicated releases. This equips a faster rollout of cell Lambda code changes. This **does not** change the permission scope of the lambdas.
-   Automated changeset creation process, thereby simplifying future infrastructure upgrades. After this upgrade you will be able to preview all the changes automatically in the stack's `Changesets` section
-   Dynamic autoscaler configurations enabling fine tuning of cluster scaling capacity to optimally accommodate varying workloads. You can talk to your Gitpod Account manager to get this configured
-   Export of historical logs, thereby enhancing the ease of debugging issues that customers encounter
-   Various bug fixes

### Expected CloudFormation Change Set

The change set being generated as part of this CF change is expected to include the following changes:

#### Changes to Gitpod Role CF template

![Changes in Gitpod CF Role Template - 26 Sep 2023](/images/docs/gitpod-dedicated/reference/infrastructure-update-changelog/26-sep-2023/role-template-update-v37.png)

&nbsp;

<a href='/images/docs/gitpod-dedicated/reference/infrastructure-update-changelog/26-sep-2023/role-template-v37.json' download>Changeset in JSON format</a>

#### Changes to Gitpod Instance CF template

![Changes in Gitpod CF Instance Template - 1 - 26 Sep 2023](/images/docs/gitpod-dedicated/reference/infrastructure-update-changelog/26-sep-2023/infra-template-v37-1.png)
![Changes in Gitpod CF Instance Template - 2 - 26 Sep 2023](/images/docs/gitpod-dedicated/reference/infrastructure-update-changelog/26-sep-2023/infra-template-v37-2.png)
![Changes in Gitpod CF Instance Template - 3 - 26 Sep 2023](/images/docs/gitpod-dedicated/reference/infrastructure-update-changelog/26-sep-2023/infra-template-v37-3.png)
![Changes in Gitpod CF Instance Template - 4 - 26 Sep 2023](/images/docs/gitpod-dedicated/reference/infrastructure-update-changelog/26-sep-2023/infra-template-v37-4.png)

&nbsp;

<a href='/images/docs/gitpod-dedicated/reference/infrastructure-update-changelog/26-sep-2023/infra-template-v37.json' download>Changeset in JSON format</a>

</div>

</details>

<details>
    <summary class="text-body text-large mt-8"><b>Infrastructure Update v25</b> (released 14 August, 2023 )</summary>

<div class="ml-2 md:ml-4">

> ❗️ This update impacts running workspaces and should not be done during working hours. **You can expect a downtime of 5 minutes** after the CloudFormation Change Set is applied as new nodes are spun up.

> ℹ️ Creating the change set can take longer than usual. Further, once the change stack is applied, the clean up step will take longer than usual - up to 40 minutes (see below for reasoning). The Gitpod instance can be used as normal during this time. Future updates will take less time again.

### How to update

-   Your Gitpod Account Manager will provide you with two CloudFormation templates (one for the infrastructure template role and one for Gitpod itself) that both need to be applied as change sets.

-   Follow the process laid out on [Updating the Gitpod Dedicated Infrastructure](/docs/gitpod-dedicated/guides/updating-gitpod-dedicated-infrastructure)

### Changelog

-   Support for custom CA certificates (important: An application release is necessary to fully roll out this feature. You can ask your Gitpod Account Manager whether your instance has received the required release)
-   Disabled scaling the instance to 0 nodes during working hours (6:00 to 22:00 local time to the instance) to speed up the workspace starts in the morning. Scale to 0 is still enabled on weekends.
-   Improvements of log groups associated with Lambda functions to reduce cost and align function names with AWS conventions. This requires all lambdas to be recreated, leading to the longer than usual clean up time mentioned above.
-   Enforce use of IMDSv2 AWS metadata endpoint for EC2 instances
-   Various bug fixes

### Expected CloudFormation Change Set

The change set being generated as part of this CF change is expected to include the following changes:

**Changes to the stack for the role used to execute the Gitpod CF template:**

![Changes in Gitpod CF Template - 10 Aug 2023](/images/docs/gitpod-dedicated/reference/infrastructure-update-changelog/10-aug-2023/changes-gitpod-cf-template.webp)

### Changes to Gitpod CF template

<a href='/images/docs/gitpod-dedicated/reference/infrastructure-update-changelog/10-aug-2023/infra-version-25-changes.json' download>infra-version-25-changes.json</a>

</div>

</details>

<details>
    <summary class="text-body text-large mt-8"><b>Infrastructure Update v19</b> (released July 13, 2023)</summary>

<div class="ml-2 md:ml-4">

### How to update

-   Follow the process laid out in [Updating the Gitpod Dedicated Infrastructure](/docs/gitpod-dedicated/guides/updating-gitpod-dedicated-infrastructure)

-   This update does not impact running workspaces and can be done during working hours.

### Changelog

-   Update to the application controller (Lambda) to improve the ordering of its operations
-   Turn off debug mode for the telemetry controller as it was logging too much
-   Turn off AZ rebalancing which was impacting the stability of some nodes and thus workspaces
-   Set workspace DNS resolvers to be local VPC resolver IP instead of public DNS lookup. This resolves networking issues in environments where public DNS lookups are blocked. This is the first of a two part roll out process, the second part is an application change.

### Expected CloudFormation Change Set

The change set being generated as part of this CF change is expected to include the following 14 changes:

![Changes in Gitpod CF Template - 10 Aug 2023](/images/docs/gitpod-dedicated/reference/infrastructure-update-changelog/13-july-2023/changes.webp)

</div>

</details>
