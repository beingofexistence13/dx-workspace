---
title: From internal hackathon to 20% fewer hotfixes
excerpt: Vizlib started using Gitpod for an internal hackathon and eventually moved their whole development to the cloud. This reduced the onboarding time for new hires from two days to one hour and resulted in 20% fewer hotfixes after release.
image: teaser.png
date: Thursday, 3 February 2022 05:00:00 UTC
pageTitle: 'Vizlib case study: 20% fewer hotfixes with Gitpod'
pageDescription: By moving their whole development to the cloud, Vizlib reduced onboarding time for new hires from 2d to 1h. 20% fewer hotfixes after release through Gitpod.
keywords: vizlib, astrato, data visualisation, hackathon
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
      "By moving their whole development to the cloud, Vizlib reduced onboarding time for new hires from 2d to 1h. 20% fewer hotfixes after release through Gitpod.",
    title: "Vizlib case study: 20% fewer hotfixes with Gitpod",
    keywords: "vizlib, astrato, data visualisation, hackathon",
  }}
/>

<CustomerHero
title="An internal hackathon as catalyst to 20% fewer hotfixes with Gitpod"
text="Vizlib used Gitpod to circumvent challenges with local development at an internal hackathon for their new cloud-native product, Astrato. They eventually moved their whole development to the cloud. This reduced the onboarding time for new hires from two days to one hour and resulted in 20% fewer hotfixes after release."
logo={{
		src: "/svg/customers/astrato.svg",
		alt: "Astrato"
	}}
card={{
		image: "/images/customers/vizlib/teaser.png",
		details:{
			industry: "Data Analytics",
			plan: "Organization, SaaS",
			people: {
				title: "Engineers",
				text: "80+"
			},
			website: {
				href: "https://astrato.io",
				text: "astrato.io",
			}
		}
	}}
/>

<CompanyBenefits
benefits={[
{
title: "1 hour",
text: "Onboarding instead of 2 days",
},
{
title: "20%",
text: "Fewer hotfixes after release",
},
{
title: "100€",
text: "Cloud cost saved per dev/month",
}]}
/>

<Section>
	<Quote
		quote="Gitpod will become the default way of developing. Local development is just not an option anymore."
		author={{
			name: "Konrad Mattheis",
			jobTitle: "CTO at Vizlib",
		}}
	/>
</Section>

<Story bannerImg="/images/customers/vizlib/banner.png" text="An internal hackathon as catalyst to move developer environments into the cloud">

Vizlib builds powerful value-added products for Qlik Sense. Customers go beyond native Qlik Sense to supercharge their analytics. They are growing quickly on the back of their five value-added products, used by 1.000+ enterprise customers, and are now expanding into cloud-native BI with their new product, Astrato.

The engineering team under CTO Konrad Mattheis came to appreciate the benefits of Gitpod during a hackathon.

## Gitpod as an unexpected outcome from a Hackathon

Engineers want to focus on being creative and writing code. For hackathons, this is even more true. In the case of Vizlib, [a five-day hackathon](https://astrato.io/blog/astrato-hackathon-innovating-and-improving-our-features-for-you/) was held to focus the team on the rapid development of new features and improvements for their new product, Astrato– a modern fully managed Cloud BI solution.

Naturally, the last thing the team wanted was to waste time on dealing with configuration, setup tasks and making changes to their developer environment. But that was the exact challenge – since engineers from various areas with different dev stacks came together to collaborate towards the same goal and product. Making changes to running local developer environments was not an option to avoid breaking them for when they return to their regular work. Plus, compatibility issues with the Astrato workflow on Windows added another layer of complexity.

> “We needed a fast way to make everyone ready to code in just one hour without touching the local environments.”

The CTO, Konrad Mattheis, explored cloud developer environments as an option to solve these challenges and started evaluating Gitpod.

Using remote development would firstly ensure that local developer environments remained untouched. And since Gitpod provisions powerful Linux containers under the hood, the OS compatibility wouldn’t be an issue either. Having a standardized configuration to provide everyone with the right set and versions of tools at the click of a button ensured consistency with no “but it works on my machine” surprises.

> “Gitpod checked all the boxes, so all 72 participants used it throughout the hackathon week.”

Konrad Mattheis explained that the deep focus on development allowed for much higher productivity. Given the collaborative nature of hackathons, Gitpod’s features such as sharing running workspaces for pair programming or sharing snapshots of workspaces let the teams collaborate much closer and more efficiently. The hackathon was a huge success and resulted in 10 new features or improvements to Astrato, more than initially expected. Read more in their Astrato [blog post](https://astrato.io/blog/astrato-hackathon-innovating-and-improving-our-features-for-you/).

An unintended outcome of the hackathon was the improvement of the development workflow at Vizlib: inspired by the efficiency of remote development with Gitpod, the team decided to move their whole developer environments to the cloud altogether. CTO Konrad Mattheis noted that the hackathon acted as a catalyst, making it more obvious that the aforementioned challenges are not exclusive to hackathons but significantly impact the day-to-day work of their engineering organization. Vizlib develops on a dockerized Kubernetes Stack with only full-stack engineers that use a variety of machines with different operating systems. This led to inconsistent, error-prone dev environments due to configuration drift.

> “Nearly every week, a few developers complained that they couldn’t work because the system couldn’t be built due to changes they were unaware of.”

## A smoother development process with improved collaboration and onboarding

Vizlib operates in squads consisting of engineers, QA testers, product managers and designers. Konrad shares that one of the biggest advantages of moving to Gitpod are the efficiency gains they get from better collaboration within and across squads. The ability to work on multiple issues, bugs or PRs and spin up workspaces that are fully prebuilt by the time they are started, resulted in massive time savings. Vizlib estimates that every engineer saves a minimum of two hours per week, purely by not having to fix their developer environments anymore. Excluding efficiency gains through increased flow state and more efficient collaboration.

It also made the development process more robust by having fewer differences across the developer and production environments and allowing for better testing. Gitpod improved the accessibility to QA engineers and designers, which lifted development velocity and quality.

> “The ability for QAs to easily test a branch resulted in 20% fewer hotfixes after releases.”

Having newly hired engineers use automated developer environments in the cloud significantly reduces friction, onboarding time and allows them to contribute from the get-go. In the past, it took two days for an engineer to set up their dev environment, while it now only takes around an hour to get started.

To support the rapid business growth, Vizlib plans to hire five additional product squads with 10 FTE each during 2022 (see Vizlib’s [career page](https://careers.vizlib.com/) for current opportunities), where these efficiency gains will have a massive impact. On top of that, CAPEX expenditures can be reduced as there is no need for overpowered machines anymore. Even without that, Vizlib estimates the cost savings to be more than $100 per month per engineer.

> “Gitpod will become the default way of developing. Local development is just not an option anymore.”

We’re thankful for the collaboration with Vizlib and the interview with Konrad Mattheis that led to this case study.

</Story>
