---
title: Quizlet increased developer satisfaction by 45 percentage points using Gitpod
excerpt: Quizlet started using Gitpod due to CPU compatibility issues. Six months in, Quizlet improved internal developer satisfaction by 45 percentage points reporting reduced incidents with broken development environments and improved collaboration.
image: teaser.png
date: Friday, 10 Feb 2023 06:00:00 UTC
pageTitle: 'Quizlet increased developer satisfaction by 45 percentage points using Gitpod'
pageDescription: Quizlet started using Gitpod due to CPU compatibility issues. Six months in, Quizlet improved internal developer satisfaction by 45 percentage points reporting reduced incidents with broken development environments and improved collaboration.
keywords: CDE, cloud dev environment, DevX, velocity, growth, education, quizlet
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
      "Quizlet started using Gitpod due to CPU compatibility issues. Six months in, Quizlet improved internal developer satisfaction by 45 percentage points reporting reduced incidents with broken development environments and improved collaboration.",
    title: "Quizlet increased developer satisfaction by 45 percentage points using Gitpod",
    keywords: "CDE, cloud dev environment, DevX, velocity, growth, education, quizlet",
  }}
/>

<CustomerHero
title="Quizlet increased developer satisfaction by 45 percentage points using Gitpod"
text="Quizlet started using Gitpod due to CPU compatibility issues. Six months in, Quizlet improved internal developer satisfaction by 45 percentage points reporting reduced incidents with broken development environments and improved collaboration."
card={{
		image: "/images/customers/quizlet/teaser.png",
		details:{
			industry: "Education",
			plan: "Enterprise",
			people: {
				title: "Engineers",
				text: "85"
			},
			website: {
				href: "https://quizlet.com/",
				text: "Quizlet",
			}
		}
	}}
/>

<CompanyBenefits
benefits={[
{
title: "45pt",
text: "increase in internal development satisfaction",
},
{
title: "60%",
text: "reduction in incidents with dev environments",
},
{
title: "<10 min",
text: "onboarding time for new engineers",
}]}
/>

<Section>
	<Quote
		quote="Gitpod offers a compelling developer experience, and reduces our developer downtime to nearly zero. Running in the cloud enabled new ways of working together that weren’t possible before. We were able to modernize our development environment and increase internal developer satisfaction by 45 percentage points."
		author={{
			name: "Roger Goldfinger",
			jobTitle: "Senior Staff Software Engineer at Quizlet",
		}}
	/>
</Section>

<Story bannerImg="/images/customers/quizlet/banner.png" text="Quizlet reduced incidents with broken dev environments by 60% using Gitpod">

In less than two quarters, the platform engineering team at Quizlet achieved a drastic improvement in developer productivity and developer satisfaction across the company by introducing [cloud development environments (CDEs)](/cde).

