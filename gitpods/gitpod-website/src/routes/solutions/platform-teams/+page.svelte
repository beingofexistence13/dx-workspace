<script lang="ts">
	import { platformTeamsFeatures } from '$lib/contents/home/features';
	import { testimonials } from '$lib/contents/home/index';
	import Testimonials from '$lib/components/index/testimonials.svelte';
	import SectionFeatures from '$lib/components/section-features.svelte';
	import OpenGraph from '$lib/components/open-graph.svelte';
	import Section from '$lib/components/section.svelte';
	import Quote from '$lib/components/solutions/quote.svelte';
	import AnimatedLogos from '$lib/components/animated-logos.svelte';
	import Explore from '$lib/components/explore.svelte';
	import IntegrateDontDictate from '$lib/components/index/integrate-dont-dictate.svelte';
</script>

<OpenGraph
	data={{
		description:
			'Learn how the most productive platform teams use cloud development environments with Gitpod',
		title: 'Solution: How CDEs help platform teams - Gitpod',
		keywords:
			'cloud development environment, cde, remote development, developer experience, automation, platform teams, secure developer environment',
	}}
/>

<div class="flex flex-col lg:flex-row lg:pt-x-large">
	<div
		class="items-center justify-between max-w-7xl py-micro md:py-xx-large mx-auto my-macro"
	>
		<h2 class="h1 !mb-micro md:!mb-x-small max-w-2xl">
			Secure and automated development platforms
		</h2>
		<p class="text-large max-w-xl mb-xx-small">
			Gitpod CDEs provide platform teams ways to easily manage
			configuration and extend security policies from a single source of
			truth.
		</p>
	</div>
	<Quote
		quote="Gitpod reduces developer downtime to nearly zero. We  modernize our development environment and increase internal developer satisfaction by 45%.&nbsp;"
		author={{
			name: 'Roger Goldfinger',
			jobTitle: 'Senior Staff Software Engineer at Quizlet',
		}}
		svgClazz="h-10 w-32"
	/>
</div>
<div class="mt-xx-large sm:mt-xxx-large mb-xx-large sm:mb-0">
	<AnimatedLogos title="Securing 1M+ developers at organizations like" />
</div>
<SectionFeatures
	title="Empowering the most productive teams"
	features={platformTeamsFeatures}
/>

<IntegrateDontDictate class="py-small" />

<Section>
	<Testimonials
		title="Trusted by developers globally"
		class="-mb-20"
		{testimonials}
	/>
</Section>
<Explore />
