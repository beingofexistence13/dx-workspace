---
title: Secretless Authorization (Using OIDC)
excerpt: With Gitpod you can use OIDC to connect Gitpod workspaces to cloud providers or third parties such as AWS, Azure, GCP, or secret management services like Vault.
date: 2023-07-12
image: 2023-07-12-secretless-authorization.webp
ogImage: 2023-07-12-secretless-authorization.webp
alt: A light orange image with a padlock. The header image for the changelog announcement for secretless Gitpod workspaces announcement post.
---

With Gitpod you can use OIDC to connect Gitpod workspaces to cloud providers or third parties such as AWS, Azure, GCP, or secret management services like Vault. Using OIDC integration eliminates the need to manually distribute access credentials, secrets, and other key material via other methods such as environment variables.<br/> Use `gp idp token` in any workspace (works in `.gitpod.yml` and with [prebuilds](/docs/configure/projects/prebuilds)) to retrieve the workspace JWT token for exchange with the OIDC supporting 3rd party.

### Getting started

ℹ️ **Note:** The following shows how you can connect AWS to a Gitpod Cloud workspace. Steps can vary based on the 3rd party you are integrating and the domain of your Gitpod installation, see the documentation below for details.

1. Setup Gitpod as an AWS [Identity Provider](https://docs.aws.amazon.com/IAM/latest/UserGuide/id_roles_providers_create.html) (Using `https://api.gitpod.io/idp` as the Audience).
2. Create an AWS role with permissions to perform `sts:AssumeRoleWithWebIdentity`.
3. Update your `.gitpod.yml` to exchange your workspace JWT token for an access token.

```bash
gp idp login aws --role-arn <your-iam-role-arn>
aws secretsmanager get-secret-value --secret-id database_connection_string
```

See [Workspace OIDC](/docs/configure/workspaces/oidc) and the [AWS Integration Guide](/docs/integrations/aws) for more.
