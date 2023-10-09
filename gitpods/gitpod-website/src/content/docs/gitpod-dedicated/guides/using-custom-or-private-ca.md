---
section: guides
title: Using a Custom or Private CA - Gitpod Dedicated docs
---

# Using a Custom or Private CA

To enable your enable your Gitpod Dedicated instance to use certificates signed by a custom or private Certificate Authority, you will need to follow the process below. For more information about how to create a Gitpod Dedicated instance, please see [Getting Started](/docs/gitpod-dedicated/guides/getting-started).

> ℹ️ Adding a custom CA can also be done once an instance is already running. However, this requires coordination with Gitpod, as Gitpod needs to ship a new release to the instance that updates the internally used domain.

The process to use custom domains requires:

1. Upload the custom CAs certificate needs to AWS secret Manager.

    <details class="ml-4">

    <summary class="text-body text-p-medium mt-micro">How to upload the CA certificate to AWS Secret Manager in the same AWS account that the Gitpod instance runs in.</summary>

    1. In the AWS account that the Gitpod instance runs in, navigate to the Secret Manager within the AWS Console. Click on Store a new secret. Select the Secret Type as Other and input your certificate in plain text as illustrated below
       ![Upload CA Certificate to same AWS Account](/images/docs/gitpod-dedicated/guides/using-custom-or-private-ca/upload-CA-certificate.webp)
    2. You can either choose to use the default KMS Encryption Key or create a new one
    3. Follow the instructions on screen and store the secret
    4. Note down the ARN of the secret

    </details>

    <details class="ml-4">

    <summary class="text-body text-p-medium mt-micro">How to upload the CA certificate to AWS Secret Manager to another AWS account and make it accessible to the Gitpod instance’s AWS account</summary>

    1. In the preferred AWS account, navigate to the Secret Manager within the AWS Console. Click on Store a new secret. Select the Secret Type as Other and input your certificate in plain text as illustrated below
       ![Upload CA Certificate to other AWS Account](/images/docs/gitpod-dedicated/guides/using-custom-or-private-ca/upload-CA-certificate-other-aws-account.webp)
    2. Create or choose a different KMS Encryption key than the default `aws/secretmanager` key. This is very important because secrets signed with the default key cannot be shared with other accounts. When creating the key, allow access to the Gitpod instance’s AWS account to the key by providing the account ID as can be seen in the image:
       ![Choose different KMS encryption key](/images/docs/gitpod-dedicated/guides/using-custom-or-private-ca/KMS-key.webp)
        - If you are using a pre-existing encryption key, you should add a policy like this:
            ```json
            {
            	"Sid": "Allow use of the key",
            	"Effect": "Allow",
            	"Principal": {
            		"AWS": "arn:aws:iam::<gitpod-instance-aws-id>:root"
            	},
            	"Action": [
            		"kms:Encrypt",
            		"kms:Decrypt",
            		"kms:ReEncrypt*",
            		"kms:GenerateDataKey*",
            		"kms:DescribeKey"
            	],
            	"Resource": "<* OR ARN of key>"
            }
            ```
    3. Store the secret following the instructions
    4. Once the secret is created, edit the permissions of the secret and allow access from the cell AWS account (secret-arn is the arn of secret that was just created)

        ```json
        {
        	"Version": "2012-10-17",
        	"Statement": [
        		{
        			"Effect": "Allow",
        			"Principal": {
        				"AWS": "arn:aws:iam::<gitpod-instance-aws-id>:root"
        			},
        			"Action": "secretsmanager:GetSecretValue",
        			"Resource": "<secret-arn>"
        		}
        	]
        }
        ```

    5. Note down the ARN of the secret.

    </details>

2. Provide the `ARN of the certificate` to your Gitpod Account Manager. The certificate needs to be accessible to the account where Gitpod is installed in.
3. Create the instance as per [Getting Started](/docs/gitpod-dedicated/guides/getting-started).
4. Domains signed by the custom CA should now be accessible.
