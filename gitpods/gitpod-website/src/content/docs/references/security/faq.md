---
section: security
title: Security FAQ
description: Frequently asked questions about Gitpod security.
---

# Security FAQ

## What type of data does Gitpod collect?

Gitpod processes first name, last name, and email in order to provide the services, in addition to the user account from your company’s code repository. For more information, please contact your Account Manager for the Gitpod DPA.

## How does Gitpod integrate with code repositories?

Authentication occurs via OAuth tokens which can be revoked and/or re-authorized at any time.

## How is data secured within the Gitpod platform?

All Workspace content is encrypted at rest with (AES256) and in-transit (TLS 1.2 or above).

## Are Workspaces isolated?

Workspaces deploy as Kubernetes pods. Each Workspace operates within its own set of namespaces, so that they cannot interfere with each other.

## How is Gitpod’s Infrastructure deployed?

Gitpod is deployed on GCP and AWS. Their certifications are available [here](https://cloud.google.com/security/compliance) and [here](https://aws.amazon.com/compliance/).

## What certifications does Gitpod have?

We are SOC 2 Type 2 compliant for two years running and conduct pentesting at least annually. Reports are available upon request and under MNDA; please contact your Account Manager.

## How does Gitpod deploy?

Gitpod can be hosted end-to-end by us, or deployed by you in your own AWS account. For more information, please see this [link](https://www.youtube.com/watch?v=iYLCHQgj0fE) for deployment architecture.
