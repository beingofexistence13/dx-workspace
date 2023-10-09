---
section: projects
title: Environment Variables
description: Learn how to set and use environment variables for your Gitpod projects.
---

# Environment Variables

You can pass environment variables into your workspace and use them in your code as usual. Please refer to the documentation of your programming language of choice for details on that.

`youtube: dehln1E8ylY`

## Default Environment Variables

Below are some environment variables which are set automatically by Gitpod and are guaranteed to exist:

-   `GITPOD_WORKSPACE_ID`: The Universally Unique Identifier (UUID) associated with the workspace.
-   `GITPOD_WORKSPACE_URL`: The unique URL of the workspace.
-   `GITPOD_REPO_ROOT`: Path to the directory where your git repository was cloned inside the workspace.

> **Tip:** Try running **`env | grep GITPOD_`** on a workspace terminal to see all the Gitpod specific environment variables. These can be useful for scripting a dynamic workspace behavior.

#### Reserved Prefix

Environment variables beginning with the prefix `GITPOD_` are reserved for internal use by Gitpod and are overridden on every workspace startup. This means that a _user-defined_ variable set with the name `GITPOD_FOOBAR` will be ignored and not accessible in the workspace.

## User-Specific Environment Variables

Gitpod supports encrypted, user-specific environment variables.
They are stored as part of your user settings and can be used to set access tokens, or pass any other kind of user-specific information to your workspaces.

The `DOCKERD_ARGS` environment variable can be used to specify additional arguments to the docker installation running in your workspace. Currently
mapping a user in your container to the gitpod user in your workspace is supported. This helps if you are using an unprivileged user with your containers
(e.g. user 1000 in a node image) but need to edit files with vscode that have been created within the container. The content of the environment variable
should look like this:

```json
{ "remap-user": "1000" }
```

### Ways of setting user-specific environment variables

#### Using the command line: `gp env`

The `gp` CLI prints and modifies the persistent environment variables associated with your user for the current repository.

To set the persistent environment variable `foo` to the value `bar` use:

```sh
gp env foo=bar
```

Beware that this does not modify your current terminal session, but rather persists this variable for the next workspace on this repository.
`gp` can only interact with the persistent environment variables for this repository, not the environment variables of your terminal.
If you want to set that environment variable in your terminal, you can do so using -e:

```sh
eval $(gp env -e foo=bar)
```

If you're using `fish` shell:

```sh
eval (gp env -e foo=bar)
```

To update the current terminal session with the latest set of persistent environment variables, use:

```sh
eval $(gp env -e)
```

If you're using `fish` shell:

```sh
eval (gp env -e)
```

To delete a persistent environment variable use:

```sh
gp env -u foo

# And if you want to remove it from your shell session too:
unset foo
```

Note that you can delete/unset variables if their repository pattern matches the repository of this workspace exactly. I.e. you cannot
delete environment variables with a repository pattern of _/foo, foo/_ or _/_.

```sh
Usage:
  gp env [flags]

Flags:
  -e, --export   produce a script that can be eval'ed in Bash
  -h, --help     help for env
  -u, --unset    deletes/unsets persisted environment variables
```

#### Using the account settings

