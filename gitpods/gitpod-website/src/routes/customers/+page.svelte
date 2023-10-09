<script lang="ts">
	import Stories from '$lib/components/customers/stories.svelte';
	import Explore from '$lib/components/explore.svelte';
	import Hero from '$lib/components/hero.svelte';
	import GartnerReport from '$lib/components/cde/gartner-report.svelte';
	import Testimonials from '$lib/components/index/testimonials.svelte';
	import OpenGraph from '$lib/components/open-graph.svelte';
	import FeatureBoxWhitepaper from '$lib/components/feature-box-whitepaper.svelte';
	import Quote from '$lib/components/solutions/quote.svelte';
	import { testimonials } from '$lib/contents/home/index';
	import AnimatedLogos from '$lib/components/animated-logos.svelte';
	import type { PageData } from './$types';

	export let data: PageData;
</script>

<OpenGraph
	data={{
		title: 'Customer stories - Gitpod',
		description:
			'Learn how other companies leverage Gitpod to improve their developer experience, remote collaboration and security.',
		keywords:
			'case study, customer story, experience, review, benefit, companies',
	}}
/>

<div
	class="flex flex-col lg:flex-row sm:mt-x-large items-center justify-between space-x-0 md:space-x-1"
>
	<Hero
		title="You are in good company"
		text="Learn how developers use Gitpod CDEs to increase velocity, improve collaboration and gain control of their development."
		btnPrimary={{
			href: 'https://gitpod.io/login',
			text: 'Start for free',
		}}
		btnSecondary={{
			href: '/contact/get-demo',
			text: 'Get a demo',
		}}
	/>
	<Quote
		quote="
    Gitpod reduces developer downtime to nearly zero. Running in the cloud enables new ways of working together that were not possible before."
		author={{
			name: 'Roger Goldfiner',
			jobTitle: 'Senior Staff Software Engineer at Quizlet',
		}}
		svgClazz="h-16 w-36"
	/>
</div>

<AnimatedLogos />
<FeatureBoxWhitepaper />
<GartnerReport />
<Stories
	title="Meet some of our customers."
	text="Gitpod enables companies of any size to deliver product faster."
	id="stories"
	customers={data.customers}
	class="max-w-7xl lg:grid-cols-3 xl:px-4"
/>
<Testimonials {testimonials} title="Trusted by small teams and large orgs." />

<Explore
	contents={{
		title: 'Join developers, everywhere.',
		description:
			'Dev environments pre-configured with all the dependencies required to code in seconds.',
		secondaryLink: {
			href: '/contact/get-demo',
			text: 'Get a demo',
		},
	}}
/>

<style lang="postcss">
	:global(.feature-box) :global(.preview) {
		@apply col-start-2 !important;
	}
</style>
