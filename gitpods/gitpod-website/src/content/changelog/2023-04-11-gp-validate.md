---
title: Validate your .gitpod.yml without committing ! 🤘
alt: gitpod validate image banner
date: 2023-04-11
excerpt: Run the gp validate command to test gitpod configurations within your workspace
image: gp-validate.webp
ogImage: gp-validate.webp
customSlug: validate-gitpod-yaml-without-commit
---

**TL;DR;** - You can now validate a Gitpod configuration—both the `.gitpod.yml` and the workspace image—by running `gp validate` without needing to restart, leave your workspace, or commit your configuration.

-   With `gp validate` can now validate a configuration within the workspace without committing. This works in a very similar way to a regular Gitpod workspace start, allowing you to catch configuration mistakes earlier.
-   Using `gp validate --prebuild` you can create run a workspace just as a Prebuild would, which makes it easier to debug a Prebuild configuration by re-creating the exact state inside a running workspace.

The power of a [CDE](https://www.gitpod.io/cde) comes with a well-defined configuration. Because, when your workspace is configured, you can make use of ephemeral workspaces, multi-track development and other benefits of developing in the cloud.

To update a configuration, you would commit your `.gitpod.yml` and start a new workspace. This process would delay the time to finding out a configuration was incorrect, and in the mean time pollute your source control with commits like: "_updates_", "_next_", "_please work!_", "_please work this time_" — yeah, we know how it feels!

Which is why we are "shifting left" and bringing errors, validation and suggestions closer to when you are actually developing on and iterating on your configuration. The new Gitpod command `gp validate` allows you to do exactly this: validate your configuration changes without committing, or leaving your workspace!

`gp validate` is included in every workspace. It works by creating a "workspace within your workspace" using Docker. The command mounts your `/workspace` directory, and pulls through all necessary information such as environment variables. By building a workspace within your existing workspace, we can heavily cache changes as Docker layers, making the update cycle to your configuration ⚡️ super, super fast ⚡️.

For more, see [configuring workspaces](/docs/configure/workspaces).

## FAQs

**Does `gp validate` apply it's changes to the currently opened workspace?**

The `gp validate` command creates a workspace within your current workspace so you can quickly try our your configuration changes without committing or needing to do a full workspace restart. You do still need to commit and start a new workspace to apply the changes to your current (and future) workspaces. However, committing your configuration should now be more of a formality, as your configuration now be validated.

**Does `gp validate` apply to all files and configurations in the workspace?**

The `gp validate` command is compatible with `.gitpod.yml` and your workspace base image, whether a Dockerfile in the current workspace, or referencing an image hosted elsewhere. The workspace that `gp validate` creates shares the file system with the parent workspace, meaning all files and folders are copied into that workspace. This is especially useful when you install a tool, and want to execute or experiment with that tool immediately.
