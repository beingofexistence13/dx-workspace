---
title: 'From in-house to Gitpod: unlocking a collaboration culture'
excerpt: Factorial embraced a collaboration culture by switching from their in-house dev environments to Gitpod. It saved each engineer 5 to 10 hours a month and freed the DevOps team to focus on production as they scaled from 45 developers to 120.
image: teaser.png
date: Thursday, 23 June 2022 06:00:00 UTC
pageTitle: 'Factorial case study: From in-house remote development to unlocking a collaboration culture'
pageDescription: From in-house remote development to unlocking a collaboration culture. Saving each engineer 5 to 10 hours a month. Freeing the DevOps team to focus on production as Factorial grows from 45 developers to 120.
keywords: DevX, velocity, growth, onboarding, factorial
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
      "From in-house remote development to unlocking a collaboration culture. Saving each engineer 5 to 10 hours a month. Freeing the DevOps team to focus on production as Factorial grows from 45 developers to 120.",
    title: "Factorial case study: From in-house remote development to unlocking a collaboration culture",
    keywords: "DevX, velocity, growth, onboarding, factorial",
  }}
/>

<CustomerHero
title="From in-house to Gitpod: unlocking a collaboration culture"
text="Factorial embraced a collaboration culture by switching from their in-house dev environments to Gitpod. It saved each engineer 5 to 10 hours a month and freed the DevOps team to focus on production as they scaled from 45 developers to 120."
card={{
		image: "/images/customers/factorial/teaser.png",
		details:{
			industry: "Human Resources",
			plan: "Organization, SaaS",
			people: {
				title: "Engineers",
				text: "120+"
			},
			website: {
				href: "https://factorialhr.com/",
				text: "Factorial",
			}
		}
	}}
/>

<CompanyBenefits
benefits={[
{
title: "50%",
text: "DevOps capacity saved",
},
{
title: "5-10hrs",
text: "saved per engineer / month",
},
{
title: "65+",
text: "new developers hired",
}]}
/>

<Section>
	<Quote
		quote="You can either spend 3 days of your life setting them up and teaching them how the environment works, or you can give them a button and say &lsquo;click here&rsquo;."
		author={{
			name: "Josep Jaume",
			jobTitle: "Senior Director of Developer Experience at Factorial",
		}}
	/>
</Section>

<Story bannerImg="/images/customers/factorial/banner.png" text="From in-house to Gitpod: unlocking a collaboration culture">

<img src="/images/customers/factorial/josep-band-slack.png" alt="Slack message from Josep Jaume: 'Just to show you how much I am becoming a meme in Factorial, and how much I love Gitpod – I have a band and some amazing humans from Factorial came to see us. You won't believe what happened next' with some photos of the Factorial team holding Gitpod signs in the crowd." class="rounded-t-2xl">

Factorial is a software company building an all-in-one human resources management application that handles document management, payroll, time tracking, and more.

Director of Developer Experience Josep Jaume has spent the last 8 months improving the way developers at Factorial work. Since then, the company has grown from 45 developers to 120, and Gitpod has become a core part of their developer experience.

Josep tells us the story of Factorial's growth and what led the company to embrace Gitpod for all their development.

## Achieving parity between development and production

Building their application as a large monolith with Ruby on Rails and React helps Factorial rapidly iterate over major changes. As they serve companies in a wide variety of sectors, they need to be agile enough to change the shape of the application quickly. That level of flexibility in the macro-scale comes at the expense of micro-scale changes.

Due to the nature of a monolith, even a small change to the application can affect the totality of the application. Engineers need to be confident that their code reflects reality without having to wait for a deployment cycle to complete, so Factorial uses queues and job workers to fully replicate the production environment during development time.

They saw the need for cloud developer environments early on. Simulating production during development required 10-12GB of RAM and was difficult to run on local machines. It was clear that remote development was the only realistic approach to developing software at this scale.

As Factorial moved away from local development, each developer workstation turned into another cloud application to maintain.

Their DevOps team was 5 people, and maintaining these dev environments became a significant part of the job. A large amount of time went into setting up new environments, onboarding new engineers, and reallocating keys; creating new machines, and then restarting them when things broke.

It took time to provision each new machine but there were greater issues at scale. "Applying changes via Terraform is easy at 10 machines, but fails in entirely different ways with 100 machines." Josep says. "And then you need to ramp up the DevOps team."

Last February, the collaboration between Factorial and Gitpod began, and before long the DevOps team was freed to focus on the production environment where they can provide the most value to the business.

> "The DevOps team is the happiest in the whole company because they don't have to deal with the old dev containers anymore."

## Rethinking the development infrastructure

The learning curve with Gitpod is significantly lower than their previous dev environments, which required deep knowledge of Terraform and Docker in order to restart containers or spin up tasks. Each repository has a configuration file and an image, and then developers can spin up workspaces at the click of a button.

