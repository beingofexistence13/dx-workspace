---
section: guides
title: Reserving AWS Instances to Save Cost - Gitpod Dedicated docs
---

# Reserving AWS Instances to Save Cost

To reduce infrastructure cost, it is best practice to reserve capacity on AWS for known, long-running and predictable workloads. This also applies to Gitpod. This guide gives recommendations on which reservations to make initially.

The requirements around machine types for Gitpod Dedicated in different scenarios are as follows:

### Instance requirements without load (0 workspaces):

-   For supporting services, dashboard, etc. Gitpod requires:
    -   1 `m6a.large`
    -   3 `m6a.xlarge`
    -   1 `m6a.2xlarge`
-   When no workspaces are running, Gitpod requires:
    -   0 `c6id.8xlarge` (the node group is scaled to 0)

### Instance requirements with load:

-   For supporting services, dashboard, etc:
    -   1 `m6a.large`
    -   3 `m6a.xlarge`
    -   1 `m6a.2xlarge`
-   For workspaces:

    > ℹ️ The main driver of Gitpod infrastructure cost are the machines used to run workspaces. However, these machines are scaled to 0 when no workspaces are running. Before making reservations here, it is best to first observe the real world usage of this machine type within the first few weeks and only then make reservations if deemed cost-effective. Reservations also apply for when instances are not running, so the cost savings from the reservations needs to outweigh the cost of the reservations when instances are not running (i.e. likely outside of work hours). This is because reserved instances are billed on an hourly basis and are reserved for every hour of the reservation period (e.g. 1year). See [AWS docs](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/concepts-reserved-instances-application.html).

    -   x `c6id.8xlarge`

        -   Example calculation for x: 20 developers, each using _large_ workspaces, with on average one workspace during work hours each: (20 devs \* 1 workspace) / 4 workspaces per instance → 5 instances during _working hours_.

        <details class="ml-4">

        <summary><span class="pl-5"> Maximum number of workspaces per node (subject to change)</span></summary>

        -   **1** workspace instance using a class **XXLarge** (30 cores/54GiB RAM)
        -   **2** workspace instances using a class **XLarge** (14 cores/30GiB RAM)
        -   **4** workspace instances using a class **Large** (7 cores/16GiB RAM)
        -   **7** workspace instances using a class **Standard** (4 cores/8GiB RAM)

        </details>

## Recommended initial reservations

Given the above, the initial recommended reservations are as follows:

-   1 `m6a.large`
-   3 `m6a.xlarge`
-   1 `m6a.2xlarge`
-   0 `c6id.8xlarge` until data is available to make an informed reservation - see above.
