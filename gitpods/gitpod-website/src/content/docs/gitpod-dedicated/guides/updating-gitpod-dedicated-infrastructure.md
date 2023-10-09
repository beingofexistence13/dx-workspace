---
section: guides
title: Updating the Gitpod Dedicated Infrastructure - Gitpod Dedicated docs
---

# Updating the Gitpod Dedicated Infrastructure

Occasionally, it is necessary to update your Gitpod Dedicated infrastructure components to improve performance,
reliability, and security. This guide explains how to apply these updates using CloudFormation templates. Most
application updates can be applied directly and do not require infrastructure changes.
See [Deployment and Updates](/docs/gitpod-dedicated/background/deployment-updates) for more information about those.

## Gitpod Dedicated Infrastructure Update Process

1. Receive the updated CloudFormation templates from your Gitpod Account Manager in the form of S3 URLs. Note that you may receive either one
   or two templates depending on the updates required.
2. If you receive two S3 URLs for two separate CloudFormation templates, apply them in this order:
    - **First**, update the stack for the infrastructure creation role (`gitpod-role`).
        - Important: When updating this stack, **do not select any role** under permissions.
    - **Then**, update the stack for the Gitpod Infrastructure.
        - Important: When updating this stack, **select the `GitpodSetupAndInitialEKSUserAdmin` role** under
          permissions. This role is created by the infrastructure creation role template.
3. If you only receive one template, follow the relevant instructions as described below.

Consult the [Infrastructure Update Changelog](/docs/gitpod-dedicated/reference/infrastructure-update-changelog) or your
Gitpod Account Manager to determine which stacks need updates and the impact of the update in terms of downtime.

## Detailed Steps

### 1. Update Infrastructure Creation Role

1. Go to the AWS CloudFormation page and select the stack for the infrastructure creation role.
2. Choose "Create change set for current stack" in the stack actions.
3. Select "Replace current template", select Amazon S3 URL as the template source then paste the S3 url for the `gitpod-role` template into the field.
4. Follow the prompts in the AWS console UI.
    > ❗️ Under permissions **do not select any role**:
    > ![Update Permissions](/images/docs/gitpod-dedicated/guides/updating-gitpod-dedicated-infrastructure/permission-update-role-template.webp)
5. Acknowledge that IAM resources may be created and press "Submit".
6. Once a change set is published, verify the changes.
7. Execute the change set. Choose "Roll back all stack resources" for behavior on provisioning failure. Wait for the
   update to complete, and the status will change to `UPDATE_COMPLETE`.

### 2. Update Gitpod Infrastructure

1. Return to the AWS CloudFormation page and select the stack for the Gitpod Infrastructure.

     <details>

     <summary class="text-body mt-3 text-p-medium ml-6"> Screenshot </summary>

     <div class="ml-8 mt-macro">

    ![Configure AWS Environment Variables](/images/docs/gitpod-dedicated/guides/updating-gitpod-dedicated-infrastructure/navigate-aws-console.webp)

     </div>
     </details>

2. Select stack action, create change set for current stack

     <details>

     <summary class="text-body mt-3 text-p-medium ml-6"> Screenshot </summary>

     <div class="ml-8 mt-macro">

    ![Select stack from AWS console](/images/docs/gitpod-dedicated/guides/updating-gitpod-dedicated-infrastructure/select-stack.webp)

     </div>
     </details>

3. Select "Replace current template", select Amazon S3 URL as the template source then paste the S3 url for the `gitpod-role` template into the field.
     <details>

     <summary class="text-body mt-3 text-p-medium ml-6"> Screenshot </summary>

     <div class="ml-8 mt-macro">

    ![Replace current template](/images/docs/gitpod-dedicated/guides/updating-gitpod-dedicated-infrastructure/replace-template.webp)

     </div>
     </details>

4. Follow along in the process as described in the AWS console UI

> ❗️ Under permissions ensure you select **`GitpodSetupAndInitialEKSUserAdmin`** as the stack execution role. This role was
> created by applying a CloudFormation template supplied by Gitpod in the initial installation process.
> See [Getting Started](/docs/gitpod-dedicated/guides/getting-started) for more information.
> ![Update Permissions](/images/docs/gitpod-dedicated/guides/updating-gitpod-dedicated-infrastructure/permissions-update-gitpod-template.webp)

6.  Acknowledge that IAM resources may be created and press "Submit".

     <details>

     <summary class="text-body mt-3 text-p-medium ml-6"> Screenshot </summary>

     <div class="ml-8 mt-macro">

    ![ACK IAM Resources](/images/docs/gitpod-dedicated/guides/updating-gitpod-dedicated-infrastructure/ack-IAM-resources.webp)

     </div>
     </details>

7.  Once a change set is published, verify the changes.

     <details>

     <summary class="text-body mt-3 text-p-medium ml-6"> Screenshot </summary>

     <div class="ml-8 mt-macro">

    ![Set changes published](/images/docs/gitpod-dedicated/guides/updating-gitpod-dedicated-infrastructure/changes-published.webp)

     </div>
     </details>

8.  Execute the change set. Choose "Roll back all stack resources" for behavior on provisioning failure. Wait for the
    update to complete. Execution will take a few minutes

        <details>

        <summary class="text-body mt-3 text-p-medium ml-6"> Screenshot </summary>

        <div class="ml-8 mt-macro">

    ![Execute set changes](/images/docs/gitpod-dedicated/guides/updating-gitpod-dedicated-infrastructure/execute-change-set.webp)

        </div>
        </details>

        <details>

        <summary class="text-body mt-4 text-p-medium ml-6"> Once done, the status will change to <code>UPDATE_COMPLETE</code></summary>

        <div class="ml-8 mt-macro">

    ![Update completed](/images/docs/gitpod-dedicated/guides/updating-gitpod-dedicated-infrastructure/update-complete.webp)

        </div>
        </details>

Your Gitpod Dedicated infrastructure should now be updated successfully.
