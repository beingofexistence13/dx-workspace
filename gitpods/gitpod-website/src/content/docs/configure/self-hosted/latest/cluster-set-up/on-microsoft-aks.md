---
section: self-hosted/latest
title: Microsoft Azure Kubernetes Service (AKS)
---

# How to Create a Cluster on Microsoft Azure Kubernetes Service (AKS)

> ⚠️ **Gitpod Self-hosted is [no longer supported](/blog/introducing-gitpod-dedicated)**
>
> The last update of Gitpod Self-hosted product was [November 2022](/changelog/november-self-hosted-release). Users can still request our [free community license](/community-license) however there will be no support or updates to the product. If you are interested in an isolated, private installation of Gitpod, take a look at [Gitpod Dedicated](/dedicated).

Instructions on how to create a Microsoft AKS environment that is ready to install Gitpod are located in the [gitpod-io/gitpod-microsoft-aks-guide](https://github.com/gitpod-io/gitpod-microsoft-aks-guide) repository on GitHub. The installation process takes around twenty minutes. In the end, the following resources are created:

-   An Microsoft AKS cluster running Kubernetes v1.21.
-   An Microsoft Azure load balancer.
-   An Microsoft Azure DNS zone.
-   An Microsoft Azure container registry.
-   MySQL will be provided by Helm under [#5508](https://github.com/gitpod-io/gitpod/issues/5508) solved.
-   Minio will be used until Microsoft [Azure storage gateway](https://github.com/gitpod-io/gitpod-azure-aks-guide/issues/1) is configured.
-   Installation of [calico](https://docs.projectcalico.org) as CNI and NetworkPolicy implementation
-   Installation of [cert-manager](https://cert-manager.io/) for self-signed SSL certificates

Upon completion, this script will print the config for the resources created (including passwords) and what is the [next relevant step](/docs/configure/self-hosted/latest/installing-gitpod#install-gitpod) in the installation process. Note that you will be able to skip steps 2 and 3 in the getting started guide because the script can do these steps for you.
