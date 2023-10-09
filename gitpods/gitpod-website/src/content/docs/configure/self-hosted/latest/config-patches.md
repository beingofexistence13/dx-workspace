---
section: self-hosted/latest
subsection: troubleshooting
title: Config Patches
---

# Gitpod Configuration Patches

> ⚠️ **Gitpod Self-hosted is [no longer supported](/blog/introducing-gitpod-dedicated)**
>
> The last update of Gitpod Self-hosted product was [November 2022](/changelog/november-self-hosted-release). Users can still request our [free community license](/community-license) however there will be no support or updates to the product. If you are interested in an isolated, private installation of Gitpod, take a look at [Gitpod Dedicated](/dedicated).

Further customization of your installation is possible within the installation UI, where Gitpod can provide you with a config patch to tailor the installation to your specific needs. In the “Additional Options” section, click the “Enable additional options” checkbox, and upload the file in the “Gitpod config patch” field.

![config patch](/images/docs/self-hosted/config-patch.png)

The patch file is effectively a patch for the internally used [Gitpod Installer config file](https://github.com/gitpod-io/gitpod/blob/main/install/installer/example-config.yaml). It gives you access to all configuration options that Gitpod accepts - even those not present in the UI. All values that are set in the patch file will override the generated config file values.