[Quizlet](https://quizlet.com/) is an online learning tool that makes big subjects easier to digest with flashcards and practice tests. Its users depend on it as a way to improve their test scores and so being a reliable, scalable solution is extremely important to the Quizlet development team. Quizlet was founded in 2005 in San Francisco and serves users in more than 130 countries across the globe.

New engineers at Quizlet had struggled with [compatibility issues after the ARM-based M1 MacBook was introduced](/blog/better-container-development-on-apple-m1-macbooks-with-gitpod). At the time, it took days to onboard new developers and hours to troubleshoot development environments. After a POC with Gitpod, the platform engineering team around Senior Staff Engineer Roger Goldfinger and Staff Platform Engineer Cooper Benson rolled out Gitpod [CDEs](/cde) to the entire engineering team of 85 in summer of 2022:

Their key objectives:

-   **Reduce onboarding time to make new hires productive, faster**
-   **Reduce time to troubleshoot broken development environments**
-   **Increase security of development environments**

Gitpod’s cloud development environments (CDEs) are high-powered, automated development environments in the cloud. With a single click, developers can spin up a perfectly configured workspace in a container in the cloud - independent of the device, operating system, or IDE they use.

## Reducing onboarding time from days to minutes

Quizlet solved their onboarding problems right away. In Gitpod, configuration of development environments is handled on a project level, removing complexity of managing configuration and varying installations of local machines. A one-line config change by a platform engineer is instantly available to every team member who opens a new workspace in Gitpod.

> "Developers are experiencing far less productivity issues onboarding. Now it takes an hour at most, with training, and developers are coding." - <span style="font-weight:400; font-size:18px;">Cooper Benson,</span> <span style="font-weight:400; font-size:16px;">Staff Platform Engineer at Quizlet</span>

## Higher security with ephemeral CDEs

Quizlet saw the benefit of doing cloud-based development on ephemeral containers over virtual machines.

> "Because Gitpod provides ephemeral environments and allows software to run on each running workspace, we’re able to reduce exfiltration risks as well as outside actors from accessing our development environments." - <span style="font-weight:400; font-size:18px;">Roger Goldfinger,</span> <span style="font-weight:400; font-size:16px;">Senior Staff Software Engineer at Quizlet</span>

Gitpod keeps source code off the local machine and is ephemeral and isolated from other work which [reduces the potential impact of software supply chain attacks](/security).

## Fewer broken developer environments

Beyond solving their onboarding problem, the team at Quizlet observed reduced developer toil, increased team collaboration across different roles and massively improved developer satisfaction.

Gitpod eliminates configuration drift and ensures every developer is always working on the latest configuration. Because Gitpod’s workspaces are short-lived, it is super easy to restart or create a new workspace. Before Gitpod, 90% of developers had a broken environment at least 1 and up to 4 days a month with 100% of the team reporting they experienced issues or delays working with their codebase. Since the introduction of Gitpod, the latter number already decreased by 60 percentage points.

> "Trying to SSH into a VM to diagnose one of a million running processes is infinitely worse than just creating a workspace in Gitpod." - <span style="font-weight:400; font-size:18px;">Cooper Benson,</span> <span style="font-weight:400; font-size:16px;">Staff Platform Engineer at Quizlet</span>

With Gitpod, Quizlet has been able to take <b>debugging from what was once a two hour job, to less than thirty seconds with the fix of a new workspace, with now 40% of developers reporting they experience no issues or delays with coding</b>.

## Enhanced collaboration with designers and product managers

> "Sharing a change that spanned the front end and back end was really difficult before. Now they can just share a workspace URL with their product manager." - <span style="font-weight:400; font-size:18px;">Roger Goldfinger,</span> <span style="font-weight:400; font-size:16px;">Senior Staff Software Engineer at Quizlet</span>

Quizlet developers have been able to spin up development environments on demand, share port URLs to enable faster collaboration and debugging and get new members of their teams onboarded quickly.

Non-engineering team members benefit from the introduction of CDEs as well. At Quizlet, Gitpod is used by designers to review front end changes and product managers to easily jump from workspace to workspace.

## The bottom line: massively improved developer satisfaction

> Gitpod offers a compelling developer experience, and reduces our developer downtime to nearly zero. Running in the cloud enabled new ways of working together that weren’t possible before. We were able to modernize our development environment and increase internal developer satisfaction by 45%” - <span style="font-weight:400; font-size:18px;">Roger Goldfinger,</span> <span style="font-weight:400; font-size:16px;">Senior Staff Software Engineer at Quizlet</span>

The Quizlet team initially deployed Gitpod on their largest repo. Engineers at Quizlet can choose whether to use Gitpod or their local development environment.

Six months in, over 75% of their developers are using Gitpod. The team is now deploying Gitpod across additional repositories to make it available to even more engineers at Quizlet.

> "We've solved dev. Now we're focused on delivering value to users." - <span style="font-weight:400; font-size:18px;">Roger Goldfinger,</span> <span style="font-weight:400; font-size:16px;">Senior Staff Software Engineer at Quizlet</span>

</Story>
