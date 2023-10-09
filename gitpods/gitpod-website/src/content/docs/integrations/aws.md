---
section: integrations
title: Amazon Web Services (AWS)
---

# Amazon Web Services (AWS)

Gitpod is a flexible tool that works with many cloud providers, including AWS. The following page describes ways that you can integrate Gitpod and AWS.

## OIDC Integration with AWS

Gitpod can connect workspaces to AWS using Gitpod support for [OpenID Connect](/docs/configure/workspaces/oidc), allowing workspaces to retrieve AWS access credentials in their workspace without needing to use static credentials, or environment variables.

### Step 1: Create an "AWS Identity Provider" resource

To connect Gitpod to AWS you need to create an "IAM identity provider" to establish a trust relationship between your AWS account and Gitpod.

AWS Identity Providers allow you to manage user identities outside of AWS, instead of creating IAM users in your AWS account and giving these external identities (e.g. Gitpod workspaces) permissions to use AWS resources in your account.

Configure the URL of the identity provider to: `https://api.<gitpod-installation>/idp`

For example: `https://api.gitpod.io/idp`.

The client ID / Audience should be set to: `sts.amazonaws.com`

**Read more:**

-   [[AWS docs] Creating IAM identity providers](https://docs.aws.amazon.com/IAM/latest/UserGuide/id_roles_providers_create.html)
-   [[AWS docs] Creating OpenID Connect (OIDC) identity providers](https://docs.aws.amazon.com/IAM/latest/UserGuide/id_roles_providers_create_oidc.html)

### Step 2: Create an AWS role with a trust policy

Now that your AWS account is setup to trust Gitpod, you need to create an AWS IAM role that can be assumed by the Gitpod workspace. Here, you can also restrict who has access to the assumed role based on claims in your Gitpod workspace JWT token.

> 💡 **Important**: We strongly recommend you adhere to the principle of least privilege, and ensure that only relevant workspaces and users can assume your AWS role.

<figure>

```json
{
	"iss": "https://api.dev-internal.gitpod.cloud/idp",
	"aud": ["sts.amazonaws.com"],
	"azp": "sts.amazonaws.com",
	"c_hash": "zSrbWN_X9Wx52-wxjgdX5w",
	"exp": 1682344961,
	"iat": 1682341361,
	"auth_time": 1682341361,
	"sub": "https://github.com/gitpod-io/gitpod",
	"name": "kumquat"
}
```

  <figcaption>
    Example claims in the OIDC JWT.
  </figcaption>
</figure>

To adjust the IAM role trust policy to restrict which workspaces can assume the role. You can define conditions keys using the name of the OIDC provider (created in step 1, e.g. `gitpod.io`) followed by the claim (`:aud`, `:azp`, `:amr`, `sub`).

```json
{
    "Version": "2012-10-17",
    "Statement": [
        {
            "Effect": "Allow",
            "Principal": {
                "Federated": "arn:aws:iam::981341800645:oidc-provider/api.gitpod.io/idp"
            },
            "Action": "sts:AssumeRoleWithWebIdentity",
            "Condition": {
                "StringEquals": {
                    "api.gitpod.io/idp:aud": "sts.amazonaws.com"
                    "api.gitpod.io/idp:sub": "https://github.com/gitpod-io/my-application"
                }
            }
        }
    ]
}
```

<figure>
<figcaption>
    Example IAM assume role trust policy to grant access only to the repo "gitpod-io/my-application"
  </figcaption>
</figure>

```json
{
	"Version": "2012-10-17",
	"Statement": [
		{
			"Effect": "Allow",
			"Principal": {
				"Federated": "arn:aws:iam::981241700645:oidc-provider/api.gitpod.io/idp"
			},
			"Action": "sts:AssumeRoleWithWebIdentity",
			"Condition": {
				"StringEquals": {
					"api.gitpod.io/idp:aud": "sts.amazonaws.com"
				},
				"StringLike": {
					"api.gitpod.io/idp:sub": "https://github.com/gitpod-io/*"
				}
			}
		}
	]
}
```

<figure>
<figcaption>
    Example IAM assume role trust policy to grant access to any repo in the "gitpod-io" organization.
  </figcaption>
</figure>

**Read more:**

-   [[AWS docs] IAM and AWS STS condition context keys](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_iam-condition-keys.html)
-   [[AWS docs] IAM String condition operators](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html#Conditions_String)

### Step 3: Assume the AWS role to retrieve the AWS credentials

> 💡 **Important**: The following assumes that your workspace has the AWS CLI installed so that it can call `aws sts assume-role-with-web-identity`.

You can either call the AWS CLI `assume-role` command manually, or use the helper command within the `gp` CLI, `gp idp aws login` which will automatically update your AWS CLI credentials file.
The following code will login to AWS using OIDC and then fetch a secret dynamically from AWS Secrets Manager for use in your application.

The token expiry can be customized using `--duration-seconds=<token-expiry-in-seconds>`, this configuration option exactly matches the [`--duration-seconds`](https://docs.aws.amazon.com/cli/latest/reference/sts/assume-role-with-web-identity.html) configuration option offered by AWS CLI. The default is `3600` seconds. Note, to use a longer expiry your AWS Administrator must allow for longer sessions.

<figure>

```yaml
tasks:
    - command: |
          gp idp login aws --role-arn <your-iam-role-arn> [--duration-seconds=<expiry-in-seconds>]
          aws secretsmanager get-secret-value --secret-id database_connection_string --region us-east-1 | jq .SecretString
```

  <figcaption>
    An example <code>.gitpod.yml</code> that assumes an AWS web identity role.
  </figcaption>
</figure>

Read more:

-   [[AWS docs] `assume-role-with-web-identity`](https://docs.aws.amazon.com/cli/latest/reference/sts/assume-role-with-web-identity.html)

### Troubleshooting

Use `gp idp token --audience="sts.amazonaws.com"` to print your workspace JWT token. Ensure that any claims against the `sub` match the trust policy in AWS.
