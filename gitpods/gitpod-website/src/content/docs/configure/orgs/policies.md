---
section: orgs
title: Policies
description: Organizational policies allow you to configure and manage common settings across all workspaces within your Gitpod organization.
---

# Policies

Policies allow you to manage and configure functionality across your Gitpod organization.

## Manage a Policy

To update an Organizational policy:

1. Ensure you have are a Member with the [Role](/docs/configure/orgs/members) "Organization Owner".
1. Navigate to the [Gitpod dashboard](https://gitpod.io/).
1. Ensure you are in the context of the Organization you want to set the policy.
1. Navigate to the [settings page](https://gitpod.io/settings).
1. Update the relevant policy.

## Workspace Sharing

Workspace sharing is enabled by default. Through this policy, Organization Owners can prevent Members from sharing workspaces that have been started within an Organization.

-   Prevents workspaces within an Organization from sharing access to a running workspace.
-   Members can stop sharing a workspace at any time, regardless of the Organizational Policy.
-   Any currently shared workspaces will not have sharing access removed.

## Default Workspace Image

[Setting a default image](https://gitpod.io/settings) for your Organization (instead of relying on the default `workspace-full` image) is useful when you want to create a default workspace experience for your Organization members without adding a `.gitpod.yml` to every repository. The Organization workspace image setting is a default and can still be overwritten by updating the repository `.gitpod.yml` file.

> **Note:** The user must have the **Organization Owner** role to update the Organization default workspace image. All Organization members can view this setting only.

See [Workspace Image](/docs/configure/workspaces/workspace-image#workspace-image) for more.

### Workspace Image Authentication

Authentication for the images is based on what the Gitpod installation can access. For Gitpod Cloud users, only public images are currently supported. For Gitpod Dedicated, the authentication is inherited from the installation. For instance, if you are using [ECR private registry](/docs/gitpod-dedicated/guides/use-private-ecr-repos-for-workspace-images#using-private-ecr-repositories-for-workspace-images) support that will work with the Organization setting.
