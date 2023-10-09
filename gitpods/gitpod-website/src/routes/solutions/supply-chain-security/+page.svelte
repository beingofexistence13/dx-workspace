<script lang="ts">
	import {
		supplyChainSecurityFeatures,
		featureCards,
	} from '$lib/contents/home/features';
	import SectionFeatures from '$lib/components/section-features.svelte';
	import Quotes from '$lib/components/quotes.svelte';
	import { quotes } from '$lib/contents/customers';
	import Card from '$lib/components/card/card.svelte';
	import SectionCommon from '$lib/components/section-common.svelte';
	import OpenGraph from '$lib/components/open-graph.svelte';
	import Section from '$lib/components/section.svelte';
	import Quote from '$lib/components/solutions/quote.svelte';
	import AnimatedLogos from '$lib/components/animated-logos.svelte';
	import Explore from '$lib/components/explore.svelte';
</script>

<OpenGraph
	data={{
		description:
			'Gitpod gives a perfect development environment to everyone on the team.',
		title: 'Solution: Software supply chain security - Gitpod',
		keywords:
			'cloud development environment, cde, remote development, developer experience, onboarding, supply chain security, software supply chain security, security, secure cloud development environment, secure cde, secure remote development, secure developer experience, secure onboarding, secure supply chain security, secure software supply chain security, secure security, secure, secure cloud development environment, secure cde, secure remote development, secure developer experience, secure onboarding, secure supply chain security, secure software supply chain security, secure security, secure',
	}}
/>

<div class="flex flex-col lg:flex-row lg:pt-x-large">
	<div
		class="items-center justify-between max-w-7xl mx-auto py-micro md:py-medium"
	>
		<h2 class="h1 !mb-micro md:!mb-x-small max-w-2xl">
			Secure your software supply chain with CDEs
		</h2>
		<p class="text-large max-w-xl mb-macro">
			Extend security policies to the development lifecycle with
			centralized control of dev environments and changes to those
			environments.
		</p>
	</div>
	<Quote
		quote="We're able to reduce exfiltration risks as well as outside actors from accessing our development environments."
		author={{
			name: 'Roger Goldfinger',
			jobTitle: 'Senior Staff Engineer at Quizlet',
		}}
		svgClazz="h-14 w-24"
	/>
</div>
<div class="mt-x-large md:mt-xxx-large mb-x-large sm:mb-0">
	<AnimatedLogos title="Securing 1M+ developers in organizations like" />
</div>

<SectionFeatures
	title="Maximize control, minimal overhead"
	features={supplyChainSecurityFeatures}
/>
<SectionCommon title="Your cloud or ours">
	<div
		class="flex flex-wrap justify-center gap-4 mt-small max-w-5xl mx-auto"
		slot="content"
	>
		{#each featureCards as card}
			<Card
				class="m-macro relative !w-[368px]"
				card={card.card}
				titleClassNames="!text-[28px] !leading-10"
				textAlign="left"
			/>
		{/each}
	</div>
</SectionCommon>

<Section>
	<Quotes {quotes} class="max-w-7xl mx-auto" />
</Section>
<Explore />
