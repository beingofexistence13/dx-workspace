---
section: billing
title: Billing
description: Learn how Gitpod charges for usage and manages your organization's billing.
---

# Billing

Gitpod charges for usage based on how long workspaces run, and the resources consumed by different [workspace classes](/docs/configure/workspaces/workspace-classes). Metered usage also includes [prebuilds](/docs/configure/projects/prebuilds).

You can access and manage organization billing settings from the organization menu or the organization usage page.

> **Note:** You need to be an owner of the organization to access the **Billing** page[[1](/docs/configure/orgs/members)].

## Credits

Gitpod usage is measured in **credits**.

Larger [workspace classes](/docs/configure/workspaces/workspace-classes) use credits at a faster rate. E.g. Standard workspaces use 10 credits per hour, whereas Large workspaces use 20 credits per hour.

Your invoice will show the total amount of credits consumed in a billing period.

## Free tier

All users receive a free usage allowance of up to 500 credits per month to try Gitpod in their first created organization.

## Configure billing

Organization owners can set up billing in the organization settings by clicking "Upgrade Plan".

![Configure Billing](/images/docs/billing/configure-org-billing.png)

Once billing is configured, Gitpod will charge the organization billing account for usage by organization members.

![Active billing](/images/docs/billing/active-org-billing.png)

## Configure a usage limit

The usage limit prevents workspaces from starting once the limit has been reached.

To change the usage limit, look for "Update limit" in the BALANCE section of your personal or organization billing settings, after you have configured billing.

![Active billing](/images/docs/billing/update-usage-limit-2.png)

Note that it will not stop running workspaces.

## View usage details

Organization owners can view usage details for their organization.

![View usage](/images/docs/billing/view-org-usage-details.png)

## Old pricing plans

All old seat-based or personal plans have been faded out. If you had one of those, and need help of any kind related to those, please contact support at support@gitpod.io.

## FAQs

### [How can I limit or optimize prebuild costs?](https://discord.com/channels/816244985187008514/1070648758716600371)

<!-- DISCORD_BOT_FAQ - DO NOT REMOVE -->

There are a few built-in Gitpod features that can optimize your prebuild costs, such as:

-   **Skip prebuilds** every X commits and use [last successful prebuild](https://www.gitpod.io/docs/configure/projects/last-successful-prebuild)

-   **Stop prebuilds** for all branches, PRs and etc. when on GitHub. See [this page](https://www.gitpod.io/docs/references/gitpod-yml/#github). (might not be necessary)

### With prebuilds enabled, does every push to my repository cost me credits?

It depends on how you configured prebuilds. Prebuilds run on headless Gitpod workspaces and the cost depends on how long they run when triggered.
