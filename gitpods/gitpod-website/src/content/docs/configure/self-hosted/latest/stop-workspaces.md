---
section: self-hosted/latest
subsection: troubleshooting
title: Stop Workspaces
---

# Stop Workspaces

> ⚠️ **Gitpod Self-hosted is [no longer supported](/blog/introducing-gitpod-dedicated)**
>
> The last update of Gitpod Self-hosted product was [November 2022](/changelog/november-self-hosted-release). Users can still request our [free community license](/community-license) however there will be no support or updates to the product. If you are interested in an isolated, private installation of Gitpod, take a look at [Gitpod Dedicated](/dedicated).

Sometimes it becomes necessary to stop Gitpod workspaces (in a `<namespace>`). Usually this needs to be done when updating Gitpod. Please see the [update guide](./updating) for more information.

This can be done with `kubectl`, and when done so, the IDE is closed, data in `/workspace` is backed up, and then the pod finally terminates.

## A Single Workspace

```shell
$ kubectl delete pods <workspace-or-headless-pod-name> -n <namespace>
```

## All Workspaces

> **Caution**: This will delete all actively running workspaces.

Can be done prior to outage windows, or for troubleshooting.

```shell
$ kubectl delete pods -l component=workspace -n <namespace>
```
