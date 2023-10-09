---
section: gitpod-dedicated/reference
title: Gitpod Dedicated Architecture
---

# Gitpod Dedicated Architecture

## Overview

![Gitpod Dedicated Architecture overview](/images/docs/gitpod-dedicated/reference/architecture/architecture-overview.webp)

Gitpod Dedicated is a single-tenant installation of Gitpod in the customer's AWS account. This account is distinct from the account(s) where the customer's source control management (SCM) system and other development infrastructure and services are hosted. Gitpod Dedicated connects to the Gitpod Dedicated control plane (which runs in Gitpod’s AWS account) via an outgoing connection that uses AWS PrivateLink.

## Architecture Details

![Gitpod Dedicated Architecture detailed overview](/images/docs/gitpod-dedicated/reference/architecture/architecture-details.webp)

Gitpod Dedicated uses AWS native services such as ECR, EKS, Lambda, RDS, S3 and CloudWatch to operate. These [are automatically installed](/docs/gitpod-dedicated/background/deployment-updates) into the AWS account by Gitpod. The Dashboard (Product UI) and Workspace components run in their own K8s clusters, connected to the customer’s development infrastructure via a transit gateway attachment.

## Architecture Deep Dive

> ℹ️ This architecture diagram is representative of the “All Private” networking mode only. Please refer to [Networking and Data Flows](/docs/gitpod-dedicated/reference/networking-data-flows) for more details and information on how the other modes differ.

![Gitpod Dedicated Architecture deep dive](/images/docs/gitpod-dedicated/reference/architecture/architecture-deep-dive.webp)

For a more detailed view from a networking perspective, please see the [Network Diagram](/docs/gitpod-dedicated/reference/networking-data-flows#networking-modes-and-diagrams).

For more details on how Gitpod is deployed and operated, please see [Deployment and Updates](/docs/gitpod-dedicated/background/deployment-updates) for more details.
