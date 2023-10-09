---
section: guides
title: Using Private ECR Repositories for Workspace Images - Gitpod Dedicated docs
---

# Using Private ECR Repositories for Workspace Images

> ⚠️ **Note**: When using a private image in combination with `gp validate`, you'll need to [authenticate against the private registry](https://docs.aws.amazon.com/AmazonECR/latest/userguide/registry_auth.html) in your workspace.
> This is because `gp validate` emulates a workspace start using the Docker daemon running in your workspace. To prevent unintended security repercussions, the credentials used during workspace start are not automatically made available in the workspace.

## Authenticating Gitpod Dedicated with a Private ECR Repository

1. Navigate to the AWS account where the target ECR repository is located.
2. Modify the target ECR repositories resource policy (repositories > permissions) with the following entry:

    ```json
    {
    	"Version": "2012-10-17",
    	"Statement": [
    		{
    			"Sid": "Gitpod Access",
    			"Action": [
    				"ecr:BatchCheckLayerAvailability",
    				"ecr:BatchGetImage",
    				"ecr:GetDownloadUrlForLayer"
    			],
    			"Effect": "Allow",
    			"Principal": {
    				"AWS": [
    					"arn:aws:iam::<your-gitpod-dedicated-aws-account-id>:root"
    				]
    			}
    		}
    	]
    }
    ```

## How to use an Image from a Private ECR Repository in a `.gitpod.yml` File

1. Ensure you've followed the authentication steps from the section above.
2. In your [`.gitpod.yml` file](/docs/references/gitpod-yml#gitpodyml), directly reference the private ECR image:

    ```yaml
    image: <aws-ecr-url-prefix>.amazonaws.com/<your-image-name:tag>
    ```

## How to use an Image from a Private ECR Repository in Combination with Custom Dockerfiles

1. Ensure you've followed the authentication steps from the section above.
2. In your project repository, create a Dockerfile that references your private ECR image:

    ```Dockerfile
    FROM <aws-ecr-url-prefix>.amazonaws.com/<your-image-name:tag>

    # Add your customizations here
    ```

3. In your `.gitpod.yml` file, reference the Dockerfile:

    ```yaml
    image:
        file: Dockerfile
    ```

Ensure that your image and Dockerfile adhere to the same requirements described [here](/docs/configure/workspaces/workspace-image#custom-base-image).
