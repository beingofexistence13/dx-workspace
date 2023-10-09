---
section: self-hosted/latest
subsection: installation-guides
title: TLS configuration for Gitpod Self-Hosted
---

# TLS configuration for Gitpod Self-Hosted

> ⚠️ **Gitpod Self-hosted is [no longer supported](/blog/introducing-gitpod-dedicated)**
>
> The last update of Gitpod Self-hosted product was [November 2022](/changelog/november-self-hosted-release). Users can still request our [free community license](/community-license) however there will be no support or updates to the product. If you are interested in an isolated, private installation of Gitpod, take a look at [Gitpod Dedicated](/dedicated).

To run your own Gitpod instance, you need a TLS certificate for your Gitpod domain. There are three options to provide these TLS certificates.

## Option 1: Cert-Manager

Configure cert-manager to issue these certificates (usually with a DNS-01 challenge and services like [Let's encrypt](https://letsencrypt.org/)). See the [installation guide](/docs/configure/self-hosted/latest/installing-gitpod#prerequisites)) for more information.

![kots-tls-cert-manager](/images/docs/self-hosted/kots-tls-cert-manager.png)

<p align="center"><em>TLS certificates configuration options during the installation process</em></p>

## Option 2: Self-signed by Gitpod

_We usually do not recommend this option for production usage._

Let Gitpod generate self-signed certificates for your installation. This option can be used in case your load balancer does the TLS termination or for testing settings. For the latter case, you need to add the custom [CA](https://en.wikipedia.org/wiki/Certificate_authority) to your browser to let it accept the self-signed certificate. Use this command to export the CA:

```
$ kubectl get secrets -n <namespace> ca-issuer-ca -o jsonpath='{.data.ca\.crt}' | base64 -d > ~/ca.crt
```

![kots-tls-self-signed](/images/docs/self-hosted/kots-tls-self-signed.png)

## Option 3: Bring your own certificate

> ⚠️ **Limitation**
>
> Adding custom CA certificates is currently _not_ supported on **Google Kubernetes Engine (GKE)** because on GKE `containerd` does not support custom certificates.

Upload your own TLS certificate, key, and (optionally) CA certificate. When your TLS certificate is signed by a publicly accepted TLS authority, you just need to upload your certificate and key. In case it is a self-signed certificate (e.g. signed by a corporate CA), you also need to upload your CA.

![kots-tls-bring-own](/images/docs/self-hosted/kots-tls-bring-own.png)
