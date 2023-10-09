---
section: self-hosted/latest
subsection: troubleshooting
title: Prevent Workspace Starts
---

# Prevent Workspace Starts

> ⚠️ **Gitpod Self-hosted is [no longer supported](/blog/introducing-gitpod-dedicated)**
>
> The last update of Gitpod Self-hosted product was [November 2022](/changelog/november-self-hosted-release). Users can still request our [free community license](/community-license) however there will be no support or updates to the product. If you are interested in an isolated, private installation of Gitpod, take a look at [Gitpod Dedicated](/dedicated).

It may be necessary for you to prevent users from starting Gitpod workspaces (in a `<namespace>`). Please see the [update guide](./updating) for more information.

> It is required to prevent workspace starts when updating Gitpod and using the [Single Cluster Reference Architecture](../latest/reference-architecture/single-cluster-ref-arch) because it is not highly-available.

This can be done with `kubectl`, after which, users won't be able to start workspaces until the `ws-manager` pod is running again.

> **Caution:** You must [stop running workspaces](./stop-workspaces) and wait for them to terminate before proceeding. Failure to do so can result in user data loss, because the workspaces will not be able to reliably back-up.

To scale-down the `ws-manager` component and prevent workspace starts:

```shell
kubectl scale --replicas=0 deployment/ws-manager -n <namespace>
```

After which, users will receive an error when trying to start workspaces. Once Gitpod is redeployed, this change will be reset automatically and workspaces will be allowed to start again.
