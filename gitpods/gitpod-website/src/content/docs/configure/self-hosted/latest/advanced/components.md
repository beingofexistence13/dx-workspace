---
section: self-hosted/latest
subsection: installation-guides
title: Component Customization
---

# Component Customization

> ⚠️ **Gitpod Self-hosted is [no longer supported](/blog/introducing-gitpod-dedicated)**
>
> The last update of Gitpod Self-hosted product was [November 2022](/changelog/november-self-hosted-release). Users can still request our [free community license](/community-license) however there will be no support or updates to the product. If you are interested in an isolated, private installation of Gitpod, take a look at [Gitpod Dedicated](/dedicated).

In this guide, we expect you to have a cluster up and running that [meets the requirements](../requirements) and has the [required components](../requirements) installed and configured (at least cert-manager is needed).

This guide assumes that you are using our default installation method from our [installation guide](/docs/configure/self-hosted/latest/installing-gitpod).

## Rationale

Gitpod self-hosted is built to work by default, but it also has to be incredibly flexible. Our installation defaults will work for the vast majority of users, but there will be occassions when it does not. In order to add more flexibility, you have the ability to customise some of Gitpod's components.

In your KOTS dashboard, you will need to enable advanced options. This will enable the "Components" section.

![kots-advanced](/images/docs/self-hosted/kots-advanced.png)

### Proxy service type

All web traffic enters the application through the `Proxy` component. By default, this is a `LoadBalancer` type which will expose the application through the cloud provider's load balancer.

Under certain circumstances, this may be undesirable. Under the "Advanced" section, you may select a different service type - all [Kubernetes service types](https://kubernetes.io/docs/concepts/services-networking/service/#publishing-services-service-types) are supported, except `ExternalName`. If you are using anything other than `LoadBalancer`, you are responsible for configuring your network to route traffic through to the `proxy` service.
