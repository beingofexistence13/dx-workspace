---
author: JohannesLandgraf
date: Tue, 29 Aug 2023  14:00:00 UTC
excerpt: For over five years, Gitpod has been dedicated to building this category. This is our perspective on the problem, the opportunity (cost) and the promise of CDEs.
tags: ['Company building', 'Developer experience']
image: teaserMain.webp
teaserImage: teaser.webp
title: Gartner predicts that 60% of cloud workloads will be built and deployed using CDEs
---

<script>
  import Quotes from "$lib/components/blog/cde-quotes.svelte";
  import Download from "$lib/components/whitepaper/cloud-dev-environments/download.svelte";
  import Wrapper from "$lib/components/webinars/wrapper.svelte";
</script>

**TL;DR**:

-   Creating software faster and more securely is a top priority for engineering leadership.
-   Inconsistent development environments waste hours every day and limit creativity, collaboration, and flow. For every 100 engineers, an average organization loses 8% of engineering capacity, equating to opportunity cost of $912,000 annually.
-   CDEs are the next logical step in automating the software development lifecycle. Their four principles - on-demand, consistent, extensible, and equitable - shape this promise.

Software runs today's world, and all companies, regardless of size or sector, rely on it. Business performance is closely linked to developer experience, speed and efficiency. McKinsey found that [the top 25% of companies in developer velocity outperform the market by four to five times](https://www.mckinsey.com/industries/technology-media-and-telecommunications/our-insights/developer-velocity-how-software-excellence-fuels-business-performance). Gartner revealed that [58% of software engineering leaders believe that the C-suite considers developer experience critical](https://www.gartner.com/en/newsroom/press-releases/2023-04-24-gartner-survey-finds-the-need-to-improve-developer-experience-is-driving-software-engineering-technology-adoption). Empowering developers with the right tools to create software faster and more securely is a top priority for engineering leaders, and is closely monitored by C-level executives.

In a high interest rate environment, removing friction and maximizing engineers' productivity is crucial. However, many engineering teams still rely on inconsistent and manual development environments, wasting valuable time on inefficient tools that hinder creativity, collaboration, and productivity. Cloud Development Environments (CDEs) address these issues and are becoming a critical tool for platform teams.

<img src="/images/blog/gartner-2023-cde-hypecycle/cde-definition.webp" alt="Cloud Development Environment - CDE Definiton" class="hidden md:block my-4 w-11/12"/>

<img src="/images/blog/gartner-2023-cde-hypecycle/cde-definition-mobile.webp" alt="Cloud Development Environment - CDE Definiton" class="block md:hidden my-3"/>

