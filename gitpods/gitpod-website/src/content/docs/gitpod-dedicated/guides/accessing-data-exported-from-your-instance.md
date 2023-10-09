---
section: guides
title: Accessing data exported from your instance - Gitpod Dedicated docs
---

# Accessing data exported from your instance

For controlling or compliance purposes, you may want to see the exact data that has been shared from your Gitpod Dedicated instance. All data shared from the instance ends up in an S3 bucket located in an AWS account owned by Gitpod. See the [Data and Observability](/docs/gitpod-dedicated/background/data-observability) for more information on the observability architecture.

### Accessing the Data Shared

Customers can access the S3 bucket where the data is stored from any role/user in the Gitpod Instance’s AWS account by following the following steps:

1. Upon request, your Gitpod account manager can give you the name of the S3 bucket where the data from your instance is sent to.

2. Set up the AWS CLI environment to assume any role or user in the AWS account where Gitpod is installed into. For example, whatever user or role used to apply the CloudFormation template to install Gitpod can be used.

    ```sh
    # e.g. if they're using env variables
    export AWS_SECRET_ACCESS_KEY=""
    export AWS_ACCESS_KEY_ID=""
    export AWS_SESSION_TOKEN=""
    ```

3. Use the CLI to inspect the data

    ```sh
    # List the bucket
    aws s3 ls <bucket-name-provided-by-gitpod>
    # Download a specific file
    aws s3 cp s3://<bucket-name-provided-by-gitpod>/k8s-state/meta/2023/06/03/23/k8s-state-meta-1-2023-06-03-23-59-21-12dab8f5-0d40-4069-a679-172f94f13304 kubstate-example.json
    ```

    > ℹ️ The storage format depends on the telemetry type, so e.g. metrics is currently protobuf and we there is no convenient way to parse it yet.

### Escalation Process for Data Leaks

In case any data is found in the S3 bucket that contains personally identifiable or confidential information that should not have been leaked, the process for notifying Gitpod and remediating the issue is as follows:

1. **Customer can access data to identify potentially sensitive data leaks:** Customers are able to inspect any data that was sent to Gitpod by gaining access to the S3 bucket where all data from an instance is sent to (see “Accessing the Data Shared” above).
    - In addition to this, Gitpod is continuously monitoring data from internal Gitpod Dedicated instances for potential data leaks using a third party sensitive data discovery tool ([AWS Macie](https://aws.amazon.com/macie/)). If any data leaks are discovered that also apply to customer instances, the process below is also followed. For more on the active data sanitisation mechanisms, please see [Observability and Data](/docs/gitpod-dedicated/background/data-observability)
2. **Customer informs of data leak:** Upon identification of confidential data leakage, a customer can trigger security incident via their Gitpod account manager.
3. **Data is deleted:** The data that was “leaked” is identified and measures are taken to delete it in S3 and then further in any third party systems.
    - For S3 there is the option to delete the entire bucket. In any case, the data in this bucket is configured to have a very short retention. See [Observability and Data](/docs/gitpod-dedicated/background/data-observability).
    - If the effort is deemed worthwhile, the data can also be deleted individually
    - For 3rd party services, details will depend on the service and the data that was leaked.
4. **Improvements made:** The root cause of why the data leaked is identified, and measures are put in place to prevent this from occurring again.