You can also configure and view the persistent environment variables in [your account settings](https://gitpod.io/variables).

![Environment Variables in Account Settings](/images/docs/beta/configure/environment-variables/environment-variables-account-settings.png)

You can add as many environment variables as you wish.

The repository pattern of each variable determines in what workspace it will be available.
Repository patterns follow the `owner/repository` pattern. You can use a wildcard on either of the two, e.g. `gitpod-io/*` would make that variable available in all repositories owned by `gitpod-io`.
Conversely `*/vscode` would make that variable available on all repositories called `vscode`; this is especially useful for forks.
Subsequently `*/*` makes that variable available in all of those workspace.

**Note**: For GitLab, which allows to have nested group/repository structures like `owner/some-group/sub-group/repo`, the number of segments in the pattern has to match the number of segments in the repository name. This constraint exists to avoid surpises and leaking of content into unexpected repositories. For matching arbitrary segments to the right, there is a dedicated pattern: `**`.

Some example patterns (**for GitLab**) and results for the mentioned `owner/some-group/sub-group/repo` repository:

-   `*/**`: ✅
-   `*/*`: ❌ _(for GitLab)_
-   `owner/some-group/*/*`: ✅
-   `owner/some-group/*`: ❌
-   `owner/some-group/**`: ✅
-   `owner/**`: ✅
-   `owner/some-group/sub-group/repo`: ✅
-   `*/some-group/sub-group/repo`: ✅

> **Beware:** While the variable values are stored encrypted, they are available as plain text inside a workspace. Be careful when sharing your live workspace or when using `*/*` or `*/**` as repository pattern.

## Using secrets with 3rd-party services

If you use tools like `aws`, `gcloud` or `vault` with Gitpod, you might want to consider using [OpenID Connect (OIDC)](/docs/configure/workspaces/oidc) over environment variables for authentication. OIDC makes the whole process of sharing secrets between a workspace and a 3rd-party more secure and scalable.

## Project-Specific Environment Variables

Environment variables which are defined in [project](/docs/configure/projects) settings will be visible in prebuilds, and optionally also in workspaces. This is useful for prebuilds to access restricted services. Project-Specific Environment Variables will take precedence over [User-Specific Environment Variables](#user-specific-environment-variables). Only members of the [Gitpod organization](/docs/configure/orgs) where the project resides will be able to access the environment variables inside a running workspace, if the associated repository is public then people outside of your Gitpod organization will _not_ have access to them normally.

> **Warning:** Care should be taken with secrets. If your repository is public and prebuilds are enabled, ensure that neither of your `init` or `before` task commands in `.gitpod.yml` are exposing the sensitive environment variable values to the filesystem (i.e. persistent `/workspace` dir) and that [`pullRequestsFromForks` (for GitHub)](/docs/configure/projects/prebuilds#github-specific-configuration) is set to false.

## Task terminal-specific Environment Variables

You can set environment variables for a Gitpod `task` terminal by setting the `env` property within the task definition in your `.gitpod.yml`. Please note that such environment variables will be limited to the `task` terminal and are not globally set across the workspace.

### Using the `env` keyword

```yml
tasks:
    - name: Example of setting an environment variable for a task terminal
      env:
          PRINT_ME: 'Hello World!'
      command: echo "$PRINT_ME"
```

Note: The values should be a static string or integer, you can't refer to an existing variable via `env` keyword.

### Using the task SHELL

```yml
tasks:
    - name: Example of starting yarn with a custom environment variable set
      command: |
          # Example for referring to the existing system variables
          export API_URL="$HOSTNAME"

          # Print out the environment variable
          echo "$API_URL"

          yarn start

    - name: Example of updating PATH environment variable inside a task shell
      command: |
          # Download and install `fzf` binary to ~/.local/bin/
          mkdir -p ~/.local/bin
          curl -sL "https://github.com/junegunn/fzf/releases/download/0.35.1/fzf-0.35.1-linux_amd64.tar.gz" | tar -C ~/.local/bin -xpz

          # Update PATH variable
          export PATH="$HOME/.local/bin:$PATH"

          # Now `fzf` can be called without full path from the task shell
          ls / | fzf
```

Note: You can use this method when you need to refer to other variables or want to use scripting to set them conditionally.

See [`.gitpod.yml`](/docs/references/gitpod-yml#tasksnenv) for more details.

## Providing one-time environment variables via URL

> ❗️ This feature is great for setting one-time environment variables for dynamic workspace configurations or setups but is not appropriate for configuring sensitive information, such as passwords or long-lived API tokens. Gitpod and the [Open Web Application Security Project](https://owasp.org/www-community/vulnerabilities/Information_exposure_through_query_strings_in_url) recommends that you do not pass sensitive information through query strings. Refer to [CWE-598](https://cwe.mitre.org/data/definitions/598.html) to learn more about this recommendation.

In addition to user-specific environment variables, Gitpod also allows passing in variables through the `gitpod.io/#` URL.
The syntax for that is:

```
https://gitpod.io/#var=value,var2=value2/https://github.com/my-org/repo-to-work-on
```

The values are [URL encoded](https://www.w3schools.com/tags/ref_urlencode.asp) to allow any non-ascii characters in values.
In case of a conflict, e.g. in the example above if the user already had a variable `var2` set, the user's value would be used.

## Exporting all the Gitpod environment variables that you created

You can run the following command in your Gitpod Workspace terminal to save your environment variables (which you have configured in [Gitpod Environment Variables](https://gitpod.io/variables)) in a different file (e.g.: gitpod.env):

```bash
gp env > gitpod.env
```
