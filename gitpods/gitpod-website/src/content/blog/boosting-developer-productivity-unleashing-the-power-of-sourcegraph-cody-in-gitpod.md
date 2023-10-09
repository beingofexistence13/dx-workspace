---
author: Siddhant-K-code, pawlean
date: 19 June 2023 00:00:00 UTC
excerpt: Sourcegraph Cody, a cutting-edge AI coding assistant, and Gitpod, come together to provide developers with a seamless and highly efficient coding experience. By integrating Sourcegraph Cody into Gitpod, developers can unlock many intelligent code completion features, advanced code search capabilities, and context-specific suggestions, all within their development environment.
tags: ['Engineering', 'Developer experience']
image: teaser.webp
teaserImage: teaser.webp
title: 'Boosting Developer Productivity: Unleashing the Power of Sourcegraph Cody in Gitpod'
---

## Understanding Sourcegraph Cody:

Sourcegraph Cody is an open source LLM-enhanced AI coding assistant that leverages the power of Sourcegraph's code intelligence capabilities. It provides developers with a comprehensive overview of their codebase, enabling them to navigate and explore code seamlessly. With its advanced search functionality, developers can find references, definitions, and usages of symbols across the entire codebase. Cody also offers rich contextual information, such as documentation, examples, and usage patterns, empowering developers to comprehend code quickly and effectively.

## The Power of Integration:

When Sourcegraph Cody is integrated with Gitpod, it unlocks a multitude of productivity-enhancing features for developers. Let's dive into some of the key benefits this integration offers:

-   **Seamless Code Navigation**: By integrating Cody with Gitpod, developers can effortlessly navigate their codebase without switching contexts. They can click on symbols, functions, or variables within their code, and Cody will provide instant information about definitions, references, and usages. This powerful navigation capability saves developers time and effort in understanding complex codebases and exploring unfamiliar code.

-   **Contextual Documentation and Examples**: Cody augments code navigation with contextual documentation and examples. When exploring code in Gitpod, developers can access rich documentation and code examples associated with specific symbols. This enables them to understand the purpose and usage of different components, accelerating the learning process and reducing the time spent on code comprehension.

-   **Smarter Code Search**: Searching for specific code snippets or references within a large codebase can be time-consuming. However, with Sourcegraph Cody integrated into Gitpod, developers can perform intelligent code searches with ease. Cody's search capabilities allow developers to find symbols, definitions, and references across the entire codebase. The integration also provides advanced filters and search operators to refine search queries, making it easier to locate relevant code snippets and patterns.

-   **Cross-Repository Code Insights**: Gitpod and Sourcegraph Cody integration enable developers to explore code not only within a single repository but also across multiple repositories. This means developers can gain valuable insights into shared libraries, dependencies, and other code components used in their projects. By analyzing code usage patterns and dependencies, developers can make informed decisions, refactor code, and ensure optimal code reuse.

-   **Enhanced Collaboration**: Collaboration is a crucial aspect of software development, especially in distributed teams. The integration of Sourcegraph Cody with Gitpod facilitates seamless collaboration by providing a consistent code understanding across team members. Developers can share code snippets with contextual information, making it easier for teammates to understand and contribute to ongoing projects. This collaboration-friendly environment fosters efficient knowledge sharing, ultimately enhancing team productivity.

## How teams can improve onboarding with Cody

Onboarding new developers can be a challenging process, especially when they need to familiarize themselves with complex codebases and various components of a project. But, Cody and Gitpod can significantly simplify and enhance the onboarding experience for new team members.

