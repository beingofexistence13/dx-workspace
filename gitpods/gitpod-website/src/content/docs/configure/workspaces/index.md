---
section: workspaces
title: Workspaces
description: Learn how to configure and manage workspaces in Gitpod. Workspaces are ephemeral development environments that are created on demand and can be shared with others to collaborate.
---

# Workspaces

Gitpod is not simply "moving your laptop into the cloud". One key benefit of using a Cloud Development Environment ([CDE](/cde)) is _reproducibility_. When your workspace is configured, opening a new workspace is effortless—allowing you to fully embrace ephemeral development environments.

## Understanding Gitpod configuration

### The gitpod.yml file

The primary method of configuration is using a YAML file named `.gitpod.yml`, located at the root of your repository. The `gitpod.yml` file defines (for example):

1. The processes to start for your project - e.g. a database or webserver.
2. Required tools to install before the project starts.
3. Any editor extensions or IDE plugins to install.

See the [.gitpod.yml reference](/docs/references/gitpod-yml) page for more.

`youtube: fA2fpqP1xaM`

### A gitpod.yml example

```yml
image: gitpod/workspace-full

# Commands that will run on workspace start
tasks:
    - name: Setup, Install & Build
      before: yarn global add express
      init: yarn install
      command: yarn build

# Ports to expose on workspace startup
ports:
    - port: 3000
      onOpen: open-preview
      name: Website
      description: Website Preview
```

**Caption:** An example project configured to install, build and run a `yarn` project with a webserver, exposed on port 3000. On start, an in-editor preview of the webserver is opened automatically.

### The workspace image

In addition to the `gitpod.yml` you can also specify a workspace image for:

1. Application portability
2. Re-using an existing Dockerfile

Currently, Gitpod only supports Docker for workspace images. The Dockerfile can either be kept alongside your Gitpod configuration, or you can consume an existing public, or private image.

See [Workspace Image](/docs/configure/workspaces/workspace-image) for more.

## Creating a Gitpod configuration

You can create a `.gitpod.yml` manually, or by using the `gp init` command (or `gp init -i` for interactive mode). The `gp` CLI tool is part of the [Gitpod CLI](/docs/references/gitpod-cli), which is included in all Gitpod workspaces by default.

```sh
gp init
```

See the [Gitpod CLI](/docs/references/gitpod-cli) page for more.

## Validate your Gitpod configuration

You can test your configuration, including your `.gitpod.yml`, without leaving your workspace or committing your changes by using the `gp validate` command. This command opens a workspace (that runs from within your current workspace) which includes your configuration changes. Thus, allowing you to troubleshoot workspace configuration (ports, tasks, etc.) and more.

You can use the `gp validate` command to test various configuration setups: simple workspace starts (without Prebuilds enabled), workspace starts using a Prebuild, or for debugging Prebuilds themselves. See below for the differences:

| Command                  | Steps ran                     |
| ------------------------ | ----------------------------- |
| `gp validate`            | `before` + `init` + `command` |
| `gp validate --prebuild` | `before` + `init`             |

<!-- | `gp validate --from="prebuild"` | `before` + `command`          | -->

> **Tip:** For improved speed and convenience while updating your workspace configuration, consider starting your workspace using a large [Workspace Class](/docs/configure/workspaces/workspace-classes).

### Validate a workspace start

1. Run `gp validate` to emit a Workspace URL.
2. Open the workspace and review your configuration.
3. Update your configuration in the original workspace, and re-run `gp validate` (if needed).

### Validate a Prebuild

You can run `gp validate --prebuild` to validate how a prebuild process would look upon completion (this runs `before` and `init` tasks, but not `command` tasks).

1. Run `gp validate --prebuild` - This command will emit a Workspace URL.
2. Open the workspace to check your configuration.
3. Update configuration in the original workspace, re-running `gp validate` if needed.

> **Important:** This command runs the workspace _as_ a Prebuild not _from_ a prebuild. Meaning this produces the same environment that is created by a Prebuild process, before a workspace is subsequently started using it.

## Apply configuration changes

To apply your changes for all subsequent workspaces, commit and push the `gitpod.yml` (and `.gitpod.Dockerfile` if you created one) to the root of your repository.

Open the commit in a new workspace by either:

1. Prefixing your repo URL with `https://gitpod.io/#`
    - **For example:** https://gitpod.io/#https://github.com/nodejs/node
2. Opening a new workspace from the [Gitpod dashboard](https://gitpod.io/dashboard)
3. Installing, and using the [Gitpod Browser Extension](/docs/configure/user-settings/browser-extension#browser-extension)

> **Important:** You must commit the `.gitpod.yml` to the root of the repository and start a new workspace for changes to apply (a workspace restart is not sufficient).

## FAQs

### [Can I use an Android emulator with Gitpod and JetBrains IntelliJ IDEA for Android development?](https://discord.com/channels/816244985187008514/1107341075384897598)

Android app development is possible in Gitpod, but you cannot directly run an Android emulator on Gitpod. Check this relevant issue:

-   [gitpod-io/gitpod#1273](https://github.com/gitpod-io/gitpod/issues/1273)

You have two options:

1. Connect to a physical device with a wirelessly exposed `adb` server. Some guides:
    - [Connect to a device over Wi-Fi (Android Developer)](https://developer.android.com/tools/adb#connect-to-a-device-over-wi-fi)
2. Use the exposed `adb` server from a local Android emulator (e.g. from JetBrains Android Studio)

In both methods, you need to use reverse SSH port forwarding to access the `adb` server inside a Gitpod workspace. For instructions, see:

-   [Port forwarding (Gitpod Documentation)](https://www.gitpod.io/docs/configure/workspaces/ports#port-forwarding)

You might also want to use Gitpod with JetBrains IDE locally:

-   [IntelliJ / CLion (Gitpod Documentation)](https://www.gitpod.io/docs/references/ides-and-editors/intellij)

For Flutter Android development, there is a template available: [gitpod-samples/template-flutter](https://github.com/gitpod-samples/template-flutter)

### [IP addresses of Gitpod workspace](https://discord.com/channels/816244985187008514/1099925986088333424)

**Q: How can I connect to an Azure SQL instance from a Gitpod.io workspace? Is there a way to get a public IP to whitelist?**

A: Gitpod workspaces do not have dedicated static IPs. However, you can use a proxy server IP and link it with your Gitpod workspaces using Tailscale integration. For more information, refer to [Gitpod's Tailscale Integration documentation](https://www.gitpod.io/docs/integrations/tailscale).

### [Is it possible to run a Kubernetes cluster in a Gitpod workspace using minikube or kind (or other alternatives)?](https://discord.com/channels/816244985187008514/1094565343038550016)

You cannot run a Kubernetes cluster directly in a Gitpod workspace using minikube or kind. However, you can run it through QEMU using the following Gitpod template: [template-k3s](https://github.com/gitpod-io/template-k3s). You can also use [template-nixos](https://github.com/gitpod-io/template-nixos).

Relevant GitHub issue: https://github.com/gitpod-io/gitpod/issues/4889
