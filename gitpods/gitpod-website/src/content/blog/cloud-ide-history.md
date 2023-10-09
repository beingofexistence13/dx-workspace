---
author: akosyakov
date: Tuesday, 20 Oct 2021 13:00:00 UTC
excerpt: Background story about the last four years improving the editing experience of Cloud IDEs.
image: cover_cloudIDE.jpg
tags: ['Company building']
subtitle:
teaserImage: cover_cloudIDE.jpg
title: From Theia to OpenVSCode Server - A history of Cloud IDEs
---

I am [Anton](https://github.com/akosyakov) and I am leading IDE development at Gitpod. Almost a decade ago, I joined [Sven Efftinge](https://twitter.com/svenefftinge) and the team to work on open-source developer tools and help companies around the world to adopt them. We learned the intricacies of different desktop IDEs (Eclipse, IntelliJ, VS Code) and web editors (Monaco, Ace, Orion, and CodeMirror) - and eventually ended up building Gitpod.

A big part of my journey was shaped by the editing experience of cloud-based developer environments and today I want to **share our decisions, underlying thought process, connection to VS Code and where we go from here - both as an industry and as a company.**

When we improved developer tooling for a San Francisco based client five years ago, we realized that the technology is now finally there to bring to the mainstream what Google, Facebook and several others already started years ago: moving software development to the cloud by providing fully automated and ephemeral developer environments.

> This recap is solely about the editing experience. This is important to stress because a big misconception in our ecosystem is that those remote, cloud-based developer environments are _web or online IDEs_. **While IDEs are an important building block, platforms such as Gitpod [are so much more](https://www.youtube.com/watch?v=svV-uE0Cdjk)**.
> Think orchestration, provisioning, operating system, databases, compilers and all other tools you require to be productive.

![Stackoverflow Survey 2021](/images/blog/cloud-ide-history/stackoverflow-ide.jpg)

## The promise of VS Code

To convince developers [to say goodbye to local development](/blog/i-said-goodbye-to-local-development-and-so-can-you), it is important to not reinvent the wheel but offer an editing experience that:

-   Is backed by a thriving community
-   Wins hearts and minds of developers
-   Works on modern web technology

This is VS Code. The team around Erich Gamma [struck the right balance between an editor and a full-blown IDE](/blog/the-evolution-of-devx#vs-code-takes-over---why-is-that) building a lean but powerful product that today is the world's most popular editing experience and will continue to rise in popularity. \*\*I want to take this as an opportunity to thank the whole VS Code team for their hard work - me personally and also everybody at Gitpod is very grateful for what you are doing for the developer community. When we started working on the idea around Gitpod there was however a problem.

&nbsp

![Theia Logo](/images/blog/cloud-ide-history/theia-ide.jpg)

## Why Theia?

Back in late 2017 VS Code could not run in a browser and was not (yet) refactored to support remote development. Because we wanted to offer a VS Code-like developer experience in Gitpod, we started the open-source project [Theia](https://theia-ide.org/) under the roof of the Eclipse Foundation. The idea was to use VS Code technology (i.e. Monaco editor, LSP, DAP protocols, Xterm.js) to implement a vendor-neutral, remote-first IDE framework accessible from both browser and desktop. The framework was widely adopted by companies such as Gitpod, Google, Ericsson, SAP, RedHat, ARM, Arduino, and several others. While we at Gitpod moved to VS Code in late 2020 (more on that below), today Theia powers online IDEs such as [Eclipse Che](https://www.eclipse.org/che/), [Stackblitz](https://stackblitz.com/), [Google Cloud Shell Editor](https://cloud.google.com/shell/docs/editor-overview), [Acquia Cloud IDE](https://www.acquia.com/products/drupal-cloud/cloud-ide) and several others.

&nbsp

![OpenVSX](/images/blog/cloud-ide-history/openvsx-ide.jpg)

## Why OpenVSX marketplace?

From the start the number one feature request for Theia was to support VS Code extensions out of the box. Building that required a steep learning curve as you need to understand the semantics behind all VS Code extensions APIs and port them to Theia. By early 2020, Theia was compatible with the most important APIs. It could securely run web views, apply themes, languages, and so on. There was one problem left: components that make VS Code as an application complete compared to the open source repository [Code - OSS](https://github.com/microsoft/vscode) are proprietary, including access to Microsoft services such as the VS Code extension marketplace. To fill that gap we built and released the [Open VSX marketplace](https://open-vsx.org/) as an open-source alternative, which we also donated to Eclipse. Today OpenVSX has almost extension parity for the most popular VS Code extensions and is used by Gitpod, [OpenVSCode Server](https://github.com/gitpod-io/openvscode-server/tree/web-server), [code-server](https://github.com/cdr/code-server), [Eclipse Che](https://www.eclipse.org/che/) and can be Self-Hosted on your own infrastructure.

&nbsp

![VS Code](/images/blog/cloud-ide-history/vscode-logo.jpg)

## VS Code refactoring for remote development

By 2020 the brilliant team behind VS Code added [remote support](https://code.visualstudio.com/docs/remote/remote-overview) and the web workbench ultimately powering [github.dev](https://github.dev/) was already open-sourced. However, they decided to not open-source the server implementing the remote protocol. In summer 2020, while porting a new VS Code file system API in Theia, I began to understand how the internal remote protocols are working and decided to build a quick prototype for a server implementation of stock VS Code. After 4 days of focused work we had a first [working version](https://github.com/gitpod-io/openvscode-server/commit/3f2a6da015cd9af62f61a0c55d81c5b124b9315d) at the beginning of September. There were still many missing pieces (auto-sync settings, port forwarding etc.), but it became clear that we can run stock VS Code in Gitpod.

&nbsp

![Gitpod](/images/blog/cloud-ide-history/gitpod-ide.jpg)

## Gitpod switches to VS Code

Gitpod is an open-source orchestration and provisioning platform for developer environments. The goal was always to open Gitpod to all IDEs as soon as they support remote development ([we are very excited about the work of our friends at Jetbrains!](https://youtrack.jetbrains.com/issue/IDEA-226455)). We built Theia because we initially had to. The architecture of VS Code just wasn't there when we started back in 2017. Theia is the closest we could get, to offer a VS Code-like experience in Gitpod. With the prototype we showed that we could drop "like'' and run actual VS Code in Gitpod.

I admit that it was a hard decision to stop supporting Theia after almost 4 years, but the maintenance and catch-up effort required to support the ever growing and changing API surface became increasingly a burden. And more importantly: Theia did not allow us to provide the best developer experience we could.

We spent the next months polishing the server implementation and added missing pieces such as the setting sync server and port tunneling via the local companion app. In December 2020 we started giving users the [choice between Theia and VS Code](/blog/root-docker-and-vscode#vs-code-and-other-ides) and officially switched to VS Code as the [default editing experience in Gitpod in early 2021](/blog/next-chapter-for-gitpod).

Since then a lot of individual developers as well as larger companies building internal developer platforms reached out and asked how we run the latest VS Code in a browser. As everything happened in public repositories it was no secret and we happily shared pointers to the GitHub URLs. But our server implementation still was bound to Gitpod services. For example, we had a custom remote terminal implementation while MS open-sourced its `pty` service. After the requests became more and more frequent we decided to separate concerns and provide a clean-cut between the server and parts which we add to integrate with Gitpod. [OpenVSCode Server](https://github.com/gitpod-io/openvscode-server/tree/main) was born.

## OpenVSCode Server

Honestly, we never expected to receive such a positive response and were impressed with the feedback even before our [launch announcement](/blog/openvscode-server-launch). Within several days we were joined by large companies such as GitLab, VMware, Uber, SAP, Sourcegraph, RStudio and SUSE. We went from 62 to more than 1.6k stars in a week and are working now with a vibrant community to further improve the project.

![OpenVSCodeServer](/images/blog/cloud-ide-history/openvscodeserver-stars.jpg)

As a positive side effect, we streamlined the server implementation and dropped some unnecessary complexity. By imposing constraints such as never changing Microsoft code, we enabled a straightforward, fully automated upgrade path. We run a nightly sync job which brings all upstream changes to our fork. After that, we run smoke and integration tests from [Code - OSS](https://github.com/microsoft/vscode) with some additional tests for Open VSX. `This enables us to release OpenVSCode Server the same day when Microsoft releases its version of VS Code.`

I hope this gives some context on the origin and scope of [OpenVSCode Server](https://github.com/gitpod-io/openvscode-server/tree/web-server). Right now we see a lot of feature requests such as adding settings sync, GitHub auth, tunneling, secure access. As the project’s scope is to keep the changes to upstream VS Code as minimal as possible we will not bloat the server, but (similar to upstream VS Code) use their extension model and external services to add missing functionality. Examples of that would be syncing VS Code settings via a VS Code extension connecting to the Gitpod server or providing guides explaining how to put the server behind SSH or a reverse proxy.

## Road ahead

As VS Code and cloud-based, remote development continue to grow in popularity, we hope to see the server-side implementation powering GitHub Codespaces being open-sourced in the upstream repository by Microsoft. Outside of VS Code, Jetbrains will give our whole ecosystem a big boost with their [remote development support](https://youtrack.jetbrains.com/issue/IDEA-226455#focus=Comments-27-5290105.0-0).

This means that more than 80% of the IDE market will have built-in functionality to connect to developer environments running in the cloud, while keeping the editing experience you are used to from your Desktop application. With Gitpod you can provision, automate and orchestrate those workloads for yourself and your team with the least friction possible. After four years it feels we are at a tipping point and I am excited about what comes next.