-   **Repository Context-based search**: Launch the Gitpod Cloud Development Environment ([CDE](/cde)) and ensure that the required codebase is accessible within your Gitpod workspace. With your configured project-specific `.gitpod.yml` file. Gitpod provides a pre-configured development environment with all the necessary dependencies and tools, making it easy to dive into the codebase. Cody provides you with the Context-based search (ie. responses would be based on Repository & not generalized to the whole internet)
-   **Providing Contextual Documentation**: When onboarding new developers, it's essential to provide them with comprehensive documentation about the project's features, services, and components. With Cody integrated into Gitpod, you can take advantage of its contextual documentation capabilities. Developers can simply click on a symbol or function within the codebase, and Cody will provide relevant documentation, examples, and usage patterns associated with that particular component. This allows new developers to quickly understand the purpose and usage of different features and components, reducing the learning curve.
-   **Exploring Codebase**: Onboarding involves getting familiar with the codebase and understanding how different services and components interact. With Cody in Gitpod, new developers can navigate the codebase seamlessly by clicking on symbols and exploring definitions, references, and usages. They can gain insights into how different parts of the codebase are connected, improving their understanding of the project's architecture.
-   **Learning Specific Features/Services/Components**: During onboarding, developers often need to understand specific features, services, or components in detail. Cody in Gitpod allows developers to focus on a particular feature or component by searching for relevant symbols or functions. By using Cody's search capabilities, developers can find code snippets, definitions, and references related to the specific feature they are trying to understand. This targeted exploration helps them grasp the intricacies of the codebase more effectively.
-   **Collaborate and Share Insights**: As you gain insights and knowledge about the specific feature, service, or component, you can share your findings with teammates. You can use Gitpod's collaboration feature to share your Gitpod workspace and can collaborate in the same workspace with your other teammates.

## Get Started Now

Open your GitHub/GitLab/Bitbucket Repository in Gitpod workspace, then you just need to install Sourcegraph Cody VS Code Extension and you are good to go!

<img width="60%" src="/images/blog/boosting-developer-productivity-unleashing-the-power-of-sourcegraph-cody-in-gitpod/cody-vscode-extension.webp" alt="Sourcegraph Cody VS Code Extension"/>

## Working Demo

We'll be using [openfga/openfga repository](https://github.com/openfga/openfga) for the demo. It wasn’t indexed, primarily, and you can quickly index any Public Repository via their discord & So do we.
You would need to quickly index any public repository via Sourcegraph's Discord.

<img width="60%" alt="Index Public Repository using Sourcegraph Discord bot" src="/images/blog/boosting-developer-productivity-unleashing-the-power-of-sourcegraph-cody-in-gitpod/index-repo-via-discord-bot.webp"/>

<br/>

### Understanding the Repository & Codebase 🧑‍🏫

The first question, We asked Cody is the _TLDR_ for this repository.

<figure>
<img class="shadow-medium w-10/12 max-h-min rounded-lg mt-x-small" alt="Sourcegraph Cody Result for Give me a TLDR for this openFGA repository" src="/images/blog/boosting-developer-productivity-unleashing-the-power-of-sourcegraph-cody-in-gitpod/tldr.webp">
    <figcaption><i>Prompt:</i> Give me a TLDR for this openFGA repository</figcaption>
</figure>

A I'm new to this repository, I wanted to explore how it actually works. How do their check systems work? Where can I find some related code occurrences for that?

<figure>
<img class="shadow-medium w-10/12 rounded-lg mt-x-small" alt="Sourcegraph Cody Result for How does the resource access check services in this project & where can i find the code related to it?" src="/images/blog/boosting-developer-productivity-unleashing-the-power-of-sourcegraph-cody-in-gitpod/how-does-check-work.webp">
    <figcaption><i>Prompt:</i> How does the resource access check services in this project & where can i find the code related to it?</figcaption>
</figure>

<figure>
<img class="shadow-medium w-10/12 rounded-lg mt-x-small" alt="Sourcegraph Cody Result for How does check resource service works? show me some code occurrences" src="/images/blog/boosting-developer-productivity-unleashing-the-power-of-sourcegraph-cody-in-gitpod/related-code-files.webp">
    <figcaption><i>Prompt:</i> How does check resource service works? show me some code occurrences</figcaption>
</figure>

Once it returned the files suggested, I wanted to know more about specific functions in the code. Cody helped return some high-level descriptions of the code!

<figure>
<a href="/images/blog/boosting-developer-productivity-unleashing-the-power-of-sourcegraph-cody-in-gitpod/explain-code.webp" target="_blank">
<img class="shadow-medium w-full rounded-lg mt-x-small cursor-zoom-in" alt="Sourcegraph Cody Result for Explain Selected code" src="/images/blog/boosting-developer-productivity-unleashing-the-power-of-sourcegraph-cody-in-gitpod/explain-code.webp"/></a>
    <figcaption>Selected chunk of code with Cody's Recipe of "Explain selected code (high level)"</figcaption>
