---
section: getting-started
title: Getting started
description: Learn how to start your first Gitpod workspace for free, set up a gitpod.yml configuration file and enable Prebuilds.
---

# Getting started

In this guide we'll walk you through the basics to get up and running with Gitpod today.

-   [Step 1: Your first workspace](#step-1-your-first-workspace)
-   [Step 2: Customize Gitpod](#step-2-customize-gitpod)
-   [Step 3: Gitpodify a project](#step-3-gitpodify-a-project)

## Step 1: Your first workspace

`youtube: ij1msCffQZA`

The best way to get see the power of Gitpod, is to try it out by starting your first [Workspace](/docs/configure/workspaces).

To start your first workspace:

1. Navigate to a GitHub, GitLab or Bitbucket repository.
2. Open the repo in Gitpod by prefixing the URL with: `gitpod.io/#`.
3. Confirm the workspace creation.

For example, click this link to open the NodeJS project in a Gitpod workspace:

[`https://gitpod.io/#https://github.com/nodejs/node`](https://gitpod.io/#https://github.com/nodejs/node)

## Step 2: Customize Gitpod

`youtube: c6zc3LL1S98`

Gitpod can be customized depending on the needs of the project, and your own personal taste. With Gitpod, you can set an IDE preference between VS Code and JetBrains, either working in the browser, or on your desktop application. You can add custom scripts via Dotfiles.

### Set your IDE preference

<figure>
  <video controls playsinline autoplay loop muted class="shadow-medium w-full rounded-xl max-w-3xl mt-x-small" src="/images/editors/select-jetbrains-ide.webm" type="video/webm"></video>
  <figcaption>Updating Gitpod IDE preferences to {title}</figcaption>
</figure>

Work in the browser with [VS Code Browser](/docs/references/ides-and-editors/vscode-browser), or on desktop with [VS Code Desktop](/docs/references/ides-and-editors/vscode) or [JetBrains Gateway](/docs/integrations/jetbrains-gateway). To set your preferences, navigate to [gitpod.io/preferences](https://gitpod.io/preferences) to set your [IDE preference](/docs/references/ides-and-editors).

### Install the browser extension

![Browser Extension](/images/docs/browser-extension-repo.png)

A convenient way to work with Gitpod is using our [browser extension](/docs/configure/user-settings/browser-extension). Using the extension you can open workspaces directly from inside GitHub, GitLab or Bitbucket.

### Set your Dotfiles

Dotfiles are a way to customize your developer environment according to your personal needs. To configure Gitpod to use your own dotfiles for all your workspaces, enter the URL of a dotfiles repository in your user preferences. See [Dotfiles](/docs/configure/user-settings/dotfiles) for more.

See [User Settings](/docs/configure/user-settings) for more ways to customize Gitpod.

## Step 3: Gitpodify a project

Gitpod uses a `.gitpod.yml` file located at the root of your repository to unlock all benefits. It defines the processes to start for your project (e.g. a database or webserver), installs the required tools, editor extensions or IDE plugins. To get started:

1. Add a `.gitpod.yml` at the root of your repository.
    - You can use `gp init` to quickly generate the `.gitpod.yml` file.
2. Use the `gp validate` command to validate your configuration is working.
3. Commit and push to apply the configuration for all subsequent workspace starts.

Every opened workspace will now run the steps defined in your `gitpod.yml`.

For more, see the [.gitpod.yml reference](/docs/references/gitpod-yml) and [configuring workspaces](/docs/configure/workspaces).

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
      visibility: private
      protocol: https
```

**Caption:** An example project configured to install, build and run a `yarn` project with a webserver, exposed on port 3000. On start, the webserver preview is opened automatically.

See the [.gitpod.yml reference page](/docs/references/gitpod-yml) for more.
