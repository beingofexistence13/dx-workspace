---
section: projects
title: Projects
description: Learn how to manage projects in your Organization. Also learn about project roles and permissions. It allows configuring settings like environment variables and prebuilds for repositories in your Organization.
---

# Projects

A project is an **optional** way to collaboratively add configuration and refine the experience of working with a repository in Gitpod. Specifically, you can change Prebuild settings to improve workspace start performance, and other configurations such as environment variables which will be accessible by all users who can access a project.

## How are Projects useful?

1. **Improve workspace start performance** - Enabling Prebuilds will help to speed up the time to open a workspace in Gitpod by running defined installation tasks in `.gitpod.yml` asynchronously ahead of time. Prebuilds work similarly to Continuous Integration (CI) systems by responding to an SCM trigger (webhook) and remotely executing instructions.
2. **Highlighting configured repositories** - When you create projects in Gitpod, you are signalling to members of your Organization that the repository is configured and "ready-to-code", a project allows you to collaborate together to improve your developer experience.
3. **Add dynamic configuration** - With Projects you can attach environment variables to be used in your `.gitpod.yml` configuration. It can be useful to centrally manage your environment variables, as opposed to manually handling the distribution of environment variables to all the users of a Gitpod Organization.

## How Projects relate to a repository `.gitpod.yml`

The project entity is complimentary to a repository `.gitpod.yml` definition. For instance, you can access the Project environment variables from within the scripts in your `.gitpod.yml`. The `init` and `before` tasks in your `.gitpod.yml` signal to Gitpod that those specific tasks can be ran as a Prebuild, if Prebuilds are enabled.

## How Projects behave in Gitpod

1. **Projects are associated within an Organization** - A project is created within a single Gitpod Organization so that when Prebuilds are then enabled on a project, the costs can be attributed.
2. **A repository can only have one project** - You can only connect one project to a single repository. In other words, creating two projects for a single repository is not possible with Gitpod.
3. **All Organization members create and edit all projects** - All members of an Organization can see all Projects, and all members can update any setting in any Project.
4. **Projects are shown regardless of SCM Authorization** - All Projects are viewable regardless of whether the user has access to the respective SCM (e.g. GitHub). Though, an error will be shown when starting workspaces where the user if not permitted to access the repository.

## Managing Projects

### Viewing a Project

1. Ensure that you are looking at the correct Organization using the Organization switcher in the top left of the dashboard.
2. To view all your Organization projects visit [/projects](https://gitpod.io/projects).

### Adding a Project

1. Projects are created in the current Organization. Ensure you are looking at the correct Organization using the Organization switcher in the top left of the dashboard.
2. Add a new Project to the Organization by visiting [/projects/new](https://gitpod.io/projects/new). You can also create Projects directly from the [/projects](https://gitpod.io/projects) page.

<!-- * A user can only add repositories that they have access to.  -->

<!-- * You may also be prompted to configure our [GitHub app](/docs/configure/authentication/github#authorizing-github-webhooks), the first time a project is created for a GitHub account. The new project will be associated with the current Organization selected in the dashboard. -->

### Configuring a Project

All Organization members can perform the following actions via the Project settings:

1. Rename a Project
    - Choose any name up to 32 characters (default: repository name)
2. Configure [Prebuilds](/docs/configure/projects/prebuilds) for improved workspace start performance
    - Enable/disable Prebuilds (default: disabled)
    - Select Prebuild filters (e.g. branch pattern)
    - Associated workspace class for the Prebuild
3. Add [Environment Variables](/docs/configure/projects/environment-variables) to the Prebuild
    - Optionally, you can remove (e.g. "unset") environment variables following a Prebuild

### Remove a project

1. Go to the [/projects](https://gitpod.io/projects) list page.
2. Select the Project you wish to delete.
3. Select "Remove Project"

## FAQs

### The "New Project" page is not finding the repositories I expect?

1. Reconnect your git provider in [/integrations](https://gitpod.io/integrations).
2. Ensure at least read scopes/permissions are set for the git integration in [user settings](https://gitpod.io/settings).
