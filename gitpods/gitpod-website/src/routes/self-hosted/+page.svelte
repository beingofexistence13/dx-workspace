<script lang="ts">
	import { dedicatedFeatures } from '$lib/contents/home/features';
	import Testimonials from '$lib/components/index/testimonials.svelte';
	import { testimonials } from '$lib/contents/home/index';
	import OpenGraph from '$lib/components/open-graph.svelte';
	import LinkButton from '$lib/components/ui-library/link-button';
	import Section from '$lib/components/section.svelte';
	import Features from '$lib/components/features.svelte';
	import DedicatedCalloutCards from '$lib/components/dedicated/dedicated-callout-cards.svelte';
	import SectionCommon from '$lib/components/section-common.svelte';
	import { dedicatedCards } from '$lib/contents/enterprise';
	import CardSmall from '$lib/components/card/card-small.svelte';
	import Hero from '$lib/components/dedicated/hero-text.svelte';
</script>

<OpenGraph
	data={{
		description:
			'Install a private, single-tenant instance of Gitpod on your cloud account. Gitpod Dedicated is our alternative to self-hosting for large teams',
		title: 'Gitpod self-hosted alternative',
		keywords:
			'dedicated, self-hosted, private SaaS, single-tenant, installation',
	}}
/>

<Section class="text-center">
	<h2 class="text-5xl font-bold">Gitpod self-hosted alternative</h2>
	<p class="text-lg sm:text-2xl mt-micro mb-x-small mx-auto max-w-4xl">
		Run Gitpod in your own Cloud account with Gitpod Dedicated, our
		self-hosted alternative for large teams.
	</p>
	<LinkButton
		href="#dedicated-request-access"
		variant="primary"
		size="large"
		data-analytics={`{"context":"self-hosted"}`}>Get started</LinkButton
	>
</Section>

<Section>
	<Features features={dedicatedFeatures} />
</Section>

<SectionCommon
	title="Run Gitpod in your cloud account"
	text="Gitpod Dedicated is an isolated, single-tenant installation managed by Gitpod."
>
	<div
		class="flex flex-wrap justify-center mt-small max-w-8xl mx-auto"
		slot="content"
	>
		{#each dedicatedCards as card}
			<CardSmall
				class="m-macro px-xx-small relative"
				card={card.card}
				titleClassNames="h5"
			/>
		{/each}
	</div>
</SectionCommon>

<Section>
	<Testimonials
		title="Trusted by the best developer teams"
		text=" "
		class="-mb-20"
		{testimonials}
	/>
</Section>

<div class="mb-x-large md:mb-xxx-large" id="dedicated-request-access">
	<div class="max-w-2xl mx-auto justify-center">
		<Hero />
	</div>
	<DedicatedCalloutCards />
</div>
