---
section: background
title: Data and Observability - Gitpod Dedicated docs
---

# Data and Observability

## Data

Gitpod Dedicated creates and uses different data stores for different purposes within the AWS account it is deployed into. These are as follows:

-   A **Relational Database (RDS)** is used to store user information and some tokens and as such contains sensitive data.
-   **S3** is used to store workspace backups. These can include sensitive data.
-   **SSM** is used to store system information

## Observability

> ℹ️ This is an overview of the design of Gitpod Dedicated’s observability architecture - in other words, how data that is required to operate, maintain, and improve Gitpod Dedicated instances is exported from individual instances in a way that ensures confidentiality and privacy.

![Gitpod Dedicated Deployment overview](/images/docs/gitpod-dedicated/background/data-observability/extract-data-from-cells.webp)

### Architecture

The exact details of how the data leaves the instance depend on the data type; however, the high-level approach is the same: The data is sent to a component in the instance that sanitizes the data (i.e., removes any business-critical or potentially personal information such as repo names, company names, user names, etc.). This component subsequently sends the data to a Firehose Delivery Stream in the AWS account through a VPC endpoint. The Delivery Stream sends the data to an S3 bucket (one s3 bucket per instance) in Gitpod’s AWS account/control plane. The S3 bucket has a short retention (maximum of 7 days). Gitpod employees can access the data ad-hoc when debugging issues. A few select metrics are forwarded to a third-party service to enable alerting. Product analytics data is sent to a data warehouse. Customers can _optionally_ get read-only access to the S3 bucket to provide visibility into the exported data.

### Data Types and Retention

-   **Metrics:** used for alerting and monitoring purposes

    -   Retention: 7 days, select metrics that are used for alerting are retained for 13 months in a third party system

-   **Logs**: used for debugging purposes

    -   Retention: by default, no retention. In case logs are exported, they are retained for 1 day

    > ❗ Logs are only exported _on demand_, i.e. if there is a need to debug something. In other cases, logs are not exported.

-   **Kubernetes state: [used](https://www.notion.so/69714aa12c634aeb9a7a0c43e8c31aa2?pvs=21)** for debugging purposes (no secrets or config maps are exported)
    -   Retention: 1 day
-   **Product Analytics Events:** used for product improvement purposes (note that these are sanitised to not expose any potentially confidential information like repository names). Only a select set of events is exported.
    -   Retention: In S3, 1 Day. Further, Product analytics events are forwarded to a third-party Data Warehouse where they are retained for 12+ months
-   **Billing Data**: used to track usage for billing purposes
    -   Retention: Billing data is forwarded to a third-party Data Warehouse where is retained for 100 years.

## Observability Data Sanitisation

The data shared is purely for operational and product improvement purposes. To minimize the risk of any PII or confidential information leaking, efforts are in place to avoid sending such data in the first pace as well as to feed back any learnings into improving these efforts. The following diagram shows an overview of the data sanitisation mechanisms in place:

![Gitpod Dedicated Deployment overview](/images/docs/gitpod-dedicated/background/data-observability/observability-architecture.webp)

### Logs

When logs are sent out (see above), logs are sanitised at the collector level. When logs are collected, they are screened for any potential PII or sensitive data. For example, strings containing information like emails and IP addresses are identified and redacted. This happens before the data is sent through the firehose to the S3 bucket in Gitpod’s AWS account.

### Metrics, Product Analytics, Kubernetes State and Billing Data

Metrics, product analytics, Kubernetes State and billing data types are sanitised at the telemetry exporter level, where a library is used to scan for and remove that scans for PII and sensitive data. The telemetry exporter is a component that is used to forward data out of the instance.

### Feedback Cycles

Sanitising data is not a one-off task. It requires a continuous, self-improving system. As such several feedback loops are in place to improve the system:

-   At the collector and telemetry exporter level: Any sensitive data that is filtered is registered and leads to changes in the source code in order to avoid writing out this data in the first place.
-   In the S3 bucket: Gitpod operates a third party sensitive data discovery tool ([AWS Macie](https://aws.amazon.com/macie/)) on the S3 bucket containing the telemetry data of the Gitpod Dedicated instance used by Gitpod day to day. This helps screen for any PII or confidential information that might have made it’s way out of an instance bypassing the sanitisation mechanisms mentioned above. The data is deleted, and the source code changed to avoid sending this data in the first place.
-   Customer level: Customers are also able to see the contents of the data that has been exported out of their instance (see [Accessing data exported from your instance](/docs/gitpod-dedicated/guides/accessing-data-exported-from-your-instance) ). In case they find any PII or sensitive data, they can raise this with their account manager. The account manager will raise a security incident, and the data will be deleted and measures will be taken to avoid writing out the data in the future. This escalation process is also described in [Accessing data exported from your instance](/docs/gitpod-dedicated/guides/accessing-data-exported-from-your-instance).
