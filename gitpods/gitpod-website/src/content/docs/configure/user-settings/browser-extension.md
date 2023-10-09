---
section: user-settings
title: Browser Extension
description: Learn how to use the Gitpod browser extension to quickly spin up Gitpod workspaces from any GitHub, GitLab or Bitbucket repository.
---

<script>
  import Keybind from "$lib/components/keybind.svelte";
</script>

# Browser Extension

Creating a workspace is as easy as prefixing any GitHub URL with `gitpod.io/#`.

For convenience, we developed the Gitpod browser extension. It adds a button to GitHub, GitLab or Bitbucket repositories that does the prefixing for you – as simple as that.

![The Gitpod button on a GitHub repository, created by the browser extension](/images/docs/browser-extension-repo.png)

We provide the extension for:

-   [Chrome](https://chrome.google.com/webstore/detail/gitpod-online-ide/dodmmooeoklaejobgleioelladacbeki) - also works for Edge, Brave and other Chromium-based browsers.
-   [Firefox](https://addons.mozilla.org/firefox/addon/gitpod/)

## Access the extension settings

You can access the extension settings by clicking on the Gitpod icon in the browser toolbar. In the resulting popup you can find a comprehensive view of all possible customization.

<img class="shadow-medium w-full rounded-xl max-w-3xl mt-x-small" alt="Gitpod browser extension configuration" src="/images/docs/browser-extension-settings.webp">

## Use a custom Gitpod instance URL

If you are using a custom Gitpod instance (e.g., [Gitpod Dedicated](/dedicated)) you can still use the browser extension by configuring it with your instance URL.

After you have installed the extension, open its options and enter your custom Gitpod instance URL.

## Source Code

Gitpod's browser extension is open source. You can check out its [source code](https://github.com/gitpod-io/browser-extension), or even open it in Gitpod:

[![Open in Gitpod](https://gitpod.io/button/open-in-gitpod.svg)](https://gitpod.io/#https://github.com/gitpod-io/browser-extension)
