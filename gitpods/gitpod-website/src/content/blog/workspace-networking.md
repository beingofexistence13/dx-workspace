---
author: csweichel, aledbf
date: Thursday, 16 Dec 2021 11:00:00 UTC
excerpt: Gitpod workspaces are Kubernetes pods. Each Kubernetes pod maintains its own network namespace - similar to how a regular container would. We use a combination of user and network namespaces to enable features you wouldn't find in a normal Kubernetes pod.
image: teaser.png
tags: ['Engineering']
subtitle: or how we enabled Tailscale
teaserImage: teaser.png
title: Gitpod Workspace Networking
---

Gitpod workspaces are Kubernetes pods. Each Kubernetes pod maintains its own network namespace - similar to how a regular container would. [Network namespaces](https://man7.org/linux/man-pages/man7/network_namespaces.7.html) (netns) provide isolation of the system resources associated with networking.

Container runtimes (e.g. Docker) or VPNs (e.g. Tailscale) both require control over these system resources associated with networking. If we wanted to provide workspaces with control over the network namespace of their pod, that would require `CAP_NET_ADMIN` on the node - clearly not a good idea.

## Enabling rootless Docker in workspaces

More than a year ago we enabled "$lib/components/workspacekit).

![Docker-specific network setup](/images/blog/workspace-networking/old-setup.png)

You'll have noticed that a network namespace was not part of additions we make to what Kubernetes provides. Docker however, requires the control a network namespace would afford.

In a Gitpod workspace, we don't just start a Docker daemon, but instead call `docker-up`. This custom piece of code produces a network namespace using [slirp4netns](https://github.com/rootless-containers/slirp4netns), and starts the docker daemon in there. The combination of the user namespace we provide using workspace, and this newly created network namespace, enables docker to create the networking devices and iptables entries it requires.

### Wait, what's slirp4netns, and why do we need this?

Creating a network namespace is the easy part and does not require a lot of permissions ([capabilities](https://linux.die.net/man/7/capabilities)). You can easily try that for yourself using `unshare -n bash`. You'll quickly find that it isolates a little too well, and that you don't have any connection to the world outside of the namespace you've just created.

If you have enough capabilities/permissions outside of the network namespace, you can just create a [`veth` pair](https://man7.org/linux/man-pages/man4/veth.4.html) that effectively tunnels traffic from within the netns to outside of the netns. However, we're creating the netns because we don't have those permissions in the first place.

Slirp4netns solves this problem using [TAP/TUN](https://www.kernel.org/doc/html/v5.12/networking/tuntap.html), by turning itself into a user-space packet forwarder. Running outside the netns (hence it has access to the network of the "outside world"), it creates a `tun` device inside the network namespace. All packets to and from this tunnel network device are forwarded through user-space now.

Biggest benefit: works without elevated capabilities. Biggest drawback: forwards all traffic through user-space, which incurs a significant performance cost.

## [`CAP_NET_ADMIN`](<https://man7.org/linux/man-pages/man7/capabilities.7.html#:~:text=using%20mknod(2).-,CAP_NET_ADMIN,-Perform%20various%20network>) for ~~everyone~~ those who configure it

We've been living with the setup described above (netns only for the Docker daemon) for more than eight months. Mainly driven by performance considerations, but also because we saw no use-case which would warrant a change.

One day, we [were approached](https://github.com/gitpod-io/gitpod/issues/3258#issuecomment-949576242) by the awesome folks from [Tailscale](https://tailscale.com/). They were working on how to make [Tailscale available in Gitpod](/blog/tailscale) workspaces. The underlying issue: creating a TAP/TUN device and setting up routes to make use of it, all within a regular Gitpod workspace.

![workspace-wide network namespace](/images/blog/workspace-networking/new-setup.png)

We had solved this problem already for one specific use-case: the Docker daemon. Within a single day, [we wrapped the entire workspace in a network namespace](https://github.com/gitpod-io/gitpod/pull/6409), if the workspace had a new `experimentalNetwork: true` [config flag set.](https://github.com/gitpod-io/demo-tailscale-with-gitpod/blob/1091c778c7e608d58e6e3cb1d494c73d5b255558/.gitpod.yml#L12)

Why make this optional behind a flag? Because this is a considerable change of the workspace networking setup, and we are careful not to break the existing experience. Also, the slirp4netns solution comes with a performance penalty (see above).

However, with this change, we no longer needed to special case Docker, and Tailscale works out of the box.

## `CAP_NET_ADMIN` for everyone

After observing the behaviour of this new networking setup in the wild, and with [our recent move to k3s](https://twitter.com/csweichel/status/1468239388115099669), we felt comfortable enough to make this behaviour standard. On the 9th December, we [rolled out a change](https://github.com/gitpod-io/gitpod/pull/7063#event-5739083230) which enabled this network namespace addition for all workspaces. We've also seen this change fixing [other networking related issues](https://github.com/gitpod-io/gitpod/issues/6446), providing even more reasons to move ahead.

Today, when you start a workspace, `sudo tailscaled` will just run, and your Docker daemon will share the same network setup as the rest of the processes in your workspace. You can even do the networking equivalent of `rm -rf /` and break your workspace by running `sudo ip link set tap0 down` (you'll have to stop your workspace from the dashboard, or let it time out).

There's still the performance cost of slirp4netns we have to deal with. Now that we run on more recent Linux versions, we can integrate a seccomp-addfd approach and follow what [bypass4netns](https://github.com/rootless-containers/bypass4netns) implements.

## Exciting times

It's super exciting to see how quickly these changes have come together, and the use-cases they enable. We're nowhere near the end of what we can do in this space, but are just getting started. If you want to join the fun, please head over to [gitpod.io/careers](http://gitpod.io/careers) and see what floats your boat.
