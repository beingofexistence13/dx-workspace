---
section: guides
title: Using Custom Domains - Gitpod Dedicated docs
---

# (Not) modifying your AWS Account

> ℹ️ To ensure Gitpod's ability to provide a satisfactory level of service for Gitpod Dedicated, it is essential to follow these rules.

Gitpod Dedicated is operated by Gitpod, but runs in the customer’s cloud account, giving the customer full visibility as well as the potential to modify components and settings. However, Gitpod kindly asks to not apply any modifications as any changes to Gitpod or the environment it is running in could potentially destabilize its operations. In detail:

-   Customers should not make any modifications to what is running within the cell. However, "reading" or viewing what is running is expected
-   Modifying what is running or adding additional resources to the installation is not supported
-   It is expected that the AWS account running the Gitpod cell is _only_ used to run Gitpod
