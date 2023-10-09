---
author: burningion
date: Tuesday, 28 Mar 2023 11:00:00 UTC
excerpt: Provision limited, disposable access to AWS development environments with Gitpod and Doppler
tags: ['Engineering', 'Developer experience']
image: aws-dev-env-small.webp
teaserImage: aws-dev-env.webp
title: Dynamic AWS Development Environments with Doppler and Gitpod
---

Regardless of where you develop, having access to machines that closely match production can help minimize unexpected outages. In the hypothetical, containers should run the same regardless of where they’re deployed, but in practice, slight discrepancies seem to show themselves at the most inopportune times.

But how do you manage access to and the provisioning of cloud resources for development in a secure, low cost manner? The most naive way is to create AWS accounts for each developer, and have them add access to their laptop, in a `~/.aws/credentials` file. Then trust and remind each developer to clean up their unused infrastructure.

This can prove problematic though, especially when [developer laptops](https://www.techtarget.com/searchsecurity/news/365532032/LastPass-breach-tied-to-hack-of-engineers-home-computer) are compromised. Malicious actors can potentially take these longer lived credentials, and use them to either compromise production, or look for more secrets / keys in existing infrastructure.

In an ideal world, credentials always have a reasonable expiration, with limited access to the necessary AWS infrastructure.

## Dynamic AWS Credentials (IAM Roles) with Doppler

![Dynamic Secrets](/images/blog/dynamic-aws-development-environments-with-doppler-and-gitpod/dynamic-secret.png)

[Doppler](https://www.doppler.com/) is a SecretOps platform for provisioning secrets across multiple development environments. It allows you to better manage and rotate keys, configuration, and secrets from dev to production.

Notably, Doppler has a [feature](https://docs.doppler.com/docs/aws-iam) which allows for the creation of disposable AWS credentials. These credentials are created by an integration between Doppler and AWS that allows for the provisioning of IAM users.

Doppler manages the lease and revoking of these IAM users, and grants them the roles you set up in your configuration. These permissions can be limited to your application / environment, for example only granting access to EC2, S3, and ECR.

This access should match what developers need to best test and develop their applications. If, for example, they need access to AWS Lambda, make sure to grant that permission, along with any load balancers / network ingress that may be necessary.

## Automatic AWS CLI Access in Gitpod

Of course, one of the most common ways of interacting with AWS is via the AWS CLI. In order to get the CLI set up in Gitpod with AWS, we need to first install the AWS CLI in our [workspace](https://www.gitpod.io/docs/configure/workspaces), and then ensure that Doppler injects our dynamic credentials into the `~/.aws/credentials` file.

I prefer my development environment to spin up as quickly as possible, so rather than install the AWS CLI and Doppler binary in a [task](https://www.gitpod.io/docs/configure/workspaces/tasks), I prefer to create a custom `.gitpod.Dockerfile`:

```dockerfile
FROM gitpod/workspace-python-3.11:latest

# Install & configure Doppler CLI
RUN (curl -Ls --tlsv1.2 --proto "=https" --retry 3 https://cli.doppler.com/install.sh || wget -t 3 -qO- https://cli.doppler.com/install.sh) | sudo sh
# Install AWS CLI
RUN curl "https://awscli.amazonaws.com/awscli-exe-linux-x86_64.zip" -o "awscliv2.zip"
RUN unzip awscliv2.zip
RUN sudo ./aws/install
RUN mkdir /home/gitpod/.aws
```

You’ll notice that I also used the `gitpod/workspace-python-3.11:latest` as my base image. I’m currently using a Python project for my development, and so this makes the most sense for my application. [Depending on your needs](https://www.gitpod.io/docs/configure/workspaces/workspace-image), you can pick one of the other [base images from Gitpod](https://github.com/gitpod-io/workspace-images/#images).

Next, we’ll need to create a `doppler.yaml` in the root of our repository to let Doppler know which project the repo is associated with, and which environment we’re running in:

```yml
setup:
    project: dynamic-secrets-gitpod
    config: dev
```

With this, I can finally set my `.gitpod.yml`, so that I configure Doppler access, and then inject my disposable AWS credentials into my CDE. All together, my file looks like this:

```yml
image:
    file: .gitpod.Dockerfile

tasks:
    - init: pip install textual
      command: doppler setup --no-interactive && doppler secrets substitute aws-creds > ~/.aws/credentials && doppler secrets substitute aws-conf > ~/.aws/configuration && python3 cli.py
```

Breaking down the configuration, we first specify our custom Dockerfile we saved, for Gitpod to build from. We then add a pip install for textual, a terminal application library I’m using for my repo, followed by the actual commands to authenticate with Doppler, and inject our credentials into the two new template files we’ve created, `aws-creds`, and `aws-conf`.

## Writing the AWS Credentials Template

Ordinarily, Doppler recommends you use named pipes to prevent your secrets from being written to disk. However, the AWS CLI does not currently read from named pipes. This means we’ll need to write our (again, temporary) credentials to disk instead. We’ve done this in our `.gitpod.yml` via our `doppler secrets substitute aws-creds > ~/.aws/credentials`.

Our template file is straightforward, and matches the common Golang template syntax:

```
[default]
aws_access_key_id={{ .CUSTOM_IAM_LAMBDA_ACCESS_KEY_ID }}
aws_secret_access_key={{ .CUSTOM_IAM_LAMBDA_SECRET_ACCESS_KEY }}
```

Note that we have a `.` prefix in front of our variable names. These are followed by the name of our role we configured earlier and the name of the variable created.

We can do the same for our `aws-conf` file, or, as in my case, just hardcode the preferences for our preferred AWS region:

```
[default]
region=us-west-2
output=json
```

You may want to have these values be environment variables settable by developers. This could allow them to (for example) spin up infrastructure that is closest to their physical location, minimizing the latency they have to deal with. Again, in our task we inject secrets from Doppler into this file (if there are any), and then copy the file to `~/.aws/configuration`.

## Verifying the AWS Credentials

Finally, we need to verify that our credentials are actually provisioned properly in our AWS environment. To do this, we can do the most basic of aws-cli calls, and ensure that we’re able to actually authenticate:

```bash
$ aws sts get-caller-identity
```

With this, a JSON object should pop out, letting you know who your UserId, Account, and Arn are. These should now match the role we created earlier.

## Continuing to Improve the Developer Experience

This just scratches the surface of what is possible with AWS integration in your development environment. From here, we could provision a database with example data from S3 for testing, add lambdas, or replay traffic in a reproduction of infrastructure from production. Thinking through the possibilities is really up to you.

If you have a particularly clever idea you’d like to share with us, we want to hear about it! Please head over to [our community on Discord](https://www.gitpod.io/chat).
