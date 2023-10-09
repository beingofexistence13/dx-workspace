<script lang="ts">
	import MeetBobAndAlice from '$lib/components/local-development/meet-bob-and-alice.svelte';
	import CalloutSecondary from '$lib/components/callout-secondary.svelte';
	import PostPreview from '$lib/components/blog/post-preview.svelte';
	import CardSmall from '$lib/components/card/card-small.svelte';
	import { benefits } from '$lib/contents/local-development';
	import OpenGraph from '$lib/components/open-graph.svelte';
	import Section from '$lib/components/section.svelte';
	import Explore from '$lib/components/explore.svelte';
	import Header from '$lib/components/header.svelte';
	import type { PageData } from './$types';

	export let data: PageData;
</script>

<OpenGraph
	data={{
		title: 'Gitpod vs local development - move to the cloud',
		description:
			'Develop like Google, Facebook and Shopify. Spend less time worrying about brittle, local dev environments and leverage the power of the cloud to improve your organization’s developer experience.',
		keywords: 'local development, cloud, remote development, secure',
	}}
/>

<Header
	title="Gitpod vs local development"
	text="Why should you move your dev environment to the cloud? Here is the answer."
	fullWidth={true}
>
	<div slot="content" class="grid gap-micro justify-center mt-small">
		{#each benefits as benefit}
			<CardSmall card={benefit} headingLevel="h2" titleClassNames="h5" />
		{/each}
	</div>
</Header>

<MeetBobAndAlice />

<CalloutSecondary
	title="Feel the difference"
	text="Spin up fresh cloud development environments for each task, in the cloud, in
  seconds."
/>

<Section>
	<div class="text-center max-w-3xl mx-auto">
		<h2>Full blog post</h2>

		<p class="text-large">
			Read a first-hand developer perspective on switching to remote
			development.
		</p>
	</div>

	<div class="max-w-7xl mx-auto mt-small">
		<PostPreview
			post={data.post}
			type="blog"
			layout="row"
			isMostRecent={true}
		/>
	</div>
</Section>

<Explore />

<style lang="postcss">
	div {
		grid-template-columns: repeat(auto-fill, 314px);

		@media (max-width: 1430px) {
			/* this breakpoint is there to help make sure there are 4 cards in a row on Macbook 13' */
			@apply max-w-4xl mx-auto;
		}

		@media (max-width: 400px) {
			grid-template-columns: none;
		}
	}
</style>