</figure>

### Get Contextual Documentation for Codebase 📑

There are hardly any docs in this particular code file, as engineers I'm sure we can be related sometimes. I asked Cody to generate some docs for this code.

<figure>
<a href="/images/blog/boosting-developer-productivity-unleashing-the-power-of-sourcegraph-cody-in-gitpod/generate-docs.webp" target="_blank">
<img class="shadow-medium w-full rounded-lg mt-x-small cursor-zoom-in" alt="Sourcegraph Cody Result for Generate Docs" src="/images/blog/boosting-developer-productivity-unleashing-the-power-of-sourcegraph-cody-in-gitpod/generate-docs.webp"/></a>
    <figcaption>Selected chunk of code with Cody's Recipe of "Generate Docs"</figcaption>
</figure>

After asking a few questions, I trusted Cody to try and write the whole onboarding guide which was good but still required some polishing up.

<figure>
<img class="shadow-medium w-10/12 rounded-lg mt-x-small" alt="Sourcegraph Cody Result for Ahh! Thanks a lot. Can you please write the Developer onboarding guide for the project?" src="/images/blog/boosting-developer-productivity-unleashing-the-power-of-sourcegraph-cody-in-gitpod/write-onboarding-guide.webp">
    <figcaption><i>Prompt:</i> Ahh! Thanks a lot. Can you please write the Developer onboarding guide for the project? 🫠</figcaption>
</figure>

### Context-based Repository Search 📚

Cody can be helpful when you don't necessarily want to go through thousands of files in a large monolithic architecture repo for example. We can get an answer for this directly via a context-based repository search.

<figure>
<img class="shadow-medium w-10/12 rounded-lg mt-x-small" alt="Sourcegraph Cody Result for What CI system does they use? in context of OpenFGA Repository" src="/images/blog/boosting-developer-productivity-unleashing-the-power-of-sourcegraph-cody-in-gitpod/ci-system.webp">
    <figcaption><i>Prompt:</i> What CI system does they use?</figcaption>
</figure>

### Gitpodify your project using Cody 🚀

Now, Let's try [Gitpodifying the project](https://www.gitpod.io/guides/gitpodify) using Cody! The results aren't perfect, but it's a good first step.

<img class="shadow-medium w-10/12 rounded-b-lg" alt="Gitpodify Projects using Sourcegraph Cody" src="/images/blog/boosting-developer-productivity-unleashing-the-power-of-sourcegraph-cody-in-gitpod/write-gitpod-yml-file1.webp">

<figure>
<img class="shadow-medium w-10/12 rounded-b-lg" alt="Sourcegraph Cody Result for Can you help me writing a gitpodyml file for this? in context of OpenFGA Repository" src="/images/blog/boosting-developer-productivity-unleashing-the-power-of-sourcegraph-cody-in-gitpod/write-gitpod-yml-file2.webp">
    <figcaption><i>Prompt:</i> Can you help me writing a gitpodyml file for this?</figcaption>
</figure>

### Catchup with Codebase changes after vacation 🏖️

Were you on vacation and wanted to get a quick overview of all the updates you missed? Cody can help!

<figure>
<img class="shadow-medium w-10/12 rounded-b-lg" alt="Sourcegraph Cody Result for Summarize recent code changes" src="/images/blog/boosting-developer-productivity-unleashing-the-power-of-sourcegraph-cody-in-gitpod/summary-of-recent-code-changes.webp">
    <figcaption><i>With Cody Recipe "Summarize recent code changes"</figcaption>
</figure>

As we demonstrated in this post, there are countless ways in which you can leverage Cody to boost your team's productivity.

If you have any questions about configuring and running your project, drop by [Gitpod's community Discord](https://www.gitpod.io/chat) or [Sourcegraph's community Discord](https://discord.com/servers/sourcegraph-969688426372825169)! We would love to hear your feedback in the Community.

## Resources and Further Reading

-   [More about Sourcegraph Cody](https://about.sourcegraph.com/cody).
-   [More about Gitpod Dedicated](https://www.gitpod.io/dedicated) - Private Gitpod for teams
-   [More about Cody for Orgs](https://about.sourcegraph.com/cody#contact-form)
-   Gitpod guide: Configure your Projects for a seamless developer experience.
