---
author: burningion
date: Tuesday, 15 May 2023 11:00:00 UTC
excerpt: Cloud Development Environments offer an unprecedented opportunity to enhance the security of the software development lifecycle. They offer a single place to control access to secrets, to rotate leaked credentials, sign and verify commits, and offer the potential to scan and track every piece of software before it makes its way on to your production systems.
tags: ['Engineering']
image: cncf.webp
teaserImage: cncf.webp
title: Securing CNCF Software Supply Chains with CDEs
---

[Cloud Development Environments](https://www.gitpod.io/cde) offer an unprecedented opportunity to enhance the security of the software development lifecycle. They offer a single place to control access to secrets, to rotate leaked credentials, sign and verify commits, and offer the potential to scan and track every piece of software before it makes its way on to your production systems. Because of this, Cloud Development Environments are a promising tool for the next generation of software security systems, and have already been adopted by some of the largest tech companies.

## Orchestrating A Better Secrets Lifecycle

At scale, managing access to secrets and development configuration details becomes a non-trivial challenge. When and how do you give access, and when and how do you rotate keys? Once an employee leaves a company, how do you ensure all credentials have been revoked?

CDEs give you a single place to share your configuration and secret data across your team, while also making secret rotation a single configuration change.

But Gitpod is not the only vendor rethinking the lifecycle of secrets. [Doppler](https://www.doppler.com/) is a secrets management platform that allows you to extend improvement of the secrets lifecycle beyond development and into staging and production. Their platform allows for the configuration of dynamic secrets, for things like disposable, limited access to cloud environments.

Using [Doppler within Gitpod](https://www.gitpod.io/blog/securely-manage-development-secrets-with-doppler-and-gitpod) is straightfoward. You add your Doppler API key, a doppler.yaml specifying your project, and then before running your executable, run:

```bash
doppler setup --no-interactive && doppler run MY_COMMAND
```

This injects the project's environment variables into the shell's context, allowing you to connect to the development resources you need, without them persisting in your shell session.

## Securing Containerized Workloads with Wolfi and Chainguard

How do you minimize the surface area for vulnerabilities introduced into your application?

Chainguard has created a [set of locked down containers](https://www.chainguard.dev/unchained/introducing-wolfi-the-first-linux-un-distro) to help secure your containerized workloads. We use Wolfi at Gitpod to ensure the containers running Gitpod itself have the minimal dependency vulnerability surface area possible.

Wolfi works by creating a limited, minimal container for running your application’s executables. This “distroless” application minimizes the chances of third party libraries bringing vulnerabilities into your application, and helps ship a lighter container image size to production systems. Additionally, it brings a SBOM (software bill of materials) to your containerized applications.

Chainguard has a great [example Dockerfile](https://edu.chainguard.dev/open-source/wolfi/wolfi-with-dockerfiles/#step-4-optional-composing-distroless-images-in-a-docker-multi-stage-build) showcasing how to build your application container for a Python application:

```Dockerfile
FROM cgr.dev/chainguard/wolfi-base as builder

ARG version=3.11
RUN adduser -D nonroot
WORKDIR /app

RUN apk add python-$version py${version}-pip && \
	chown -R nonroot.nonroot /app/

USER nonroot
COPY requirements.txt /app/
RUN  pip3 install -r requirements.txt --user

FROM cgr.dev/chainguard/python:latest

ARG version=3.11
WORKDIR /app

COPY --from=builder /home/nonroot/.local/lib/python${version}/site-packages /home/nonroot/.local/lib/python${version}/site-packages

COPY inky.py inky.png /app/

ENTRYPOINT [ "python", "/app/inky.py" ]
```

With this, we have only our Python dependencies required to run our production application.

## Secure, Verified Commits Everywhere

Gitpod allows for commit signing, either via [1Password](https://www.gitpod.io/blog/signing-git-commits-on-gitpod-with-1-password), Yubikey, or soon, via OpenID Connect with Fulcio. Signing git commits allows for a verification that authorized developers have cryptographically signed the code, ensuring changes have come from them.

This is useful to build an audit trail of your software, ensuring the commits and code changes have a verified author, and that history is preserved as you build your application.

Additionally, signed commits can be used as a part of a secure software update system like [TUF](https://theupdateframework.io/security/) or in-toto, allowing for stronger guarantees about your binaries’ provenance deployed to end users.

Enabling [verified commits with 1Password and SSH forwarding](https://www.gitpod.io/blog/signing-git-commits-on-gitpod-with-1-password) is just a few lines in your `.gitpod.yml` once enabled:

```yml
tasks:
  - name: Local terminal
	init: git config --global gpg.format ssh && git config --global user.signingkey "$SSH_SIGNING_KEY" && git config commit.gpgsign true --global
	command: bash
```

With this, you'll be prompted for biometric confirmation for all Git commits made in Visual Studio Code Desktop with Gitpod.

## Verified Builds, Better Collaboration

Verified commits and ephemeral, disposable cloud environments also allow for “safe” testing of unsafe code. Rather than downloading contributor code onto your machine, you’re relying on the disposability of the CDE to protect your machine from malicious code.

Again, this reduces the surface area of vulnerabilities in your organization. Especially when interacting with external developers as in open source projects, running untrusted code locally can be a security risk with unforeseen consequences. There have been multiple examples of [malicious libraries](https://www.reversinglabs.com/blog/beware-impostor-http-libraries-lurk-on-pypi) attempting to extract information from the host laptop, and CDEs allow for the minimization of the consequences of these.

Additionally, tools like [SLSA](https://slsa.dev/spec/v0.1/levels) help ensure organizations can prove the integrity of their build process. Gitpod has built tooling for [SLSA level 1 compliance](https://www.gitpod.io/blog/securing-the-software-supply-chain-at-gitpod-with-slsa), and plans on meeting level 2.

## CNCF Projects Using Gitpod

CNCF projects are built on the power of the community. Making contributions and onboarding as frictionless as possible helps ensure the community can contribute, evaluate, and onboard new contributors with minimal effort.

Because of this, [many CNCF projects](https://contribute.dev/) have already harnessed the power of CDEs by using Gitpod. [Prometheus](https://github.com/prometheus/prometheus) uses Gitpod to have a working development environment for new contributors in seconds. This helps new users try out Prometheus in a lower risk environment, allows for new contributors to have a working development environment, and allows for a more secure environment for testing contributions.

> “Gitpod has been invaluable for increasing my productivity in the Prometheus pull request review process. Instead of having to check out and build the (untrusted!) submitted code locally, I can simply jump into a pre-built Gitpod workspace based on the PR branch and start testing, debugging, and modifying the proposed code changes immediately in a secure, cloud-based development environment. This saves me time and frustration and really streamlines the review process, so I can focus on the things that matter.” - Julius Volz

Similarly, [Thanos](https://thanos.io/) [builds upon the Gitpod support](https://github.com/thanos-io/thanos/blob/main/.gitpod.yml) for Prometheus. Its `.gitpod.yml` file actually downloads and runs Prometheus, and then runs Thanos on top of it. This stacking allows for better collaboration, and CDEs can be used to “glue” together multiple projects in a realistic, development environment.

## Get Started With More Secure Development Environments Now

There are many examples of [Gitpod usage in Open Source projects](https://contribute.dev/). I encourage you to browse for your chosen stack, or language to see what may be useful for yours. You can add configuration as needed, and ensure that onboarding is as frictionless as possible for your project.

Additionally, Gitpod will be throwing an in person conference called [CDE Universe](https://cdeuniverse.com/) in San Francisco, focusing exclusively on Cloud Development Environments. We’ll have speakers from Slack, Shopify, Uber, and more, speaking about how they built their own Cloud Development Environments to unlock better efficiency for their developers.
