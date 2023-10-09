---
title: Scaling from 3 to 45 engineers in 5 months
excerpt: Gitpod helped engineers at Shares.io become more productive and focused. It cut the onboarding process for new hires down to 10 minutes. Gitpod also removed any friction in dev environment management and  day to day collaboration, saving every engineer half a day per week.
image: teaser.png
date: Thursday, 3 February 2022 06:00:00 UTC
pageTitle: 'Shares.io case study: Scaling from 3 to 45 engineers'
pageDescription: Scaling from 3 to 45 engineers in 5 months on the back of Gitpod. Cutting onboarding times to 10 minutes. Saving half a day per engineer / week.
keywords: DevX, velocity, growth, onboarding, shares.io
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
      "Scaling from 3 to 45 engineers in 5 months on the back of Gitpod. Cutting onboarding times to 10 minutes. Saving half a day per engineer / week.",
    title: "Shares.io case study: Scaling from 3 to 45 engineers",
    keywords: "DevX, velocity, growth, onboarding, shares.io",
  }}
/>

<CustomerHero
title="Scaling from 3 to 45 engineers in 5 months on the back of Gitpod"
text="Gitpod helped engineers at Shares.io become more productive and focused. It removed any friction in the onboarding process, dev environment management and the day to day collaboration."
logo={{
		src: "/svg/customers/shares-io.svg",
		alt: "shares.io"
	}}
card={{
		image: "/images/customers/shares-io/teaser.png",
		details:{
			industry: "Finance",
			plan: "Organization, SaaS",
			people: {
				title: "Engineers",
				text: "45+"
			},
			website: {
				href: "https://shares.io/",
				text: "shares.io",
			}
		}
	}}
/>

<CompanyBenefits
benefits={[
{
title: "10min",
text: "Onboarding time for new hires",
},
{
title: "0.5 days",
text: "saved per engineer / week",
},
{
title: "100%",
text: "of engineers develop w/ Gitpod",
}]}
/>

<Section>
	<Quote
		quote="Gitpod has been instrumental to our ability to scale&nbsp;so&nbsp;quickly."
		author={{
			name: "François Ruty",
			jobTitle: "CTO at Shares.io",
		}}
	/>
</Section>

<Story bannerImg="/images/customers/shares-io/banner.png" text="Scaling from 3 to 45 engineers in 5 months on the back of Gitpod">

Shares App is a community-powered investment platform where investors come to make trades, discuss opportunities with friends, discover new communities and get digestible investing insights while building long-term financial health – together.

Last year, the team around CTO and co-founder François Ruty [raised $10m](https://techcrunch.com/2021/08/25/shares-is-a-new-stock-trading-app-with-a-focus-on-social-features/) from world famous investors like Peter Thiel. François was looking to set up an engineering org with great developer experience and velocity to attract the best talent, onboard them quickly and build a stellar product. The team was only three engineers when Gitpod was introduced, and in less than a year, they grew to 45 engineers with plans to reach 80 engineers in 2022. The whole engineering team is using Gitpod as their only solution to develop.

## The Challenge: Inconsistencies and too much friction

A local dev environment was never an option, given the drive for efficiency. François also knew that the company needed to hire many engineers quickly to build the product. Onboarding of new hires needs to be as frictionless as possible, and setting up developer environments should not stand in the way. “I was always aware of the importance of standardizing dev environments as much as possible. So we started out with Docker Compose, but it quickly turned out not to be sufficient for us”.
The setup was not frictionless, as engineers needed to understand how to spin up the containers and get an understanding of how they work to do so.

On top of that, engineers were often blocked by peculiarities introduced by operating system differences. One issue led the hot reload in Typescript to take up to 1 minute until changes were reflected. “You’re out of the cognitive loop and simply can’t work effectively”. These turning points led François to explore cloud based development environments and to take a look at Gitpod.

> “Gitpod is so easy to use, I didn’t need to talk to a representative; I just went to the website, clicked “get started” and knew immediately that was what we needed.”

## Standardized, ephemeral developer environments for the whole team

The main goal of Shares.io was to create an engineering org that can focus on core product development as much as possible without distractions. For Shares.io, the key arguments for Gitpod were that you can spin up pre-configured, automated dev environments that are versioned along with the code in Git and the concept of Ephemerality. François describes it as changes to the developer environments of the whole team only being one pull request away.

> “This is how software development should be done. I shouldn’t even spend one minute of my day investigating my dev environment.”

The concept of Ephemerality immediately clicked with him as it prevents configuration drift through stateful dev environments. Each time a new workspace is started, it has the tools it needs and the latest code from the default branch already checked out.

> “Configuration drift is a plague, you think you’re cleaning up behind you, but you’re not. You work on some tasks, you check out some branches and catastrophe is bound to happen at some point.“

Rather than frequent, very individual problems with local dev environment configurations that are hard to pin down, any problem connected to the dev environments with Gitpod is more systematic and
thus easy to identify. As the whole team is kind of incentivized to fix it, there is no way that a problem with the dev environment can last longer than 15 minutes, says François Ruty.

> “Nobody likes to debug a dev environment; it just doesn’t create any&nbsp;value.”

## Onboarding new engineers in 10 minutes rather than a full day

The way Gitpod works allowed Shares.io to have very lean and fast onboarding processes for new hires. Rather than having to understand and set up all components upfront, engineers can launch a production-like environment with a single click and explore the different parts of the system at their own pace. “It turns onboarding into an interactive discovery where engineers can look at the code, the running processes, the terminals and ask questions based on that. It decreased the time to get new hires up and running from one full day to only 10 minutes.”

> “Gitpod has been instrumental to our ability to scale so&nbsp;quickly.“

On the back of Gitpod, Shares.io has scaled from three engineers to more than 45 in less than 5 months. Their goal is to grow to 80 engineers within 2022 quickly.

## Ongoing productivity gains are the true magic

François points out that it’s not just the time savings from the dev environment set up during onboarding, but rather the day to day efficiency gains through using an ephemeral remote development solution that makes the real difference.

> “Gitpod easily saves every engineer half a day per week. The amount of productivity we gain is&nbsp;staggering.”

François explains that the ability to spin up new workspaces in different contexts allows them to parallelize development. This helps to unblock each other, review PRs and move on with their tasks swiftly. All that while they stay focused, without making changes to the configurations. This greatly increases the development velocity and also the ability to rapidly deploy a production hotfix by spinning up a dev environment out of a release branch. Prebuilds accelerate all this and “put a lot of grease in the wheels” as the wait time is reduced since dependencies have been installed and builds ran even before a workspace in a new context is started.

All engineers at Shares.io are using Gitpod as a default way of development, and every future hire will embark on the same journey. We’re thankful for the collaboration with Shares and for the interview with François Ruty that led to this case study.

</Story>
