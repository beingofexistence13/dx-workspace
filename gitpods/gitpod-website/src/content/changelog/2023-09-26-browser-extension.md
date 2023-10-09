---
title: Start workspaces faster with the Gitpod Browser Extension v2
alt: Image of the redesigned Gitpod button in GitHub's toolbar.
date: 2023-09-28
customSlug: browser-extension-v2
excerpt: 'Introducing the Gitpod Browser Extension v2: start workspaces faster by remembering settings and expanded compatibility with BitBucket Datacenter and Self-Hosted GitLab. Now available for both Chrome and Firefox.'
image: browser-extension-button.webp
ogImage: browser-extension-button.webp
---

The Gitpod browser extension has now been updated with the following changes:

1. **Start new workspaces faster** - To save time, the default browser extension action will open your workspaces using either your stored [autostart](/docs/configure/workspaces/autostart) preferences for the repository, or your user settings. To override this behavior and choose your settings manually, you can use the _"Open with options..."_ secondary option on the Gitpod button.
2. **Support for Self-Hosted BitBucket and GitLab** - The browser extension is now compatible with both Bitbucket Datacenter and GitLab Self-hosted installations. No special steps are required: with the extension installed navigate to your BitBucket or GitLab instance to see the Gitpod button appear within the interface.

**Getting Started**:

1. **Update or install the extension** - If you do not have the extension already installed, you can download it from the [Chrome Web Store](https://chrome.google.com/webstore/detail/gitpod-always-ready-to-co/dodmmooeoklaejobgleioelladacbeki) or the [Firefox Add-ons page](https://addons.mozilla.org/en-US/firefox/addon/gitpod/). If you have already had the extension installed your browser will automatically update it.
2. **Update the host setting (optional)** - For Gitpod Dedicated customers you can update your extension host setting by clicking the Gitpod icon in your browser bar and adding your Dedicated installation URL e.g. `your-company.gitpod.cloud`.

> **Important:** If you already had the browser extension installed, you may have to **re-enable the extension and accept new permissions**. Why? We removed host name restrictions to allow for self-hosted SCM support.

For more, see the [browser extension](/docs/configure/user-settings/browser-extension) documentation.
