---
section: authentication
title: Authentication
description: Gitpod allows you to work with any public or private repository on GitLab, GitHub, and Bitbucket.
---

# Authentication

Gitpod comes with integrations for [GitLab](/docs/configure/authentication/gitlab), [GitHub](/docs/configure/authentication/github), and [Bitbucket](/docs/configure/authentication/bitbucket) projects. It also provides a [browser extension](/docs/configure/user-settings/browser-extension) or a [browser bookmarklet](/docs/configure/user-settings/browser-bookmarklet) for Chromium-based browsers (Chrome, Edge, Brave) and Firefox.

`youtube: qfIQJflDnco`

## FAQs

### ["Email address already used in another account" when trying to login into Gitpod](https://discord.com/channels/816244985187008514/1015175207301947433)

<!-- DISCORD_BOT_FAQ - DO NOT REMOVE -->

Send us a message through the [contact form](https://www.gitpod.io/contact/support) with your Gitpod account email. After you reach out, we will delete your account so that you can sign up again, which should resolve your issue.

### [How to get SCM API token from Gitpod's GitLab, GitHub or Bitbucket integration as environment variable](https://discord.com/channels/816244985187008514/1061997373817094236)

<!-- DISCORD_BOT_FAQ - DO NOT REMOVE -->

Run `gp init` on your terminal or manually create a file called `.gitpod.yml`

1. Put the following line in your `.gitpod.yml`:

```yml
image:
    file: .gitpod.Dockerfile
```

2. Create a file called `.gitpod.Dockerfile` and put the following content in it:

```dockerfile
FROM gitpod/workspace-full

RUN file="$HOME/.bashrc.d/770-scm_token.sh" \
    && printf '%s\n' 'if [[ "${GITPOD_WORKSPACE_CONTEXT_URL:-}" == *gitlab* ]]; then : "gitlab"; else : "github"; fi; scm_name="$_"' > "${file}" \
    && printf 'export SCM_TOKEN="$(%s)"\n' "gp credential-helper get <<<host=\${scm_name}.com | sed -n 's/^password=//p'" >> "${file}"
```

3. [Validate your configuration changes](/docs/configure/workspaces#validate-your-gitpod-configuration) by running `gp validate` in your workspace.
4. [Apply your .gitpod.yml changes](/docs/configure/workspaces#apply-configuration-changes) by committing and restarting a new workspace.

Now you can use `$SCM_TOKEN` environment variable after you commit and create a new workspace, this variable will contain an API token based on the Git context (i.e. Gitlab/GitHub/Bitbucket)

### How to use a private GitHub email or custom email for Git commits

At the [variables](https://gitpod.io/user/variables) page, create two variables[[1](https://gitpod.io/user/account)] called:

-   GIT_COMMITTER_EMAIL
-   GIT_AUTHOR_EMAIL

and set the custom email address as the value and `*/*` as the scope.

Now all of your new workspaces should use them for Git commits. If you have a workspace running, you can restart it or run `eval "$(gp env -e)"` in it.
