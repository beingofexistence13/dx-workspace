---
section: gitpod-dedicated/reference
title: Infrastructure cost - Gitpod Dedicated docs
---

# Infrastructure cost of Gitpod Dedicated

> ℹ️ The infrastructure cost of Gitpod dedicated are payed for by the customer. This page helps set expectations for their magnitude. The cost will vary based on usage patterns. Your Gitpod Account Manager can work with you to obtain a customised estimate of the infrastructure costs below and discuss the license costs of Gitpod Dedicated itself.

## Projected cost of a Gitpod Dedicated instance

The running infrastructure cost of a Gitpod Dedicated instances can be split into:

    -   Fixed cost for running the dashboard and supporting services
    -   Variable cost for running workspaces

The variable cost scale with the number of running workspaces and their size. This makes determining a precise estimate of the overall cost impossible as different usage patterns result in different cost. However, internal and customer data points can be used to extrapolate to following scenarios:

> ⚠️ The exact cost varies greatly depending on usage patterns, number of users, AWS region used, currency exchange, existing AWS discounts, AWS capacity reservations and more. There are further ways to reduce cost. The numbers below are merely an example and _not_ representative.

| Scenario  | Fixed Infrastructure Cost | Variable Infrastructure Cost | Total Monthly Cost |
| --------- | ------------------------- | ---------------------------- | ------------------ |
| 50 Users  | $2,900                    | $3,840                       | $6,740             |
| 100 Users | $2,900                    | $7,680                       | $10,580            |
| 200 Users | $2,900                    | $15,360                      | $18,260            |
| 500 Users | $2,900                    | $38,400                      | $41,300            |

## Billable services used by the Gitpod Instance

Below is a list of all billable AWS services that are used with Gitpod Dedicated:

-   EC2
-   VPC
-   Relational Database Service
-   Elastic Container Service for Kubernetes
-   CloudWatch
-   CloudTrail
-   Kinesis Firehose
-   Elastic Load Balancing
-   S3
-   ElastiCache
-   DynamoDB
-   EC2 Container Registry (ECR)
-   Secrets Manager
-   Lambda
-   Key Management Service
-   Route 53
-   SNS
