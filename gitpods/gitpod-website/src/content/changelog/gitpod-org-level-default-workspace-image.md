---
title: Set a default Workspace Image for your Gitpod Organization
alt: A screenshot showcasing the new Organization-level Workspace Image setting in Gitpod.
date: 2023-09-27
excerpt: With Gitpod you can now set a workspace image across your Organization.
customSlug: organization-workspace-image-default
image: organization-workspace-image.webp
ogImage: organization-workspace-image.webp
---

With Gitpod you can now set a workspace image across your Organization. Previously, Gitpod would use the default `workspace-full` image when starting new workspace where there was no `image` setting added in the `.gitpod.yml`. Setting the default image is useful when you want to create a default workspace experience out-of-the-box for users in your Gitpod Organization without needing to create a `.gitpod.yml` in every repository.

**Please note:**

-   The Organization workspace image setting is only a default and the workspace image can still be overwritten at the repository level by adding a workspace image reference into the repositories `.gitpod.yml` file.
-   Authentication for the images is based on what the Gitpod installation can access. For Gitpod Cloud users, only public images are currently supported. For Gitpod Dedicated, the authentication is inherited from the installation. For instance, if you are using [ECR private registry](https://www.gitpod.io/docs/gitpod-dedicated/guides/use-private-ecr-repos-for-workspace-images#using-private-ecr-repositories-for-workspace-images) support that will work with the Organization setting.
-   Only Organization owners can update the setting. All Organization members can view the setting.

**Getting started**

1. Ensure you are the Owner of the relevant Gitpod Organization (see [Members](https://gitpod.io/members)).
2. Navigate to the [Organization settings](https://gitpod.io/settings) page.
3. Navigate to the "Workspace Image" section to update the workspace image reference.
4. To test, start a new workspace based on a repository without a workspace image.

See [Workspace Image](/docs/configure/workspaces/workspace-image#workspace-image) for more.
