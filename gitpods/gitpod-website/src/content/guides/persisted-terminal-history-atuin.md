---
author: loujaybee
date: Thu July 6 2023 09:00:00 GMT+0000 (UTC)
excerpt: A guide for setting up Atuin, a tool to supercharge your terminal history, and sync history across all your Gitpod workspaces. Download the Atuin CLI, register, update your Dotfiles and you're set!
subtitle: A guide for setting up Atuin, a tool to supercharge your terminal history, and sync history across all your Gitpod workspaces. Download the Atuin CLI, register, update your Dotfiles and you're set!
teaserImage: header.webp
image: teaser.webp
title: 🔋 Supercharged persistent terminal history — With Gitpod + Atuin
---

A lot of your life improves as a developer when you use a [Cloud Development Environments](/cde) like Gitpod. No more wasted days with a broken environment, you can jump between projects without touching your local changes, and so on. To get to this nirvana with a CDE, you simply need to configure a few things—a small investment that pays back time every day !

One of those configurations is: persisted terminal history between workspaces. Because each workspace in Gitpod is brand new—so is your terminal history. Not being able to press the up arrow key and pull back all your previous commands can feel like a part of you is missing. In todays post, I'll run you through how you can set up terminal history using a CLI tool called [Atuin](https://atuin.sh/).

## What is Atuin?

![Atuin](/images/guides/persisted-terminal-history-atuin/atuin.png)

Atuin replaces your existing shell history with a SQLite database, and records additional context for your commands. Atuin provides optional and fully encrypted synchronisation of your history between machines, via an Atuin server (which [can also be self-hosted](https://atuin.sh/docs/self-hosting/)). The following steps are adapted from the Atuin [Getting Started](https://atuin.sh/docs/guide/) guide, so do check their documentation for more information.

## Getting Started

### Step 1: Install the `atuin` CLI and register an account

First, you need to register an account with Atuin. Since registering your account is a one-time step, using a temporary workspace is fine. You can use [gitpod.new](https://gitpod.new/) to create a blank workspace in Gitpod and run the following commands. Make sure to replace `<USERNAME>` and `<EMAIL>` with your own information.

```sh
bash <(curl https://raw.githubusercontent.com/ellie/atuin/main/install.sh)
atuin register -u <USERNAME> -e <EMAIL>
```

> Don't want to use `curl`? [Install with cargo, brew](https://atuin.sh/docs/advanced-install) and more.

You'll be prompted to create an Atuin account and for a password. You'll want to keep your password safe for the next step ! Once you're registered we will need to ensure that all your subsequently opened workspaces are configured to use Atuin by default.

### Step 2: Persist your Atuin key + password

After registration, Atuin generates an encryption key that is unique to you, and stores the key locally. The key is needed for logging in to other machines (that's workspaces when using Gitpod), and can be accessed by running the command:

```sh
atuin key
```

To ensure that Atuin works across all your workspaces you'll need to store both your key (to encrypt your history files) and your Atuin password to log in so they're accessible on each workspace start.

Whilst _you could_ use an [Environment Variable](/docs/configure/projects/environment-variables#environment-variables) to store your password and key, we suggest you store sensitive information in a password or secrets manager (see [how Gitpod works with Doppler](/blog/securely-manage-development-secrets-with-doppler-and-gitpod))

> **Tip:** You can connect your Gitpod workspaces to a 3rd party like Vault, or a cloud secret store like AWS Secrets Manager using [OIDC](/docs/configure/workspaces/oidc), avoiding the need to use environment variables for sensitive data like passwords and encryption keys.

### Step 3: Update your dotfiles for the install

Finally, you'll need to ensure Atuin is installed in all workspaces, and to do this, we'll use Gitpod's support for [Dotfiles](/docs/configure/user-settings/dotfiles). Dotfiles are scripts that run in all of your workspaces so that you can personalise their configuration, and are setup by linking a Dotfiles repo in your user settings.

The following is an example `install.sh` you can use:

```bash
#!/usr/bin/env bash
bash <(curl https://raw.githubusercontent.com/ellie/atuin/main/install.sh)
atuin login -u "$ATUIN_USERNAME" -p "$ATUIN_PASSWORD" --key "$ATUIN_KEY"
atuin sync
```

Check out [gitpod-samples/dotfiles_atuin](https://github.com/gitpod-samples/dotfiles_atuin) for a reference dotfiles repo you can use.

### Step 4 (optional): Update your sync frequency configuration

The [default Atuin sync is set to 1 hour](https://atuin.sh/docs/config/#sync_frequency). As Gitpod workspaces are ephemeral, your workspace could [timeout](https://www.gitpod.io/docs/configure/workspaces/workspace-lifecycle#workspace-timeouts) before the sync. You can configure Atuin to [sync more frequently](https://atuin.sh/docs/config/#sync_frequency) in that case. To create an Atuin configuration file, and add the sync preference, add the following to your Dotfile script:

```sh
touch ~/.config/atuin/config.toml
echo "sync_frequency = \"5m\"" >> ~/.config/atuin/config.toml
```

### 🔋 Supercharged terminal history!

And, that's it. Now Atuin will be enabled in every new workspace, simply press the `up` key, `CTRL R` or use `atuin` on the command line to use your new, supercharged history that is available across all of your Gitpod workspaces (and anywhere else you need). Atuin has lots of options for: [changing the syncing frequency](https://atuin.sh/docs/config/#sync_frequency), [deleting history](https://atuin.sh/docs/commands/search), [configuring fish, zsh](https://atuin.sh/docs/key-binding) and more.

If you want to share your experiences using Gitpod with Atuin, or discuss terminal history in Gitpod generally, check out the GitHub Issue [#9019](https://github.com/gitpod-io/gitpod/issues/9019) to leave us your thoughts and ideas.
