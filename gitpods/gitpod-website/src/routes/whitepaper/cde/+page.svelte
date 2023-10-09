<script lang="ts">
	import Hero from '$lib/components/whitepaper/cloud-dev-environments/hero.svelte';
	import Download from '$lib/components/whitepaper/cloud-dev-environments/download.svelte';
	import Wrapper from '$lib/components/webinars/wrapper.svelte';
	import YoullLearn from '$lib/components/whitepaper/cloud-dev-environments/youll-learn.svelte';
	import VoicesFromTheIndustry from '$lib/components/whitepaper/cloud-dev-environments/voices-from-the-industry.svelte';
	import MoreArticles from '$lib/components/more-articles.svelte';
	import OpenGraph from '$lib/components/open-graph.svelte';
	import Explore from '$lib/components/explore.svelte';
	import type { PageData } from './$types';

	export let data: PageData;
</script>

<OpenGraph
	data={{
		title: 'Cloud Development Environments (CDEs) for engineering teams',
		description:
			'Read our white paper on the business benefits of Cloud Development Environments (CDEs) for engineering teams and large organizations.',
	}}
/>

<div class="flex items-start">
	<div class="max-w-2xl">
		<Hero
			description="Curious why many of the largest tech companies are adopting CDEs? Our whitepaper explores a business perspective on CDEs and their benefits for engineering teams."
			title="CDEs for large engineering orgs"
			label="white paper"
		/>

		<Wrapper
			class="lgx:hidden px-xx-small py-x-small sm:p-x-small xl:px-small xl:py-large !mx-auto "
		>
			<Download
				class="lgx:hidden"
				toType="cde-whitepaper"
				eventType="white paper"
			/>
		</Wrapper>

		<YoullLearn />
		<VoicesFromTheIndustry />
	</div>
	<Wrapper
		class="hidden lgx:block px-xx-small py-x-small sm:p-x-small xl:px-small xl:py-x-small !mx-auto sticky left-full lgx:top-40"
	>
		<Download
			toType="cde-whitepaper"
			class="hidden lgx:block sticky left-full lgx:top-40"
			eventType="white paper"
		/>
	</Wrapper>
</div>

<MoreArticles
	title="Additional resources"
	text="If you are curious to learn more on remote development, have a read through these blog posts."
	textMaxW="max-w-2xl"
	posts={data.featuredPosts}
/>

<Explore contents={{ title: 'Try it out' }} />
