---
section:
title: Configure Gitpod
description: Learn how to configure Gitpod workspaces and projects to customize your development environment.
---

# Configure Gitpod

> **Looking for a comprehensive guide on how to configure Gitpod workspaces?** <br/> <br/> See [Configuring Gitpod](/docs/configure/workspaces).

## Workspaces

[Workspaces](/docs/configure/workspaces) are the developer environments where you code in Gitpod.

Workspaces can be created on their own, or as part of a [Project](/docs/configure/projects).

-   [Workspace Image](/docs/configure/workspaces/workspace-image)
-   [Tasks](/docs/configure/workspaces/tasks)
-   [Ports](/docs/configure/workspaces/ports)
-   [Collaboration](/docs/configure/workspaces/collaboration)
-   [Multi-repo](/docs/configure/workspaces/multi-repo)
-   [Workspace Classes](/docs/configure/workspaces/workspace-classes)

## User Settings

[User settings](/docs/configure/user-settings) allow you to customize your own personal Gitpod experience.

-   [Browser Extension](/docs/configure/user-settings/browser-extension)
-   [Browser Settings](/docs/configure/user-settings/browser-settings)
-   [Browser Bookmarklet](/docs/configure/user-settings/browser-bookmarklet)
-   [Dotfiles](/docs/configure/user-settings/dotfiles)
-   [SSH](/docs/configure/user-settings/ssh)
-   [Access Tokens](/docs/configure/user-settings/access-tokens)

## Projects

[Projects](/docs/configure/projects) are the connection between Gitpod and one or more git repositories and allow you to manage [Prebuilds](/docs/configure/projects/prebuilds). Like Workspaces, Projects are always associated with an [Organization](/docs/configure/orgs).

-   [Prebuilds](/docs/configure/projects/prebuilds)
-   [Incremental Prebuilds](/docs/configure/projects/incremental-prebuilds)
-   [Last Successful Prebuild](/docs/configure/projects/last-successful-prebuild)
-   [Environment Variables](/docs/configure/projects/environment-variables)

## Organizations

[Organizations](/docs/configure/orgs) in Gitpod allow you to share projects and their settings amongst many organization individuals.

## Authentication

-   [GitLab](/docs/configure/authentication/gitlab)
-   [GitHub](/docs/configure/authentication/github)
-   [BitBucket](/docs/configure/authentication/bitbucket)
-   [GitHub Enterprise](/docs/configure/authentication/github-enterprise)
-   [Bitbucket Server](/docs/configure/authentication/bitbucket-server)

## FAQs

### No internet access over HTTPS (port 443) on Docker containers with custom network

When creating a new Docker network and starting a fresh container, you might encounter issues with HTTPS requests not receiving a response. HTTP requests, however, work as expected.

This issue is likely caused by a wrong MTU (Maximum Transmission Unit) setting. To fix the problem, create a new network and specify the MTU value as 1440:

```bash
docker network create mynetwork --opt "com.docker.network.driver.mtu=1440"
```

For more discussions related to MTU value causing problems, refer to the [Gitpod Discord](https://discord.com/channels/816244985187008514/1077511515525091329).
