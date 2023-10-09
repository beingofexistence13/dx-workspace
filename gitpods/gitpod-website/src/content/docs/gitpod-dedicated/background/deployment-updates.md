---
section: background
title: Deployment and Updates - Gitpod Dedicated docs
---

# Deployment and Updates

> ℹ️ **Glossary**: <br/>
> Substrate = The control plane that manages Gitpod Dedicated instances <br/>
> Bootstrap = Initial set up required to create an instance of Gitpod Dedicated <br/>
> Cell = An instance of Gitpod Dedicated

## Overview

![Gitpod Dedicated Deployment overview](/images/docs/gitpod-dedicated/background/deployment-updates/deployment-overview.webp)

Gitpod Dedicated is powered and managed by a Control Plane that sits above Gitpod Dedicated Instances (a.k.a Cells). Controllers, implemented as [Lambdas](https://aws.amazon.com/lambda/), are mainly used to create and update components. They compare the desired state (as defined by a spec that lives in the Control Plane) with the actual state, and then work to resolve any discrepancies.

Deployment and operation can be divided into three stages:

1. Bootstrap (initial set up of infrastructure)
2. Registration
3. Updates and ongoing operations

### Bootstrap Stage

The initial infrastructure required is created using a CloudFormation template executed by the customer. The customer must create a new & dedicated AWS account (as per [Getting Started](/docs/gitpod-dedicated/guides/getting-started)) and and then execute the CloudFormation template within it.

Please see [Getting Started](/docs/gitpod-dedicated/guides/getting-started) for detailed instructions.

### Registration stage

Once the CloudFormation template successfully executes, the instance will register itself with the Gitpod Control Plane.

> ℹ️ Registration happens via an outgoing connection only that uses AWS PrivateLink - the Control Plane has no ingoing connection to the instance. See [Networking and Data Flows](/docs/gitpod-dedicated/reference/networking-data-flows).

Upon registration, the instance will check for the newest version of Gitpod and install it onto itself. This happens via the normal update mechanism which is described below.

### Updates and Ongoing Operations

**Application Updates**

> ℹ️ The initial application update is handled just like any other, with the only difference being that no application is installed yet. I.e. all of Gitpod’s components are installed from scratch after the instance has registered itself.

Gitpod Dedicated is deployed and operated in the same way as other SaaS offerings, i.e. in a continuous manner. Deployment happens first to our internal staging environments, then gitpod.io, and _only_ then to Dedicated customers.

> 💡 Changes are deployed and new features are enabled independently, using feature flags. Gitpod plans to deploy changes perpetually, but enable new functionality in a way that aligns with release communication.

The instance connects to the Control Plane (_via an outgoing connection only; using AWS PrivateLink_) to periodically check for updates. When it learns that a new version is available, it pulls the latest images (also via PrivateLink) and applies them to update to the latest version.

> ⚠️ **Maintenance mode:** Upon updates of certain application components, the instance may enter maintenance mode - in this mode, workspaces are temporarily blocked from starting and stoping and it is not possible to take a [workspace snapshot](/docs/configure/workspaces/collaboration#workspace-snapshots). Running workspaces are _not_ affected and this should only last a few minutes. During maintenance mode, users see the following error:
> <img src="/images/docs/gitpod-dedicated/background/deployment-updates/maintenance-mode.webp" alt="Gitpod Dedicated Deployment overview" class="mx-auto w-3/6" />

### Infrastructure updates

Occasionally, infrastructure updates are required to keep a customer’s instance up to date. In such cases, an updated CloudFormation template will be provided, which can be run against the existing stack created by the initial CloudFormation template.

> ⚠️ Infrastructure updates are mandatory. Infrastructure updates need to applied **within two weeks**, as otherwise the instance will no longer receive updates and fall out of the support SLA.

### Debugging

In the event that there are unforeseen issues with a customer’s installation that cannot be resolved using the data that is exported from an instance (see [Data and Observability](/docs/gitpod-dedicated/background/data-observability)), the customer is able to get access to the instance in order to jointly debug the instance with a Gitpod employee. This is only a tool used in emergencies. Gitpod is not able to access the instance directly. For more information, see [Getting Access to the Instance for Debugging](/docs/gitpod-dedicated/guides/accessing-data-exported-from-your-instance) .
