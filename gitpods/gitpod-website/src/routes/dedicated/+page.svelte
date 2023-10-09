<script lang="ts">
	import OpenGraph from '$lib/components/open-graph.svelte';
	import Hero from '$lib/components/dedicated/hero-text.svelte';
	import { dedicatedPageFeatures } from '$lib/contents/home/features';
	import SectionFeatures from '$lib/components/section-features.svelte';
	import Explore from '$lib/components/explore.svelte';
	import IntegrateDontDictate from '$lib/components/index/integrate-dont-dictate.svelte';
	import DedicatedCalloutCards from '$lib/components/dedicated/dedicated-callout-cards.svelte';
</script>

<OpenGraph
	data={{
		title: 'Gitpod Dedicated: an isolated, single-tenant installation',
		keywords: 'dedicated, single-tenant, isolated, managed, private',
		description:
			'Get your private instance of Gitpod. Gitpod Dedicated is the right choice for large companies with high security and compliance requirements.',
	}}
/>

<Hero />

<DedicatedCalloutCards />

<SectionFeatures
	title="The security & control of a self-hosted solution"
	features={dedicatedPageFeatures}
/>
<IntegrateDontDictate
	class="py-small"
	title="Integrates into your orgs existing development infrastructure"
/>
<Explore
	contents={{
		title: 'Gitpod Dedicated pricing',
		description: 'Pay-per-user and scale predictably.',
		link: {
			href: '/pricing',
			text: 'More on pricing',
		},
	}}
/>
