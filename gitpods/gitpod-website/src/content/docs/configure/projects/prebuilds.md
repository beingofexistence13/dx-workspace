---
section: projects
title: Gitpod Prebuilds
description: Learn how to configure prebuilds for your Gitpod projects. Prebuilds reduce wait time,by installing dependencies or running builds before you start a new workspace.
---

# Prebuilds

Prebuilds help optimize the time to start a workspace by executing any defined installation tasks from the `.gitpod.yml` in an associated repository asynchronously ahead of time. Gitpod will search the last 100 ancestor commits for a successful prebuild to use as a base for a workspace. Prebuilds work similarly to Continuous Integration (CI) systems by responding to an SCM trigger (e.g. a webhook). For Prebuilds, it helps to be familiar with the following Gitpod features:

1. [Projects](/docs/configure/projects)
2. [Tasks](/docs/configure/workspaces/tasks)
3. [.gitpod.yml](/docs/references/gitpod-yml)

`youtube: DwkoOz1GSVg`

## Prebuild settings

### Commit Interval

To balance frequency of prebuilds with repository activity (e.g. number of commits) you can adjust the number of commits that are skipped between prebuilds. The default is `20`.

### Filtering Prebuilds

A Prebuild filter allows you to configure when a Prebuild should execute. Prebuild filters help to save costs by not running Prebuilds unnecessarily. You can filter prebuilds in your project settings by:

1. Enable (or disable) Prebuilds
2. On every push event for:
    - all branches (the default setting)
    - default branch only (e.g. main)
    - only branches specified (via glob pattern)

## Managing Prebuilds

To configure a Prebuild for a repository you must:

1. Add a `init` or `before` task in the repository [gitpod.yml](https://www.gitpod.io/docs/references/gitpod-yml).
2. Create a corresponding [Project](/docs/configure/projects) for the repository.
3. Enable Prebuilds in the project settings.

> **Tip:** You can test changes to your tasks and `.gitpod.yml` directly in your workspace by running the `gp validate --prebuild` command.

### Configuring Prebuilds

A prebuild cannot be executed unless you tell Gitpod explicitly which steps in your `.gitpod.yml` should be ran in the prebuild. You can do this by ensuring you have either an `init` or `before` task.

The below example `.gitpod.yml` shows a repository that will run `npm install` inside a Prebuild. The `command` task with `npm start` is not executed in the Prebuild as it's assumed to be a long-running process, e.g. running a web server.

```yml
tasks:
    - init: |
          npm install
    - command: |
          npm start
```

### Enabling prebuilds

When a Prebuild ran successfully, you will see the following in your workspace output:

```txt
🍊 This task ran as a workspace prebuild
⏱️ Well done on saving 6 minutes
```

Since prebuilds are included in all our metered [pay-as-you-go](https://www.gitpod.io/docs/configure/billing) plans, configuring prebuild settings in your project should help with managing prebuild usage.

### View prebuilds

You can find a log of past Prebuilds in your Project settings.

1. Go to the [/projects](https://gitpod.io/projects) page.
2. Select the Project.
3. Navigate to the "Prebuilds" tab to see Prebuild history.

### Rerun a Prebuild

Prebuilds can be triggered manually for debugging purposes. To rerun a prebuild:

1. Navigate to your project and select the Prebuilds tab.
2. Select the Prebuild.
3. Select "Rerun Prebuild".

## Prebuild limitations

### Adding Prebuilds requires webhook permissions

Enabling Prebuilds requires the user to have SCM permissions to create a webhook.

### Only the `/workspace` directory is persisted from a Prebuild

Once a Prebuild is completed, a snapshot of the filesystem is taken. However, this snapshot only includes the `/workspace` directory. Other directories like the home directory are not saved by Prebuilds. To ensure the necessary files are saved, copy them to the `/workspace` directory before the Prebuild completes, and/or restore those files in your `command` task.

### Prebuilds have a 1 hour time limit

Prebuilds have a timeout of 1 hour. If your `before` and `init` tasks combined exceed 1 hour, your Prebuild will be terminated.

### Prebuilds are executed as the user who enables them

To pull git information into a workspace, Prebuilds are executed on behalf of the user who created the Prebuild.

## Frequently Asked Questions (FAQs)

#### Can I use project environment variables in Prebuilds?

Environment variables that are defined in project settings will be visible in Prebuilds.
