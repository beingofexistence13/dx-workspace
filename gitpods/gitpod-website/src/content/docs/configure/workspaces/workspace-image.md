---
section: workspaces
title: Workspace Image
description: Learn how to use different workspaces images available in Gitpod. The workspace image defines the base environment from which your workspaces are created. Or, you can create and use your own custom workspace images.
---

# Workspace Image

By default, Gitpod uses a standard Docker Image called [`Workspace-Full`](https://github.com/gitpod-io/workspace-images/blob/481f7600b725e0ab507fbf8377641a562a475625/dazzle.yaml#L18) as the foundation for workspaces. Workspaces started based on this default image come pre-installed with Docker, Nix, Go, Java, Node.js, C/C++, Python, Ruby, Rust, Clojure as well as tools such as Homebrew, Tailscale, Nginx and several more.

If this image does not include the tools you need for your project, you can provide a public Docker image or your own [Dockerfile](#configure-a-custom-dockerfile). This provides you with the flexibility to install the tools & libraries required for your project.

> **Note:** Gitpod supports Debian/Ubuntu based Docker images out-of-the-box. Some base images like Alpine do not include [libgcc and libstdc++](https://code.visualstudio.com/docs/remote/linux#_tips-by-linux-distribution) by default, which breaks Visual Studio Code. See a [reference Alpine base image](#alpine) and [issue #3356](https://github.com/gitpod-io/gitpod/issues/3356).

## Configuring a Workspace Image

### Use a public Docker image

You can define a public Docker image in your `.gitpod.yml` file with the following configuration:

```yml
image: node:buster
```

The official Gitpod Docker images are hosted on <a href="https://hub.docker.com/u/gitpod/" target="_blank">Docker Hub</a>.

You can find the source code for these images in <a href="https://github.com/gitpod-io/workspace-images/" target="_blank">this GitHub repository</a>.

**Docker image tags**

For public images, feel free to specify a tag, e.g. `image: node:buster` if you are interested in a particular version of the Docker image.

For Gitpod images, we recommend using timestamped tag for maximum reproducibility, for example `image: gitpod/workspace-full:2022-05-08-14-31-53` (taken from the `Tags` panel on [this dockerhub page](https://hub.docker.com/r/gitpod/workspace-full/tags) for example)

### Use a private Docker image

> This is currently in [Alpha](/docs/help/public-roadmap/release-cycle).

`youtube: mH3wihkVVaE`

You may also use private Docker images.

To do so you must provide the registry authentication details to Gitpod by setting `GITPOD_IMAGE_AUTH` with the following value `<registry-domain>:<base64-encoded 'username:password'>` as a [Project-level environment variable](/docs/configure/projects/environment-variables#project-specific-environment-variables).

For example, if the registry is `registry.hub.docker.com`, the username is `foo` and the password is `bar`, the `GITPOD_IMAGE_AUTH` environment variable value may be calculated using the command `echo -n "registry.hub.docker.com:"; echo -n "foo:bar" | base64 -w0` which outputs `registry.hub.docker.com:Zm9vOmJhcg==`.

Later you should be able to use the following in your `.gitpod.yml`:

```yaml
image: registry.hub.docker.com/your_username/image
```

### Using a custom Dockerfile

This option provides you with the most flexibility. Start by adding the following configuration in your `.gitpod.yml` file:

```yml
image:
    file: .gitpod.Dockerfile
```

Next, create a `.gitpod.Dockerfile` file at the root of your project. The syntax is the regular `Dockerfile` syntax as <a href="https://docs.docker.com/engine/reference/builder/" target="_blank">documented on docs.docker.com</a>.

A good starting point for creating a custom `.gitpod.Dockerfile` is the
<a href="https://github.com/gitpod-io/workspace-images/blob/481f7600b725e0ab507fbf8377641a562a475625/dazzle.yaml#L18" target="_blank">gitpod/workspace-full</a> image as it already contains all the tools necessary to work with all languages Gitpod supports.

```dockerfile
# You can find the new timestamped tags here: https://hub.docker.com/r/gitpod/workspace-full/tags
FROM gitpod/workspace-full:2022-05-08-14-31-53

# Install custom tools, runtime, etc.
RUN brew install fzf
```

> ⚠️ **Caveat:** > `COPY` instructions in a Dockerfile is only evaluated once and then cached.
> [See this](#manually-rebuild-a-workspace-image) to break the cache and trigger a rebuild.

> ⚠️ **Caveat:** The base image of a custom Dockerfile must be public.

**Docker support**: If you use the `gitpod/workspace-full` image, you get Docker support built-in to your environment.

If you want a base image without the default tooling installed then use the <a href="https://github.com/gitpod-io/workspace-images/blob/481f7600b725e0ab507fbf8377641a562a475625/dazzle.yaml#L3" target="_blank">gitpod/workspace-base</a> image.

```dockerfile
# You can find the new timestamped tags here: https://hub.docker.com/r/gitpod/workspace-base/tags
FROM gitpod/workspace-base:2022-05-08-14-31-53

# Install custom tools, runtime, etc.
# base image only got `apt` as the package manager
# install-packages is a wrapper for `apt` that helps skip a few commands in the docker env.
RUN sudo install-packages shellcheck tree llvm
```

When you launch a Gitpod workspace, the local console will use the `gitpod` user, so all local settings, config file, etc. should apply to `/home/gitpod` or be run using `USER gitpod` (we no longer recommend using `USER root`).

You can however use `sudo` in your Dockerfile. The following example shows a typical `.gitpod.Dockerfile` inheriting from `gitpod/workspace-full`:

```dockerfile
# You can find the new timestamped tags here: https://hub.docker.com/r/gitpod/workspace-full/tags
FROM gitpod/workspace-full:2022-05-08-14-31-53

# Install custom tools, runtime, etc.
# install-packages is a wrapper for `apt` that helps skip a few commands in the docker env.
RUN sudo install-packages \
          binwalk \
          clang \
          tmux

# Apply user-specific settings
```

Once committed and pushed, Gitpod will automatically build this Dockerfile when (or [before](/docs/configure/projects/prebuilds)) new workspaces are created.

See also [Gero's blog post](/blog/docker-in-gitpod) running through an example.

### What is available at build time

**Available:**

-   Git repository at CWD.

    Note: [additionalRepositories](/docs/configure/workspaces/multi-repo#cloning-additional-repositories) from the multi-repos feature will not be available in this context.

    > For example, you can copy your repository inside the image and execute a script:
    >
    > ```dockerfile
    > FROM gitpod/workspace-full
    >
    > # At first copy the repository files to ${TARGET_DIR}
    > ARG TARGET_DIR="/tmp/work"
    > COPY --chown gitpod:gitpod . "${TARGET_DIR}"
    >
    > # Let's suppose there is a bash script in our repository, we can try to execute it
    > RUN cd "${TARGET_DIR}" && bash ./scripts/compile.sh
    > ```

**Not available:**

-   [Gitpod environment variables](/docs/configure/projects/environment-variables), not available due to security reasons.

    > If you want to access Gitpod environment variables when building images using the Docker daemon running in your workspace. Here's what you could do:
    >
    > -   Prepare a custom dockerfile (`.gitpod.Dockerfile`), example contents:
    >
    > ```dockerfile
    > FROM gitpod/workspace-full
    >
    > # Lets suppose DOWNLOAD_URL is saved as a Gitpod environment variable that is visible (not hidden to the workspace)
    > RUN curl -L "${DOWNLOAD_URL}" -o "${HOME}/payload.tar"
    > ```
    >
    > -   Build an image using the Docker daemon running in your workspace like so: `docker build --build-arg DOWNLOAD_URL -f .gitpod.Dockerfile .`
    > -   Push the image to your dockerhub account and change it's visibility to private.
    > -   Use the image from your `.gitpod.yml`:
    >
    > ```yml
    > image: registry.hub.docker.com/your_username/image
    > ```
    >
    > -   Setup [private docker image support](#use-a-private-docker-image) on Gitpod to use it.

-   [Persistent `/workspace` directory mount](/docs/configure/workspaces/workspace-lifecycle#workspace-statuses)
-   [`/ide` layer](/docs/references/ides-and-editors)
-   [Gitpod CLI](/docs/references/gitpod-cli)

### Custom base image

While it is recommended to extend one of the <a href="https://hub.docker.com/u/gitpod/" target="_blank">Gitpod-provided base images</a> for custom Dockerfiles to ensure the image has the required dependencies for a workspace, it is possible to configure a Dockerfile with a public (Debian/Ubuntu-based) image as its base.

There are some requirements for a public base image to work properly as a workspace. For example, you'll need to set up the `gitpod` user with the right UID, and install `git` to ensure your workspace can start. See the below Dockerfiles as a reference.

#### Ubuntu

```dockerfile
FROM ubuntu:latest

# Install:
# - git (and git-lfs), for git operations (to e.g. push your work).
#   Also required for setting up your configured dotfiles in the workspace.
# - sudo, while not required, is recommended to be installed, since the
#   workspace user (`gitpod`) is non-root and won't be able to install
#   and use `sudo` to install any other tools in a live workspace.
RUN apt-get update && apt-get install -yq \
    git \
    git-lfs \
    sudo \
    && apt-get clean && rm -rf /var/lib/apt/lists/* /tmp/*

# Create the gitpod user. UID must be 33333.
RUN useradd -l -u 33333 -G sudo -md /home/gitpod -s /bin/bash -p gitpod gitpod

USER gitpod
```

#### Alpine

```dockerfile
FROM alpine:3.18.2

RUN apk add --no-cache \
        # Needed for Gitpod compatibility:
        git\
        # git-lfs \ # uncomment if needed
        bash \
        sudo  \
        docker \
        iptables\
        # Needed for VSCode compatibility:
        libgcc \
        gcompat \
        libstdc++\

    # Add gitpod user
    && echo '%gitpod ALL=(ALL) NOPASSWD: ALL' > /etc/sudoers.d/gitpod \
    && addgroup -g 33333 gitpod && adduser -u 33333 -G gitpod -h /home/gitpod -s /bin/bash -D gitpod
```

**Additional tools & languages:** see https://github.com/gitpod-io/workspace-images/tree/main/chunks for references to configure your workspace image with common tools and languages. For instance, [this Dockerfile](https://github.com/gitpod-io/workspace-images/blob/main/chunks/tool-docker/Dockerfile) shows how to install `docker` and `docker-compose`.

**Tailscale:** see [the Tailscale integration docs](/docs/integrations/tailscale#integration) for setting up Tailscale in a custom Dockerfile.

## Validate and apply a workspace image

To validate your workspace image is working execute the `gp validate` command from within the workspace with your configuration changes. For the configuration change to apply for all new workspaces you must commit and push your configuration to source control.

For a full guide, see [Configuring Workspaces](/docs/configure/workspaces).

## Manually rebuild a workspace image

If you want to force a rebuild of the image associated with a repository,

Sometimes you find yourself in situations where you want to manually rebuild a workspace image, for example if packages you rely on released a security fix.

You can trigger a workspace image rebuild with the following URL pattern: `https://gitpod.io/#imagebuild/<your-repo-url>`.

## Configure a custom shell

> **Feedback needed**: Custom shell support is in the works. The below shows a method for running some of the `~/.bashrc.d` startup scripts. To leave feedback on the approach, please see this GitHub issue: [#10105](https://github.com/gitpod-io/gitpod/issues/10105).

For example, if you wish to default your workspace-image to `zsh`, you could do it from your [custom dockerfile](#custom-docker-image) with the following line:

```dockerfile
ENV SHELL=/usr/bin/zsh
```

Tip: You could also create an environment variable at https://gitpod.io/variables called `SHELL` with `*/*` scope for setting a personal default SHELL.

Caveat: Shells like `fish`, `zsh` and etc. are not POSIX-compliant or bash-compatible, so your Gitpod tasks might error if you use some POSIX or bash specific features in your task scripts.

### Load bash environment in custom shell

Currently we put some startup scripts for the workspace-images at `~/.bashrc.d`, that means if you change your SHELL from `bash` to something else, they will not auto run. You could run the following command from your SHELL to workaround:

```bash
bash -lic 'true'
```

## FAQs

### [Why is my custom dockerfile rebuilding everytime even with no change made to it?](https://discord.com/channels/816244985187008514/1069452552111923280)

<!-- DISCORD_BOT_FAQ - DO NOT REMOVE -->

This usually happens when you don't pin the image tag (AKA version) inside your [custom dockerfile](#use-a-custom-dockerfile).

In such cases, it could be that there has been long gaps between the time you reuse a workspace or create a new one. We usually release new images every week so if there was more than one week between each start then the image will be rebuild every time.

So, for example, if your `.gitpod.Dockerfile` looks like the following:

```dockerfile
FROM gitpod/workspace-full:latest

# ... more stuff
```

You could grab a timestamped tag from [here](https://hub.docker.com/r/gitpod/workspace-full/tags) for `gitpod/workspace-full`.

And then your `.gitpod.Dockerfile` could look like:

```dockerfile
FROM gitpod/workspace-full:2023-01-16-03-31-28

# ... more stuff
```

Note: Please grab a recent tag from the linked page, don't copy paste the example from here.

Also see [docker-image-tags](#docker-image-tags) for more info.

### [How to run a Desktop app for GUI development inside a Gitpod workspace](https://discord.com/channels/816244985187008514/1069538137572909106)

<!-- DISCORD_BOT_FAQ - DO NOT REMOVE -->

If you wish to do GUI application development in Gitpod and getting errors such as:

-   Unable to init server: Could not connect : Connection refused
-   No display server running
-   Xorg missing
-   `xdg-open` command not found

Then you need to use the `gitpod/workspace-full-vnc` docker image. See [this page](https://github.com/gitpod-io/workspace-images/blob/axonasif/add_docs/chunks/tool-vnc/README.md#details) for more info.
