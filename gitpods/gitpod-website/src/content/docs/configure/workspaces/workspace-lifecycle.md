---
section: workspaces
title: Workspace Lifecycle
description: Gitpod brings a new way to think about your development environment. Rather than a single local environment that you keep up-to-date, with Gitpod you can have as many workspaces as you need. This page describes the lifecycle of a Gitpod workspace.
---

# Workspace Lifecycle

Gitpod brings a new way to think about your development environment. Rather than a single local environment that you keep up-to-date, with Gitpod you can have as many [workspaces](/docs/configure/workspaces) as you need.

## Workspace Statuses

The state of the workspace is indicated by the color of the workspace indicator. For example, in the Gitpod [dashboard](https://gitpod.io/workspaces), workspace state is shown on the workspace list.

1. 🟠 **Starting** - Workspace provisioning, inaccessible to the user.
2. 🟢 **Running** - Workspace loaded, accessible to the user.
3. 🟠 **Stopping** - Workspace being stopped, backups performing.
4. 🔴 **Stopped** - Workspace no longer accessible. File system preserved for restart.

> **Important:**
>
> -   Only files in the `/workspace` directory are kept between state transitions.
> -   Any changes made to `/workspace` from a [custom Dockerfile](/docs/configure/workspaces/workspace-image#use-a-custom-dockerfile) will be overwritten/overlaid by a mount.

The following describes each workspace status in detail, including what can cause a workspace to transition from one status to another.

### Workspace Starting

When you open a workspace, it will be in the "starting" state. This means that the workspace is being created and the initialization process is running.

-   Where a workspace is being provisioned and initialized.
-   If configured and available, a prebuild snapshot is used.
-   Otherwise, source control is downloaded into the workspace.

### Workspace Running

-   An active workspace is provisioned within Gitpod.
-   The workspace can be accessed by the user.

### Workspace Stopped

-   No provisioned workspace is running (e.g. ports and URLs are not accessible).
-   Only files and directories inside `/workspace` are preserved.
-   If the workspace is restarted, the URL is preserved.
-   A start is required before the workspace can be used.

### Workspace Deleted

Workspaces are deleted after 14 days. Pinned workspaces are never deleted automatically.

## Workspace Actions

### Workspace Pinning

A pinned workspace is never deleted. You can pin a workspace from your [workspace list](https://gitpod.io/workspaces/) in the Gitpod dashboard.

### Workspace Snapshotting

You can create a snapshot of a workspace to save its state. This is useful if you want to keep a workspace around for a longer period of time, than the default. Read more about [Snapshots](/docs/configure/workspaces/collaboration).

## Workspace Deletion

Stopped workspaces are automatically deleted 14 days since the last workspace start. Pinned workspaces are never deleted. You can pin a workspace from your [workspace list](https://gitpod.io/workspaces/) in the Gitpod dashboard.

## Workspace Timeouts

Running workspaces stop automatically after a period of inactivity.

### Workspace Inactivity

By default, workspaces stop following 30 minutes without user input (e.g. keystrokes or terminal input commands). You can increase the workspace timeout up to a maximum of 24 hours.

### Extend Inactivity Timeouts

> Free plan users cannot update their default workspace inactivity timeout (see [pricing](https://www.gitpod.io/pricing)).

**Current workspace** - You can extend the inactivity timeout of their current workspace using the `gp timeout set` command from the [Gitpod CLI](/docs/references/gitpod-cli) (installed in all gitpod workspaces by default), through the Command Palette in VS Code, or the Backend Control Center in JetBrains Gateway. Extending the workspace inactivity timeout only applies to the currently running workspace.

**Default** - You can set a default workspace inactivity timeout for all new workspaces opened via the [preferences page](https://gitpod.io/preferences). The timeout default cannot currently be set by an organization owner.

### Workspace lifetime

Workspace have a maximum lifetime. This means that workspaces will be shut down after this period even if the inactivity timeout has not been reached yet. Currently the lifetime of a workspace if you are a free plan user is 8 hours and 36 hours if you are on a paid plan.

### Editor or IDE Disconnect

All inactivity timeouts are dependent on an active editor or IDE connection. Closing your Gitpod connected editor or IDE will reduce the workspace timeout to 5 minutes unless an explicit workspace inactivity timeout is set via user preference, or via the Gitpod CLI.
