<script lang="ts">
	import ContributionHighlights from '$lib/components/community/contribution-highlights.svelte';
	import CommunityLove from '$lib/components/community/community-love.svelte';
	import OverviewCards from '$lib/components/community/overview-cards.svelte';
	import CalloutBoxes from '$lib/components/community/callout-boxes.svelte';
	import Testimonials from '$lib/components/community/testimonials.svelte';
	import Contribute from '$lib/components/community/contribute.svelte';
	import OpenGraph from '$lib/components/open-graph.svelte';
	import Explore from '$lib/components/explore.svelte';
	import Hero from '$lib/components/hero.svelte';
	import type { PageData } from './$types';

	export let data: PageData;
</script>

<OpenGraph
	data={{
		title: 'Gitpod Community - Come and hang out with us',
		description:
			'Join the Gitpod community. Browse categories, post your questions, or just chat with other members. On Discord, Twitter, GitHub, YouTube or Reddit.',
		keywords: 'community hangout. discord, social',
	}}
/>

<Hero
	class="!mb-0 !mt-small lg:!mt-x-large !pb-micro !text-h2"
	title="Welcome to our community!"
	text="Our community is a space to learn about Gitpod CDEs, connect with other developers and build cool projects. We're happy to have you!"
	btnPrimary={{ href: 'https://www.gitpod.io/chat', text: 'Join Discord' }}
/>

<OverviewCards />

<Testimonials />

<CommunityLove />

<ContributionHighlights />

<Contribute />

<CalloutBoxes post={data.featuredPost} />

<Explore
	contents={{
		title: 'Join the community',
		link: {
			href: 'https://www.gitpod.io/chat',
			text: 'Join Discord',
		},
		secondaryLink: null,
		description:
			'Join our developer community from all over the world as they build on cloud developer environments.',
	}}
/>
