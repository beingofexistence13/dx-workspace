---
author: pawlean
date: Thu, 26 Aug 2021 11:00:00 UTC
excerpt: For our second edition of DevX Digest, we talk about moving software development to the cloud.
image: teaser.jpg
subtitle:
teaserImage: teaser.jpg
title: DevX Digest 02 - The rise of ephemeral developer environments ✨
tags: ['Developer experience']
type: digest
---

**Welcome to DevX Digest - the place to hear all about Developer Experience**, brought to you by Pauline Narvas [(@paulienuh)](https://twitter.com/paulienuh) and Mike Nikles [(@mikenikles)](https://twitter.com/mikenikles) from Gitpod. You're reading another newsletter from us 🎉! In this edition, we talk about developer experience in cloud-based,ephemeral dev environments.

> Disclaimer: Gitpod is mentioned quite a bit here. Apologies in advance for the product placement -- we promise that the next 10 editions won't be about our product! But we were super excited to share our take on ephemeral developer environments, especially with the excitement recently in the developer community.

## The move to the Cloud ☁️

Let’s name the 🐘 in the room: GitHub announced the release of CodeSpaces to Team and Enterprise Cloud plans recently. This generated quite some buzz online, with many asking how moving our developer environments to the cloud would benefit us.

### Painting the picture: our local developer environment

The reality for most developers is this: a local developer environment that is difficult to set up and maintain and eats up productivity significantly.

Think about your current workflow when getting started to code. What do you need to do?

-   Clone source code
-   Install runtimes & dependencies
-   Ensure these are the correct versions
-   Set up any tooling

And then you can finally start coding! 😅

But in the familiar situation of reviewing a colleague's features and hotfixes for production, we are again going through a similar list of steps that we must do before we can even START the review.

-   Stash our current changes
-   Switch branches
-   Potentially install new runtimes or upgrade dependencies
-   And then, we can finally review the change. 😰
-   Once we're done with the review, we have to switch back to our branch to continue coding.
-   Ensure that we return to our previous state to continue working.

There is so much friction for developers when there shouldn't be. Ideally, all we really wanted to do is look at the code, run it and approve the PR. Ephemeral developer environments can do this, ensuring that you're always ready to code.

### Consider an ephemeral developer environment

> "Treat your infrastructure as cattle, not pets"

...is the saying often used in the DevOps world. The value of describing infrastructure as repeatable code became apparent and reaped many benefits: no more dreaded configuration drift, consistent infrastructure and many automation possibilities!

Bringing that peace of mind to developer environments makes sense and is already possible. For instance, a single `.gitpod.yml` file is used to describe your dev environment, including what dependencies and start-up commands are needed to get you to the position where you can start coding.

Your dev environment then becomes ephemeral. Gitpod continuously builds all your Git branches like a CI server. You have a new, consistent environment for every single task, and once you're done with a workspace, you can close it and start another super quickly because it has already been prebuilt.

Ephemeral developer environments reduce friction and improve developer experience massively - let us demonstrate that with specific workflows in more detail.

### Workflow #1: Onboarding 💼

Think back to when you were first onboarding to a new company. Onboarding has been normalised as a slow process with common issues related to outdated information, unique issues, _"that's strange, it works on my machine"_ scenarios. Over the years, we've just accepted it and hold on to the fact that once your local dev environment is eventually set up, you'll never have to go through the pain again.

Until you do because you have a new laptop, a new engineer comes along or external developers and experts join your project and experience that same pain.

There is no hiding that our local developer environments are fragile. This fact can cause new engineers onboarding to your new codebase to feel frustrated and overwhelmed.

Ephemeral dev environments can improve this: **no more local developer environments mean that it will always work on your machine, no matter what machine you have.** You can quickly access your whole environment in a browser that new engineers can easily jump right into.

### Workflow #2: Developing a Feature 🛠

The uphill battle of developing a new feature locally, does not happen in cloud developer environments. It’s no longer such an energy-inducing task!

Instead of creating a new feature branch, pulling the latest code, fixing errors related to dependencies or runtime versions, then finally starting a dev server and database, you can start developing straight away with literally a click of a button or prefixing a repo with `https://gitpod.io/#`

This creates a fresh workspace with a feature branch already created, dependencies installed, dev servers ready to go. The most important part of developing a feature is developing the feature, so why waste any more time on anything else?

### Workflow #3: Reviewing a PR ✅

As we described above, reviewing a PR is no easy feat either in local dev environments.

With an ephemeral dev environment, they load instantly because the environment has already been prebuilt, therefore enabling you to do what is important: reviewing the PR and getting on with your day.

### Workflow #4: Helping another team with some code 🐞

Another familiar workflow is when you want to help another team or colleague with their code.

In the local dev environment world, you have to go through the pain of stashing your current changes and switching branches. You may even have removed a dependency or two as part of your change, so you have to reinstall it for your colleague’s branch. Only until you’ve done that is when you’re ready to help.

After you've done your part, you have to switch back and spend some additional time to return to the state your environment was in before.

With ephemeral dev environments, all you have to do is start a new workspace with the context of your colleague's branch. Your dev server is ready, your code prepared, your dependencies are all there, and you guessed it…you’re ready! Within VS Code in Gitpod, you can also leave comments directly on the code _(which syncs seamlessly with GitHub.)_

Done with that? You can confidently close that workspace and open up a new one with the context of your branch. Everything is ready to go.

### Workflow #5: Checking out an Open Source Project to help with 🤝

Want to contribute to an open-source project?

The friction that comes with onboarding to open-source projects can cause eager contributors to lose their interest quickly. Trying to get themselves set up is almost not even worth the pain!

Onboarding is easy with ephemeral environments, as we described in [workflow #1.](#workflow-1-onboarding) You have a one-click button accessible from anywhere that allows those eager contributors to get started instantly. Win for everyone!

![Running Prometheus using our local companion app on Gitpod](/images/blog/ephemeral-dev-envs/screenshot.png)
_Look at us running [Prometheus](https://github.com/prometheus/prometheus) on Gitpod using our [Local Companion App!](/blog/local-app)_

## Are ephemeral, cloud developer environments the future?

Gitpod and GitHub Codespaces are leading the way in this new future -- one where friction is removed from the developer experience, so that developers are always ready-to-code.

We’d be interested to hear your thoughts, would you switch to a cloud developer environment? Why, or why not?

### Join us for the ride!

We hope to highlight DevX further and bring to you curated content about what truly makes for great developer experiences!

### DevX newsletter is community-driven

Another thing about Gitpodders is that we're all driven by community feedback, and this newsletter is no exception! Please send us your thoughts, feedback and help us drive this conversation. We may even feature some of your takes and comments in future newsletters!

Come and hang out with us over on [our Discord channel](https://gitpod.io/chat).
