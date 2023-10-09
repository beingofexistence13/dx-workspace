---
section: integrations
title: GitHub
---

# GitHub

GitHub (Enterprise and Cloud) can be connected as a Source Code Management (SCM) integration in Gitpod.

## What does the GitHub integration do?

SCM providers are connected to individual user accounts in Gitpod to allow Gitpod to:

1. Pull repository content into workspaces.
2. Allow users to commit back to SCM from their workspaces.

## Managing the GitHub integration

### Adding the GitHub integration

1. Navigate to your [User Settings](gitpod.io/user/integrations).
2. Click "connect" on the GitHub integration and follow the steps.

### Modifying permissions for the GitHub integration

Each integration has it's own unique set of scopes (permissions) that the integration is authorized to perform.

1. Navigate to your [User Settings](gitpod.io/user/integrations).
2. Click "edit permissions" on the GitHub integration and follow the steps.

### Removing the GitHub integration

1. Navigate to your [User Settings](gitpod.io/user/integrations).
2. Click "disconnect" on the GitHub integration.

## Configuring Prebuilds via `.gitpod.yml`

> **Deprecated:** Configuring Prebuild and Prebuild filters using the `.gitpod.yml` is deprecated, see [Prebuilds](/docs/configure/projects/prebuilds) for more. See [archived documentation](/docs/integrations/github-gitpod-yaml).
