---
section: integrations
title: Configuring GitHub Prebuilds via .gitpod.yml
---

# Configuring GitHub Prebuilds triggers via .gitpod.yml

> **Deprecated:** Filtering prebuilds via the `.gitpod.yml` is deprecated. See changelog entry: [a new way to optimize prebuild triggers (GitHub, GitLab and Bitbucket)](/changelog/simplified-prebuilds-defaults) and [Prebuilds](/docs/configure/projects/prebuilds).

The `github` namespace in the `.gitpod.yml` file defines when prebuilds should be executed. By default, prebuilds are run on push to the default branch and for each pull request coming from the same repository.

```yml
github:
    prebuilds:
        # enable for the default branch (defaults to true)
        master: true
        # enable for all branches in this repo (defaults to false)
        branches: false
        # enable for pull requests coming from this repo (defaults to true)
        pullRequests: true
        # enable for pull requests coming from forks (defaults to false)
        pullRequestsFromForks: false
        # add a check to pull requests (defaults to true)
        addCheck: true
        # add a "Review in Gitpod" button as a comment to pull requests (defaults to false)
        addComment: false
        # add a "Review in Gitpod" button to the pull request's description (defaults to false)
        addBadge: false
```

#### Additional GitHub integration

Once the GitHub app is installed, Gitpod can add helpful annotations to your pull requests.

#### Checks

By default, Gitpod registers itself as a check to pull requests - much like a continuous integration system would do.

The default behavior, however, would not make the checks fail when the prebuild failed.
This can be enabled with the following snippet:

```yml
github:
    prebuilds:
        addCheck: prevent-merge-on-error
```

You can disable this behaviour in the `.gitpod.yml` file in your default branch:

```yml
github:
    prebuilds:
        addCheck: false
```

#### Comment

Gitpod can add a comment with an "Open in Gitpod" button to your pull requests.

You can enable this behaviour in the `.gitpod.yml` file in your default branch:

```yml
github:
    prebuilds:
        addComment: true
```

#### Badge

Instead of adding a comment, Gitpod can also modify the description of a pull request to add the "Open in Gitpod" button.
This approach produces fewer GitHub notifications, but can also create a concurrent editing conflict when the bot and a user try to edit the description of a pull request at the same time.

You can enable this behaviour in the `.gitpod.yml` file in your default branch:

```yml
github:
    prebuilds:
        addBadge: true
```

The `addComment` and `addBadge` behaviours are not mutually exclusive (i.e. enabling one does not disable the other).
If you don't want the comments to be added, disable them using `addComment: false`.
