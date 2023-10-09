---
title: 'Teaching thousands of students using Gitpod.'
excerpt: 'Bruno Rocha used Gitpod to teach students Python and Rust, reducing the amount of in-person support each student needed and allowing students to learn on any device. Bruno also hosted Python Week 2022 where he taught thousands of students using Gitpod.'
image: teaser.png
date: Friday, 17 June 2022 06:00:00 UTC
pageTitle: 'Bruno Rocha case study: Teaching python with Gitpod'
pageDescription: Teaching thousands of students using Gitpod. Saving 20 minutes every workshop. Learn how Bruno uses Gitpod to teach Python.
keywords: education, python, rust, workshops, Bruno Rocha
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
      "Teaching thousands of students using Gitpod. Saving 20 minutes every workshop. Learn how Bruno uses Gitpod to teach Python.",
    title: "Bruno Rocha case study: Teaching python with Gitpod",
    keywords: "education, python, rust, workshops, Bruno Rocha",
  }}
/>

<CustomerHero
title="Teaching thousands of students using Gitpod"
text="Gitpod helped Bruno Rocha teach students Python and Rust reducing the amount of in-person support each student needed and allowing students to learn on any device."
card={{
		image: "/images/education/bruno-rocha/teaser.png",
		details:{
			industry: "Education",
			plan: "Organization, SaaS",
			people: {
				title: "Students",
				text: "over 1000"
			},
			website: {
				href: "https://twitter.com/rochacbruno",
				text: "@rochacbruno",
			}
		}
	}}
/>

<CompanyBenefits
benefits={[
{
title: "12",
text: "years teaching",
},
{
title: "20min",
text: "saved per workshop",
},
{
title: "1000's",
text: "of students taught w/ Gitpod",
}]}
/>

<Section>
	<Quote
		quote="I use Gitpod for everything—both for work, and for training."
		author={{
			name: "Bruno Rocha",
			jobTitle: "Engineer at RedHat and online educator",
		}}
	/>
</Section>

<Story bannerImg="/images/customers/bruno-rocha/banner.png" text="Teaching thousands of students using Gitpod">

Bruno Rocha is an engineer at RedHat and for the past 12 years he's been an online educator. He runs workshops teaching students to code using python and rust.

Bruno's workshops cater to students using many different operating systems, with some on Mac, on Windows, on Linux, some tablets, and even some mobile environments.

## Fighting setup issues for each student

For each repository, he would write specific sections in the documentation to walk students through setting up any of the possible operating systems.

But there was a lot of variance within operating systems too. Two Linux users could be using entirely different shells and have different versions of python installed. Writing bash scripts that perform consistently across environments is not trivial. Having students change their python version for a course, especially if they have other projects that rely on a different version, is also challenging.

At the time, those workshops were all in-person events. Bruno had the opportunity to help his students one-on-one. As each student was getting set up for the lesson, Bruno could go directly into their machine to configure their environment and make sure everything was ready to go.

But after switching to online workshops, that physical access stopped being possible, and Bruno needed to find a new solution.

## Eliminating problems with Gitpod

"I tested other alternatives, and when I found Gitpod it was perfectly what I wanted. Just give them a single link", Bruno says. "They can click and enter a ready-to-use environment."

Bruno started using Gitpod in his classes last year.

Within a Gitpod workspace, dependencies can be pre-installed at specific versions, so students are guaranteed to get an identical experience no matter how their local machine is configured.

Problems with differences between Mac, Windows, and Linux went away immediately. With Gitpod, every student was on the same environment, entirely eliminating the setup issues that used to require personal attention.

> "When they have problems, I can just send some Gitpod documentation links, which saves me a lot of time."

Bruno explains that the code repositories were configured to start terminals automatically. From the moment a student opens a workspace, the application is running and the student is ready to follow along.

Bruno's students still had their own preferences about which tools to use. While most would use VS Code in the web editor, some would work in vim or neovim; sometimes in the integrated terminal, sometimes connecting remotely over SSH. Gitpod allows developers to use their preferred IDE rather than prescribing a one-size-fits-all solution. "So I think it's very flexible," Bruno says. "There's no way that any training or workshop won't work on a Gitpod environment."

In April, Bruno hosted a workshop event called Python Week with over 2000 live viewers. During the 5 days of Python Week, students were provided with a GitHub repository pre-configured for Gitpod. Students were able to get started immediately with the learning materials and follow along within the codebase over the course of the workshop.

<figure>
		<iframe class="mx-auto" width="768" height="432" src="https://www.youtube.com/embed/zIY7tly0m50" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
		<figcaption>Interview between <a href="https://twitter.com/paulienuh" target="_blank" rel="noreferrer"> Pauline Narvas </a> and <a href="https://twitter.com/rochacbruno" target="_blank" rel="noreferer"> Bruno Rocha </a> </figcaption>
</figure>

</Story>
