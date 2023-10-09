---
section: self-hosted/latest
subsection: reference
title: Self-Hosted Gitpod Releases and Versioning
---

# Self-Hosted Gitpod Releases and Versioning

> ⚠️ **Gitpod Self-hosted is [no longer supported](/blog/introducing-gitpod-dedicated)**
>
> The last update of Gitpod Self-hosted product was [November 2022](/changelog/november-self-hosted-release). Users can still request our [free community license](/community-license) however there will be no support or updates to the product. If you are interested in an isolated, private installation of Gitpod, take a look at [Gitpod Dedicated](/dedicated).

### Release Policy

Gitpod Self-Hosted is released once a month, usually at the end of each month. The versioning schema is: `YYYY.MM.V`. Each new version of self-hosted Gitpod includes all of the changes made to Gitpod up to the release date. This means that the self-hosted version of Gitpod is at most one month behind the SaaS version. Outside of the regular monthly releases, hot-fix releases are possible to add functionality or fix bugs. Hot fix releases increment the `V` in the aforementioned versioning schema.

### Support Policy

Gitpod is committed to supporting the last 2 versions of self-hosted Gitpod with patches and security updates.

### Roll out Policy

New versions are first rolled out to all users that are on the `community` license, i.e. are on the stable branch. Customers with a paid license receive the newest version one week later.

### Testing Policy

<!-- ToDo: link to reference architecture once this is shipped -->

For each release, we validate that core Gitpod workflows function as expected via a series of automated and manual tests. These tests are performed on different Gitpod installations running on our [reference architectures](../latest/reference-architecture). This should help ensure that Gitpod works for you, assuming your architecture is close to the reference architecture.
