---
author: csweichel, MrSimonEmms
date: Wed, 6 April 2022 16:00:00 UTC
excerpt: We at Gitpod believe in making developer experiences better, and we are super excited to introduce Gitpod Installer 🎉, which makes Gitpod installations a breeze!
image: teaser.png
tags: ['Engineering', 'Gitpod updates']
subtitle:
teaserImage: teaser.png
title: Why we moved from Helm to Gitpod Installer
---

We at Gitpod believe in making developer experiences better, and we are super excited to introduce Gitpod Installer 🎉, which makes Gitpod installations a breeze!

Gitpod is available as a SaaS and self-hosted product. It is composed of many components working together in a Kubernetes cluster. You can install everything in a single cluster or place separate components in multiple clusters. Initially, we used Helm to orchestrate the installation, but our Helm charts became complicated over time. Hence, the new Gitpod Installer came into existence.

## The fault with our Helm charts

In the last couple of years, as we kept building more and more features for Gitpod, our Helm charts started accumulating a lot of logic with an ever-expanding configuration surface. It all quickly grew out of hand. The Helm charts `values.yaml` rose to 750 lines. Many of these were not configurations but necessities to workaround due to Helm limitations.

To make the matter worse, we had many undocumented configuration values that we used only in production or core-dev but did not make sense for any other environment. The entirety of the Helm charts grew into a mammoth 7000 lines to accommodate all the variations. Helm charts are made from templated YAML using Go templates. At this scale, it was a tough job to maintain them. It became easy to make mistakes such as missing whitespaces and realising it much later while deploying and then spending hours spotting the root issue. Lack of editor support and static checks for Helm charts forced you to refer to the documentation often. All of this made it tedious to write Kubernetes configurations. It sometimes led to config drift between what your application expects and what Helm generated, leading to production outages.

## Gitpod Installer, the saviour

We started building the [Gitpod Installer](https://github.com/gitpod-io/gitpod/tree/main/install/installer) to make installation of Gitpod and maintenance of the installation scripts less painful. We wrote Gitpod Installer in Go, making it easier to manage, structure and reuse the code. Instead of dealing with YAML and templates, we deal with structs and functions which gets us type safety, runtime checks, and composition.

<figure>
	<img src="/images/blog/gitpod-installer/gitpod-installer.png" alt="Gitpod Installer"/>
	<figcaption>Gitpod Installer</figcaption>
</figure>

### User-centric Installation surface

One of the primary goals of the Gitpod Installer is to express the installation from the user's point of view. We want the Installer to reduce the knobs and switches the user has to encounter. Clever use of logic and abstractions in the Gitpod Installer helped us make the configuration much more expressive, and we could automatically deduce values for several technical configurations. It helped to reduce the configuration file from 750 lines to fewer than 50. It not only reduced the configuration surface but also removed the Helm specific hacks we had in place. In the ideal case, a user can generate a configuration, render the Kubernetes YAML and apply it to a cluster to get a Gitpod installer up and running in no time!

### Backwards compatibility to provide a clean update path

We chose to make the configuration file used by the Gitpod Installer carry an `apiVersion`. While loading the configuration, the Installer looks for the version and uses the corresponding loader. Each version contains its own set of validations, default settings and a migration path to higher versions. It allows us to introduce breaking changes in the configuration when needed while still providing compatibility and a migration path to configuration written for an older version.
Achieving this is extremely difficult with Helm charts. We had to provide additional logic for backward compatibility on a best effort basis.

#### Version Manifest

A Gitpod installation is a collection of builds of numerous projects. The version manifest provides the bill-of-materials required to run a complete Gitpod installation for a particular release. It guarantees that a specific release of Gitpod always runs with a deterministic set of services and dependencies. We generate the version manifest during build time and embed it into the Gitpod Installer.

#### Helm Dependency Integration

Gitpod also depends on several third-party dependencies such as Minio, MySQL and RabbitMQ. Instead of reimplementing all the services to fit into the Installer framework, we reuse the community maintained Helm charts. We embed the respective Helm charts into the Installer, and during installation, we provide the required values and render the templates in isolation just like `helm template` would do. It helps us to leverage the excellent work already done by the Helm community while retaining control over the installation process.

### Eliminate drift between installation and services

While using Helm charts, everything was defined using templated YAML. The developer's responsibility was to make sure that the config generated by Helm was in sync with the configuration the application expected. There were no additional checks beyond this until the application tried to load the configuration during deployment. In the past, it has created instances of drift between the Helm generated configuration and the application expectations, leading to production outages.

Installer directly utilises the config structs of applications and structs defined in the Kubernetes API library. It helps enforce type safety that will catch any configuration drift during compile time. The structs also define validation, which helps validate the user-supplied configuration to help catch errors early.

### Separation of infrastructure and application concerns

We often merge the infrastructure and application concerns when we think of requirements. The requirements will vary per use-case for a product like Gitpod, which has both self-hosted and SaaS offerings. To isolate the requirements of application and infrastructure, the Installer performs validations separately. We have implemented infrastructure validations in Installer as cluster validations which checks whether the Kubernetes cluster meets all the requirements and has all dependencies required for Gitpod installation. We have defined configuration validations as the part of respective components, which checks the configuration separately while rendering or validating it.

### Scalability within the Gitpod organisation

The Gitpod Installer sits horizontally across all teams at Gitpod and it was built with scalability across teams in mind. The Installer comprises building blocks called components that are strongly cohesive and independent of others. Each component is responsible for managing a single service in the Gitpod installation. Teams take complete ownership of their respective components and are free to evolve along with their services.

## Technical differences from Helm charts

While developing the Gitpod Installer, we made the decision to be opinionated at times to build something that just works. This allows us to provide our experience of running Gitpod SaaS to owners of self-hosted implementations. Being opinionated provides stability and keeps everything on a standards track. It reaps immense benefits while troubleshooting when something goes wrong. We enforced these decisions as validation constraints for the Gitpod Installer at config and cluster levels. These are some of the decisions we took,

1. There can be only one installation per cluster which is due to
    - Fixed node affinities for services.
    - Fixed NodePorts for daemonsets.
2. Fix replica counts for services.
3. External helm dependencies are embedded, hence non-configurable. We chose to do this because it gives us confidence that Gitpod is always running against a dependency that we have validated (like a known MySQL/RabbitMQ version)
4. Cert-manager is a required dependency for creating internal SSL certificates for components like the Docker registry as it eliminates manual cert renewal.
5. The Installer requires external certificates to be provided as a Kubernetes secret (tls.key and tls.crt). By requiring just the secret to be present, it allows for users who want to user cert-manager to provide their certificates as well as those who want to provide their certificates via a specific certificate authority.

## Building Over Helm

While building Gitpod, we have reused a lot of logic from Helm. We use the logic from `helm template render` to embed Helm charts for third-party dependencies and render them together with Installer components.

We also borrow the dependency sorting from Helm. Kubernetes objects have dependencies on each other and are best installed in a specific order. For example, if a secret changes after a pod has started, it will have the old value. Hence secret update needs to go before deployment. Since we also allow embedding Helm charts, we have no control over the generated YAML. To guarantee things work as expected, we parse and sort the generated YAML using the same strategy as Helm, which has been well-tested out.

## What is Next?

Gitpod Installer has improved the installation experience of Gitpod. It helped us elegantly overcome Helm's limitations while simplifying the orchestrating of a project as complex as Gitpod. Both Helm chart and Installer remain supported for the time being, and we aim to have feature parity between the both.
