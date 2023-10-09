---
title: Blazing fast workspace starts are now easier than ever, with simplified default settings for prebuilds
alt: Image showing prebuild settings in project settings in Gitpod.
date: 2023-10-06
excerpt: Prebuild filters now are set across all providers—GitHub, GitLab and Bitbucket—consistently. Prebuild filter settings are configured via Project settings, and not via the `.gitpod.yml`.
image: prebuild-settings.jpg
ogImage: prebuild-settings.jpg
customSlug: simplified-prebuilds-defaults
---

Enabling prebuilds to increase the performance of workspace starts should be simple. With prebuilds enabled you unlock more of the developer velocity potential of Cloud Development Environments for your organization.

To make prebuilds simpler and easier to use, we've drastically simplified the default prebuild settings. We've removed the previous settings for "incremental prebuilds", "use last successful prebuild" and "cancel prebuild on outdated commits" and instead created a set of simpler and more intuitive defaults that just work™.

If you do need more advanced fine-tuning of your prebuild settings, you can also now filter when your prebuilds are triggered across all of your git providers (GitHub, GitLab and Bitbucket) through project settings.

### Simplified default prebuild settings

The previous prebuild settings for "incremental prebuilds", "use last successful prebuild" and "cancel prebuild on outdated commits" have now been removed and simplified. By default, all prebuilds:

1. Skip `20` commits by default (if no previous setting was applied)
2. Search the past 100 commits for a successful prebuild to base a workspace on
3. No longer prevent users from accessing workspaces if a prebuild is executing

These settings should work well for most projects out-of-the-box, without the need to apply additional filters. By increasing the [Commit Interval](/docs/configure/projects/prebuilds#commit-interval) you can balance freshness of prebuilds against the frequency of their execution.

**Note:** These setting defaults apply to all new and existing projects automatically.

### Branch filters for prebuilds on project settings

The improved prebuild defaults should work well for most projects. However, if your project requires more fine-tuning of when prebuilds are triggered, the following prebuild settings are now available for all git integrations:

1. All branches (the default setting)
1. Default branch only (e.g. main)
1. Only the branches specified (via glob pattern)

Previously only the [GitHub integration](/docs/integrations/github) could filter prebuilds—configured through the `.gitpod.yml`. All other providers, e.g. ([GitLab](/docs/integrations/gitlab) and [Bitbucket](/docs/integrations/bitbucket)) ran prebuilds on every commit push, with limited control.

> **Deprecation:** Prebuild settings in the `.gitpod.yml` are deprecated. All existing `.gitpod.yml` settings will apply until prebuilds are manually enabled in project settings. <br /> <br /> See [configuring Prebuilds via .gitpod.yml](/docs/integrations/github-gitpod-yaml) for archived documentation.

---

For more, see [Projects](/docs/configure/projects) and [Prebuilds](/docs/configure/projects/prebuilds).