Instead of having to maintain persistent developer environments for each engineer, they became something that was just "there" the moment a developer needed one. They could simply connect to it, like a thin client, and do their work.

Josep explained how several of their developers had been running the IDE locally and [rsyncing](https://linux.die.net/man/1/rsync) against the server. It worked for files, but a lot of the common IDE tooling plugins like ESLint and Prettier don't work that way.

> "Individual devs were frustrated at the inability to use the proper tooling."

Instead of getting immediate feedback in the IDE, they had to manually run scripts, which resulted in many issues only being noticed when it was time to deploy.

Other issues relating to the local environment differing from the production environment often meant that the developer would push to CI and have to wait until it completes before finding out what the next broken thing was.

With Gitpod, the IDE is backed by a remote development server that lives inside the workspace container, so there are significantly fewer layers between the developer and their code. Linters and formatters "just work" and engineers can fix issues as they code, instead of pushing and waiting to see what fails and so they can fix it later.

## Adopting Gitpod across the organization team by team

Factorial's first days with Gitpod were met with some internal hesitation, but Josep was well prepared to avoid it. "You can't force people to use particular technology. At the slightest moment of uncertainty, people will say "this is too new" and go back to their old habits," he explains. Developers need visibility into the system, so when something goes wrong they can see the real root cause and know how to fix it.

Josep went through the company team-by-team. The product and engineering managers came first, because they worked in different ways than the developers.

Unlike the engineers, who tend to work on fewer tasks for longer times, managers and team leads have to switch contexts frequently. As they used Gitpod for more and more of these tasks, they could feel an immediate improvement in collaboration. "They can jump from feature to feature, spin up new environments, test things, comment on them, improve on them, and without having to worry about rebasing and resetting the database," he describes. "Context switching is way easier now. People have noticed that, and they're using it."

The engineers started seeing similar benefits.

> "They now have a way to share URLs and work on a feature with that workspace open and have someone from the product team check it out while working on another workspace."

Factorial's previous code review system involved 12 available staging environments, which developers needed to reserve and provision with their code in order for the QA team to review it.

With so few available, and so many developers who needed them, they often had difficulties finding one to use. And when a developer actually managed to reserve one, it was rarely in a ready-to-go state. The burden of these staging environments fell on the DevOps team to maintain.

Rather than mandating that developers do their work with Gitpod, Josep focused on learning more about the problems they were facing, and highlighting how Gitpod solves them.

They shared a lot about their development process and had frequent pair sessions. Every time they found a pain point, they fixed it, and unlike the old dev environments that were unique to each developer, these fixes improved the developer experience for everyone. Changes to formatting or lint rules became part of the code that every new workspace would build from.

Gitpod also transformed the way Factorial onboarded new hires. From November to July, Factorial grew from 45 developers to 120, and they all needed to be trained on Factorial's development process. With no experience using the old system, Gitpod was a much easier entry point. "You can either spend 3 days of your life setting them up, teaching them to use tmux, or you can just give them a button and say 'click here'."

## Discovering a new collaborative way to work

Collaboration is an indispensable part of Factorial's culture, but it was hard work. Changing tracks to work with someone else meant pushing work to branches for both front-end and back-end repositories, stashing changes, reinstalling dependencies and possibly even re-seeding the database.

Gitpod enabled developers to work in parallel, with multiple workspaces that were easily shareable and readily accessible.

> "I'd estimate each engineer saves 5 to 10 hours a month on dev environment issues that just don't exist with Gitpod."

Josep adds that junior developers usually have the hardest time with such issues.

Once a developer hits the "I can do that?" moment, they start seeing the work of software development in a different way. "There was a tipping point where they just started talking to each other."

Eventually the messages started coming in.

<div class="bg-white px-4 py-2 rounded-lg">
	<img src="/images/customers/factorial/slack-1.png" alt="Can anyone delete my devenv? Been using Gitpod for a long time now and not coming back." />
	<img src="/images/customers/factorial/slack-2.png" alt="I'm not going to need my devenv anymore either. I usually worked on localhost before but I'm not going to use it anymore." />
	<img src="/images/customers/factorial/slack-3.png" alt="I will not need my devenv anymore either, could you please delete it?" />
</div>

The tide had turned. 4 months after Factorial began transitioning to Gitpod, the engineers embraced the new way of working and committed to it—from varying degrees of skepticism and engagement to passionate advocates for a modern developer experience.

One evening in May, Josep was playing a show with his band, where a group from the Factorial team came to see him. They stood in the audience and raised Gitpod signs high above the crowd as he played his guitar on stage.

<div class="max-w-xl mx-auto">

![A gitpod sign in the crowd with Josep playing guitar in the background](/images/customers/factorial/sign-in-crowd.jpg)

</div>

Gitpod is now the standard way to develop software at Factorial. Not mandated by company policy, but the result of developers who are empowered to develop in any way they want, and who chose Gitpod anyway. We are extremely appreciative of the Factorial team, and for Josep Jaume's time to do this interview with us.

</Story>
