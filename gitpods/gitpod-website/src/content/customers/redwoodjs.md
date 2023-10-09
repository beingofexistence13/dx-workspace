---
title: Building a community by removing friction to contribute
excerpt: RedwoodJS is the latest open source project of Tom Preston-Werner, the Founder and former CEO of GitHub. Gitpod removed the friction of building on and contributing to Redwood, helping to build an engaging community.
image: teaser.png
date: Thursday, 3 Feburary 2022 04:00:00 UTC
pageTitle: 'RedwoodJS case study: Building a community by removing friction'
pageDescription: RedwoodJS was founded by Tom Preston-Werner, the Founder and former CEO of GitHub. Gitpod removed the friction of contributing to RedwoodJS, growing the community.
keywords: open-source, community, redwoodJS, OSS
---

<script lang="ts">
	import CustomerHero from "$lib/components/customers/customer-hero.svelte";
	import CompanyBenefits from "$lib/components/customers/company-benefits.svelte";
	import Section from "$lib/components/section.svelte";
	import Story from "$lib/components/customers/story.svelte";
	import Quote from "$lib/components/quote.svelte";
  	import OpenGraph from "$lib/components/open-graph.svelte";
</script>

<OpenGraph
data={{
    description:
      "RedwoodJS was founded by Tom Preston-Werner, the Founder and former CEO of GitHub. Gitpod removed the friction of contributing to RedwoodJS, growing the community.",
    title: "RedwoodJS case study: Building a community by removing friction",
    keywords: "open-source, community, redwoodJS, OSS",
  }}
/>

<CustomerHero
title="Increasing Redwood's development velocity by removing the friction to&nbsp;contribute"
text="RedwoodJS is the latest open source project of Tom Preston-Werner, the Founder and former CEO of GitHub. Gitpod removed the friction of building on and contributing to Redwood, helping them to build an engaging community."
textMaxWClass="max-w-4xl"
logo={{
		src: "/images/customers/redwoodjs/logo.png",
		alt: "customer.io"
	}}
card={{
		image: "/images/customers/redwoodjs/teaser.png",
		details:{
			industry: "Open Source Software",
			plan: "Professional Open Source, SaaS",
			people: {
				title: "Contributors",
				text: "190+"
			},
			website: {
				href: "https://redwoodjs.com/",
				text: "redwoodjs.com",
			}
		}
	}}
/>

<CompanyBenefits
benefits={[
{
title: "275+",
text: "Contributors to RedwoodJS",
},
{
title: "+11k",
text: "Stars on GitHub",
},
{
title: "1 click",
text: "To spin up a fully functional test project",
}]}
/>

<Section>
	<Quote
		quote="Gitpod totally changed the development velocity for RedwoodJS — it removed any issues related to configurations of dev environments and made it incredibly easy to contribute."
		author={{
			name: "Tom Preston-Werner",
			jobTitle: "Founder of GitHub & Redwood, former CEO of GitHub",
		}}
	/>
</Section>

<Story bannerImg="/images/customers/redwoodjs/banner.png" text="How Gitpod increases Redwood’s development velocity by removing the friction to contribute (and how we got to talk to the GitHub founder and former CEO)">

<img src="/images/customers/redwoodjs/twitter-chat.jpg" alt="Twitter DM from Tom Preston-Werner about Gitpod" class="rounded-t-2xl"/>

Similar to developer experience, Open Source is part of Gitpod’s DNA. Not only is Gitpod an open source company, but our product is positioned to remove one of the biggest hurdles before developers can contribute to open source: setting up the developer environment.

## A match made in OSS heaven

Redwood is the latest open source project initiated by Tom Preston-Werner, co-founder and former CEO of GitHub. RedwoodJS is an opinionated, full-stack, serverless-ready web application framework that will allow you to build and deploy with ease.

As with any new open source project, the team around Tom Preston-Werner wanted to build RedwoodJS with the help of a growing community of engaged developers.

“From the very beginning, our goal was to build an engaging, dynamic open source community and we’re optimising for collaboration by design.”

Often the problem with building a community of contributors is the project setup friction. And since RedwoodJS is a framework, it required tedious manual steps when setting up the developer environment like linking the framework to a development application to explore changes made to the code.

To solve that and enable developers to contribute to the project with a single click, the RedwoodJS core team turned to Gitpod. Convinced by the idea, they described their configuration and startup tasks in a <code>[.gitpod.yml](https://github.com/redwoodjs/redwood/blob/main/.gitpod.yml)</code> file which is available to everyone publicly as it’s versioned in the Git repo along with the source code.

<img src="/images/customers/redwoodjs/comment.png" alt="Comment about Gitpod from RedwoodJS core team member" class="rounded-t-2xl md:max-w-md mx-auto" />

## Making it easy for the community to use RedwoodJS and contribute to it

As the configuration is on the repo level, it allows the community to spin up functional test projects with the click of a button that have been prebuilt ahead of time. Making it so much easier for the community to contribute and use the framework, RedwoodJS has over 11.000 stars and 190+ contributors to the project, at the time of writing.

> “We’re obsessed with developer experience. Gitpod allowed RedwoodJS to be accessible to contributors and the core team without any friction and made everyone more productive.”

At Gitpod we also created [contribute.dev](https://contribute.dev/), an initiative to discover open source projects like Redwood’s that describe their dev environment as code using Gitpod. This way users know that they can focus on core contributions rather than sacrificing time on developer environment configurations.

Redwood also integrated the “Open in Gitpod” button in their <code>[contributing.md](https://github.com/redwoodjs/redwood/blob/main/CONTRIBUTING.md#browser-based-development-setup)</code> and recorded a 3min Gitpod + RedwoodJS walk-through [video](https://www.youtube.com/watch?v=_kMuTW3x--s) to help contributors understand the alternative to a tedious setup on their local machine.

<img src="/images/customers/redwoodjs/about-gitpod.png" alt="About Gitpod" class="rounded-t-2xl" />

The team also frequently hosts workshops for anyone interested to contribute to the project. Having workshop participants start their developer environment in Gitpod makes sure the time is best used for explaining how to actually contribute rather than troubleshooting everyone’s setup.

> “It’s just brilliant and so simple to use.”

With more and more contributions coming in as Pull Requests, the maintainers of Redwood benefit from efficient multitrack development every day. Being able to open a fully prebuilt and context aware workspace for reviewing a PR in parallel, allows them to continue with their work instantly after approving the PR. It also helps unblocking others greatly and speeds up developer velocity.

> Reviewing pull requests is delightful because they are prebuilt and ready for review!”

The team at Gitpod is proud to support the open source community and projects through our product. We’re doing everything we can to streamline the experience for contributors to develop open source projects. We launched [Gitpod for Open Source](/discover/opensource) to let open source contributors use Gitpod without usage limits on any public repository. We’ve also launched an Open Source Sustainability Fund [[1](/blog/gitpod-open-source-sustainability-fund)] with an initial investment of USD 30.000 and give our employees the chance to donate $1.500USD to open source projects of their choice for successful referrals of new hires.

We’re thankful for the collaboration with Redwood and the interview with Tom Preston-Werner and team that led to this case study.

</Story>
