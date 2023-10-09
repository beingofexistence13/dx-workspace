---
author: burningion
date: Wed, 8 Feb 2023 17:00:00 UTC
excerpt: Making the management and rotation of developer secrets an easy, reproducible process with the SecretOps platform Doppler
image: header.webp
teaserImage: header.webp
tags: ['Engineering', 'Developer experience']
title: Securely Manage and Rotate Development Secrets with Doppler and Gitpod
---

> When new users try [Cloud Development Environments](http://gitpod.io/cde), one of the very first questions they ask is: **“How do you manage access to secrets?”**

During local development, the storage and management of secrets is generally an exercise left up to individual developers. Configuration sprawl can eventually occur on each developer’s laptop, and things like ssh keys, passphrases, AWS configurations, and specific lines in `~/.bash_rc` files become untracked dependencies for a project.

Once the management of secrets has to be a reproducible process for all team members (as in a CDE like Gitpod), the lack of attention secrets hygiene gets on teams can become especially apparent. By using Gitpod Variables and Doppler, teams can consistently enforce secrets management across entire organizations, and rotate keys without a single interaction from developers.

## Secrets Sprawl and Enforced Consistency with Gitpod Variables

As it stands, developers have a myriad of options when to locally manage secrets and keys. Some prefer to inject environment variables in their `~/.bashrc` file, while some tools (like AWS' cli) require secrets within a home sub-directory. Some teams approach the problem of secrets within repositories with `.env` files, but these approaches inevitably have gaps, or are difficult to update across everyone's laptops.

Worse still, when secrets management becomes cumbersome, developers can hardcode credentials into their code. This raises the possibility of secrets accidentally being committed to source repositories.

Out of the box, Gitpod offers the ability to set and inject [environment variables](https://www.gitpod.io/docs/configure/projects/environment-variables) into workspaces. These environment variables are encrypted when stored on Gitpod, and are injected in the shell environment as plaintext [environment variables](https://opensource.com/article/19/8/what-are-environment-variables) when running in a Workspace.

(Remember, you can always run `env` in a workspace bash terminal to see all the environment variables that are set.)

Environment variables can be set within Gitpod either by the `gp env` [command](https://www.gitpod.io/docs/configure/projects/environment-variables#ways-of-setting-user-specific-environment-variables), or by setting them in the Variables section of your user account. There they can either be scoped to a single Git repository, or set globally, for things like configuring your shell environment preferences.

With settable environment variables, users can ensure API keys, passphrases, and certificates are all available within their developer environments, ready for immediate coding.

## Doppler and Secrets Management

But for larger teams, maintaining secrets can become a serious challenge. Distributing access to development keys is hypothetically easy enough, but what about rotating them? And how do you maintain consistency around which secrets are required for which project?

[Doppler](https://www.doppler.com/) is a SecretOps platform that allows you to share and sync developer secrets across all environments. Rather than manually setting environment variables via `.env` files, Doppler allows you to run an executable that injects the latest version of secrets into your binary or configuration files before execution.

Let’s take a concrete example:

When developing an OAuth 2.0 application, developers need to maintain an OAuth Client ID and Secret. Ideally, they’ll also have a static URL for callbacks from the OAuth provider.

In our case we’ll use [ngrok](https://ngrok.com/) during development to have a static route to our development environment.

<figure class="flex flex-col items-center text-center">
  <img src="/images/blog/securely-manage-development-secrets-with-doppler-and-gitpod/dev-stage-prod.webp" alt="Doppler dev, stage, and prod"  />
</figure>

Doppler allows you to set up specific instances of your secrets, and have them be injected into your environments, depending on the environment which you’re running in.

This is done with a `doppler run`, right before launching your process. It reads your environment configuration (set either via `doppler.yaml` or passed via command line arguments), and injects the associated environment variables before running the process.

With this, we’re able to do things like share cloud keys, database credentials, certificates, and URLs directly to our executables at execution time.

As a side effect, using Doppler with Gitpod for development helps ensure we maintain good secret hygiene, by encouraging us to keep secrets consistently stored across all the places we run our software, from development to production. This also ensures our development team always has access to the latest version of secrets, and never has to think about the logistics of rotating keys.

## Injecting Secrets into Configuration Files

But some secrets don’t fit well within the environment variable paradigm. These secrets may live deep within yaml files, or custom configuration files in subdirectories not related to our repository. For example, logging and database settings may change from staging to production. For these, Doppler has the `--mount` command. This behaves as a standard Go template, allowing you to inject your configuration values into a named pipe. (Basically a pipe that behaves as a file but doesn’t get written to disk.)

For reference, here’s how I’ve set up my ngrok account (with a configuration file which must live within my home directory) with Doppler to have a static URL for testing my OAuth 2.0 flow:

```yml
# in ngrok.yml
authtoken: { { .NGROK_AUTH_TOKEN } }
region: us
version: 2
tunnels:
    fastapi-openid-connect:
        proto: http
        hostname: { { .NGROK_DOMAIN } }
        addr: 127.0.0.1:8000
```

In my Doppler development environment, I’ve set the matching variables `NGROK_AUTH_TOKEN` and `NGROK_DOMAIN`. To inject these into my Gitpod workspace and run ngrok, I have the following line in my `.gitpod.yml`:

```bash
doppler setup --no-interactive && doppler run --mount /home/gitpod/.config/ngrok/ngrok.yml --mount-template ngrok.yaml -- ngrok start fastapi-openid-connect
```

With this, I’m able to configure my template, and have my secrets get set across both staging and development with the proper values.

Note here that we’re using named pipes, and not actually writing our template secrets to disk. Doppler offers this as a feature with the `--mount` and `--mount-template` options in the doppler run command.

## Automating Doppler Secrets Injection on Gitpod

Given Gitpod’s ephemeral nature, we ideally want our entire development environment to spin up without any interaction from our part.

To accomplish this, we first need to create a `DOPPLER_TOKEN` token environment variable, set to our Doppler token. Again, we can accomplish this via Variables.

<figure class="flex flex-col items-center text-center">
  <img src="/images/blog/securely-manage-development-secrets-with-doppler-and-gitpod/doppler-secret.webp" alt="hotfix" width="600" />
</figure>

In my case, I’ve scoped my Doppler token to only be injected in my specific repository. This prevents me from opening another Gitpod instance, and injecting my secret where it may not be needed.

Once this is done, I can then set a project and environment with a `doppler.yaml` file within my repository. I’ve done the bare minimum in my repository for a compliant Doppler configuration:

```yml
setup:
    project: fastapi-openid-connect-playground
    config: dev
```

With this, I can then inject environment variables into a command named `MY_COMMAND` by:

```bash
doppler setup --no-interactive && doppler run MY_COMMAND
```

Alternatively, continuing the example above I can inject my OAuth Client secret, along with my JWKS secret into multiple configuration files with a:

```bash
doppler setup --no-interactive && doppler run --mount ../client_secret.json --mount-template oauth2_client_secret.json  -- doppler run --mount-template jwks_secret --mount ../jwks_secret -- doppler run -- uvicorn main:app --reload
```

Again, note the `--` used to separate our commands between the template mounting and actual execution of our binary. As each of these is written as a separate task within our `.gitpod.yml`, we’ll need to again do the `doppler setup –no-interactive` to set our configuration in the user’s home directory, just in case our task gets executed first.

Because our secret gets injected at run time, **if we need to rotate our secrets, it's as simple as setting the new value in the Doppler UI.**

**In the next post, we’ll cover using Doppler to generate dynamic cloud credentials for ephemeral developer environments.** This adds another layer of protection to your secrets, by making them short lived and created on demand to a scoped set of permissions.

Sign up for our newsletter below to get notified when we publish it.
