---
title: Workspaces forward ports using the HTTPS protocol
alt: An example gitpod.yml configuration showing the protocol property set to https
date: 2023-06-19
excerpt: You can now expose ports from your workspace running with HTTPS configured either in the gitpod.yml or using the Gitpod CLI.
image: https-port-configuration.webp
ogImage: https-port-configuration.webp
customSlug: https-workspace-ports
---

In Gitpod, you can now expose ports from your workspace running with HTTPS.

Previously, HTTPS ports exposed in a workspace would show a "port not found" page when accessed. You can configure the port protocol either in your [gitpod.yml](/docs/references/gitpod-yml) or via the [Gitpod CLI](/docs/references/gitpod-cli).

## Configuring a port protocol in `.gitpod.yml`

To ensure a port is always configured with a specific protocol you can update the `ports` definition block in `.gitpod.yml` as below. Updating your `.gitpod.yml` is the preferred approach to using the `gp` CLI (see below), as the `.gitpod.yml` is declarative and ensures workspaces are created repeatably.

```yml
ports:
    - name: Frontend Application
      port: 3000
      protocol: https
```

## Dynamically updating port protocols with `gp`

You can dynamically change the protocol of a port using the `gp ports protocol` command.

For example, `gp ports protocol 3000:https` will change port `3000` to use `https`.

Or, `gp ports protocol 3000:http` will change port `3000` to use `http`. By default, ports are set as HTTP.

See [configuring ports](/docs/configure/workspaces/ports), [Gitpod CLI](/docs/references/gitpod-cli) [gitpod.yml](/docs/references/gitpod-yml) for more.
