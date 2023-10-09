---
section:
title: Gitpod Dedicated docs
---

# Gitpod Dedicated docs

Gitpod provides on-demand, secure cloud development environments or [CDEs](/cde). These environments include everything a developer needs, including tools, code, and dependencies, _and_ can seamlessly be shared and cloned across the team.

There are two ways to consume the product: Via Gitpod Cloud, available via [gitpod.io](https://gitpod.io) and via Gitpod Dedicated that is cloud development environment that is hosted by you and managed by Gitpod. **This documentation walks through Gitpod Dedicated.**

In both deployments models, a control plane keeps the installation up-to-date. The system polls for updates every minute. Once a new one is available, it pulls the package down. The system is built so that no downtime is needed for updates, and workspaces are never affected.

## Table of Contents

<details>

<summary class="font-bold text-h6 text-important">Guides</summary>

-   [Getting Started](/docs/gitpod-dedicated/guides/getting-started)
-   [(Not) modifying your AWS Account](/docs/gitpod-dedicated/guides/not-modify-your-aws-account)
-   [Updating the Gitpod Dedicated Infrastructure](/docs/gitpod-dedicated/guides/updating-gitpod-dedicated-infrastructure)
-   [Getting Access to the Instance for Debugging](/docs/gitpod-dedicated/guides/getting-access-to-the-instance-for-debugging)
-   [Using Custom Domains](/docs/gitpod-dedicated/guides/using-custom-domains)
-   [Using a Custom or Private CA](/docs/gitpod-dedicated/guides/using-custom-or-private-ca)
-   [Using Private VPC Resolvers](/docs/gitpod-dedicated/guides/using-private-vpc-resolvers)
<!-- -   [Using Private ECR Repositories for Workspace Images](/docs/gitpod-dedicated/guides/use-private-ecr-repos-for-workspace-images) -->
-   [Accessing data exported from your instance](/docs/gitpod-dedicated/guides/accessing-data-exported-from-your-instance)
-   [Reserving AWS Instances to Save Cost](/docs/gitpod-dedicated/guides/reserving-aws-instances-to-save-cost)
-   [Deleting your Gitpod installation](/docs/gitpod-dedicated/guides/deleting-your-gitpod-installation)

</details>

<details class="mt-micro">

<summary class="font-bold text-h6 text-important">Background</summary>

-   [Data and Observability](/docs/gitpod-dedicated/background/data-observability)
-   [Deployment and Updates](/docs/gitpod-dedicated/background/deployment-updates)

</details>

<details class="mt-micro">

<summary class="font-bold text-h6 text-important">Reference</summary>

-   [AWS IAM permission requirements](/docs/gitpod-dedicated/reference/aws-iam-permission-requirements)
-   [Architecture](/docs/gitpod-dedicated/reference/architecture)
-   [Networking and Data Flow](/docs/gitpod-dedicated/reference/networking-data-flows)
-   [Infrastructure Cost](/docs/gitpod-dedicated/reference/infrastructure-cost)
-   [Infrastructure Update Changelog](/docs/gitpod-dedicated/reference/infrastructure-update-changelog)

</details>

## Gitpod Cloud vs. Gitpod Dedicated

Gitpod Cloud is a multi-tenanted solution that provides isolation and security by operating developer workspaces in their own set of Linux namespaces, such that they cannot interfere with others. The details of this setup have been shared publicly. Gitpod Cloud is best for teams who are ready to get started right away and prefer no installation.

![Gitpod Cloud Overview](/images/docs/gitpod-dedicated/gitpod-cloud-overview.webp)

Gitpod Dedicated is a single-tenant solution also maintained and operated by Gitpod. The entire application is deployed within a customer's cloud account, acting like an outpost of Gitpod within their cloud organization, very similar to the way a self-hosted solution would behave. The Gitpod Dedicated Control Plane is only responsible for monitoring the status of the instance and managing updates:

![Gitpod Dedicated Overview](/images/docs/gitpod-dedicated/gitpod-dedicated-overview.webp)

Running Gitpod Dedicated within the customer’s infrastructure ensures that Gitpod does not have direct access to source code, running workspaces or other confidential resources. This satisfies many regulatory and compliance-related policies around data residency and access.

Gitpod Dedicated is best for organizations who have more stringent security requirements.

|                   |                                                Gitpod Cloud                                                 |                                                        Gitpod Dedicated                                                         |
| :---------------: | :---------------------------------------------------------------------------------------------------------: | :-----------------------------------------------------------------------------------------------------------------------------: |
|    Deployment     |          No customer input required - [sign up](https://gitpod.io/workspaces/) and start for free           | Hosted within customer’s cloud account, requires setting up a new AWS account and executing a CloudFormation template within it |
|    Management     |                                       Deployed and operated by Gitpod                                       |                                                 Deployed and operated by Gitpod                                                 |
|  Data Isolation   | Data (e.g. workspace backups) is isolated at the application layer, and is stored in Gitpod’s cloud account | Data (e.g. workspace backups) is isolated at the infrastructure level and stays within the cusomter’s network and cloud account |
| Compute Isolation |                                            Shared infrastructure                                            |                                  Dedicated infrastructure running in the customer AWS account                                   |
|   Observability   |                                   Health info and metrics sent to Gitpod                                    |                                             Health info and metrics sent to Gitpod                                              |
|      Region       |                                                Fixed regions                                                |                   Choose an [AWS region](https://aws.amazon.com/about-aws/global-infrastructure/regions_az/)                    |
|       Cost        |                                    Cheaper due to shared infrastructure                                     |   More expensive due to single-tenant infrastructure - but existing cloud discounts/credits can be used to cover compute cost   |

## Overview of Setup Process

Gitpod Dedicated is deployed into the customer AWS account using a CloudFormation template. The actual deployment process itself takes around 30 minutes. To begin, create a new AWS account within the customer’s AWS organization. Then, execute a CloudFormation template that creates the necessary infrastructure. After that, the instance will register itself with the Dedicated Control plane and installs the latest version of Gitpod.

![Gitpod Dedicated Architecture](/images/docs/gitpod-dedicated/gitpod-dedicated-architecture.webp)

Once deployed, the instance is able to connect to a source control management system (SCM) and other development resources on a corporate network *privately (*using a Transit Gateway attachment).

To start the first Gitpod workspace, navigate to the instance and configure an integration to an SCM system. Gitpod will then manage and operate the instance. For more information on how updates are handled, please see the [Deployment and Updates](/docs/gitpod-dedicated/background/deployment-updates) section.

## Getting started

To begin, follow the [Getting Started](/docs/gitpod-dedicated/guides/getting-started) guide.

## More Information

For more information on [Deployment and Updates](/docs/gitpod-dedicated/background/deployment-updates) and [AWS IAM permission requirements](/docs/gitpod-dedicated/reference/aws-iam-permission-requirements) please see the Background and Reference sections.