Gartner forecasts that, by 2026, CDEs will be used to build and deploy 60% of cloud workloads, labeling them as crucial for enabling widespread cloud usage in their [2023 Emerging Technologies Hype Cycle](https://www.gartner.com/en/newsroom/press-releases/2023-08-16-gartner-places-generative-ai-on-the-peak-of-inflated-expectations-on-the-2023-hype-cycle-for-emerging-technologies). Redmonk, a leading developer tools analyst firm, coined 2023 as "[The Year of the Cloud Development Environment](https://redmonk.com/jgovernor/2022/12/01/the-year-of-the-cloud-development-environment/)". Additionally, Gergely Orosz, author of 'The Pragmatic Engineer', the #1 technology newsletter on Substack, conducted an [extensive analysis of CDEs in June 2023](https://newsletter.pragmaticengineer.com/p/cloud-development-environments) examining their implementation and adoption at Uber, Pipedrive, and Slack. At Gitpod, we organized '[CDE Universe](https://cdeuniverse.com/)' in San Francisco in June, featuring discussions from Stripe, Slack, Uber, Shopify, and others.

For over five years, Gitpod has been dedicated to building this category, and it's exciting to see conversations quickly evolve from 'why' we are doing this to 'how' we are doing it.

This is our perspective.

## The problem

Development environments are flawed, limiting creativity, collaboration and flow. They are hard to control, need constant upkeep, hinder onboarding, and are vulnerable to software supply chain attacks. This results in frustrated engineering teams and puts your organization at jeopardy, impacting revenue, costs, and overall risk.

Despite the lessons learned from Infrastructure as Code (IaC), we continue to treat our development environments more like pets than cattle. Key challenges faced by engineering teams include:

-   Time-consuming setup and costly context-switches
-   Development environment drift within teams (‘works on my machine’ issue)
-   Broken pipelines caused by environment drift between development, CI, and production
-   Difficulties in reproducing issues across inconsistent and hard to replicate environments
-   Applications that are too large, complex or requiring of specific hardware to run locally
-   Dependency management problems (out-of-date or incorrect environment state)
-   Increased costs from resource mismanagement
-   Security vulnerabilities in supply chain (missed security patches or updates)

## The opportunity (cost)

During a [recent talk](https://www.youtube.com/watch?v=NvmjM7U4rgs) at The Long Night of JetBrains, I conducted a live survey to measure the efficiency loss engineering teams face due to development environments. The results showed that developers spend, on average, over 2 hours weekly managing and troubleshooting their development environments.

This not only affects developers but also translates to significant financial costs for companies with sizable engineering teams. Based on [rough estimates](https://www.linkedin.com/posts/johanneslandgraf_development-environments-are-broken-the-activity-7079816892957216769-bkyu), for every 100 engineers, an average organization loses 8% of engineering capacity, equating to $912,000 annually. Consequently, businesses face substantial productivity losses, delayed features, missed revenue opportunities, and decreased employee satisfaction.

However, this situation can be improved. Kent Beck, an original signer of the Agile Manifesto, views [Cloud Development Environments as a means to reclaim the ‘tens of percent’ of working time spent managing development environments](https://medium.com/@kentbeck_7670/cloud-development-environments-tame-complexity-by-reducing-state-4a154ea7959f).

In the current economy, where every organization aims to maximize efficiency with minimal resources, CDEs offer a quick and effective solution.

## The promise

Cloud Development Environments (CDEs) are designed to enhance the developer experience, modularity, and control in modern engineering organizations. Their four principles - on-demand, consistent, extensible, and equitable - shape this promise.

<img src="/images/blog/gartner-2023-cde-hypecycle/cde-principles.webp" alt="Cloud Development Environment - CDE Principles" class="hidden md:block my-4 w-11/12"/>

<img src="/images/blog/gartner-2023-cde-hypecycle/cde-principles-mobile.webp" alt="Cloud Development Environment - CDE Principles" class="block md:hidden my-3"/>

-   **On-demand**: CDEs are as accessible as using Google Docs, available instantly when inspiration strikes. Developers can run the most expansive development workflows in multiple environments for the same codebase simultaneously without conflict, thanks to the cloud's scalability and elasticity.

-   **Consistent**: CDEs are automatically created anew for each task, ensuring alignment between code and development environments. This consistency, achieved without manual intervention, reduces the risk of supply chain attacks and shortens attack windows.

-   **Extensible**: CDEs allow teams to integrate, customize, automate, and optimize their development experience. They fit into existing tooling and infrastructure, enabling complex orchestration, configuration, and connectivity of dev dependencies.

-   **Equitable**: CDEs remove barriers to collaboration and experimentation with code, projects, and repositories. With no setup effort or risk of breaking ephemeral environments, mistakes are less costly. This enables all team members, from data scientists to designers, to see work in progress and preview changes live.

## The guide

If you want to learn more I encourage you to explore the evolving world of CDEs, their business implications and return on investment (ROI) in our regularly updated guide. It outlines why top engineering organizations and platform teams are rapidly adopting CDEs, and how they can enhance your development process for efficiency, security, and collaboration.

If it helps your evaluation of CDEs for your organization, reach out. We are here to empower you for those discussions.

<Wrapper class="mt-x-small md:mt-small px-xx-small py-x-small sm:p-x-small xl:px-small xl:py-x-small !mx-auto">
<Download class="mx-auto lg:m-0"
      toType="cde-whitepaper"
      eventType="guide for Cloud Development Environments"
/>
</Wrapper>
