<script lang="ts">
	import { increasedProductivityFeatures } from '$lib/contents/home/features';

	import SectionFeatures from '$lib/components/section-features.svelte';
	import Quotes from '$lib/components/quotes.svelte';
	import { quotes } from '$lib/contents/customers';
	import OpenGraph from '$lib/components/open-graph.svelte';
	import Section from '$lib/components/section.svelte';
	import Quote from '$lib/components/solutions/quote.svelte';
	import Titles from '$lib/components/index/titles.svelte';
	import Explore from '$lib/components/explore.svelte';
</script>

<OpenGraph
	data={{
		description:
			'Gitpod gives a perfect development environment to everyone on the team.',
		title: 'Solution: Collaboration - Gitpod',
		keywords:
			'cloud development environment, cde, remote development, developer experience, collaboration, snapshot, workspace sharing',
	}}
/>

<div class="flex flex-col lg:flex-row lg:pt-x-large">
	<div
		class="items-center justify-between max-w-7xl mx-auto py-xx-small md:my-x-large"
	>
		<h2 class="h1 !mb-micro md:!mb-x-small max-w-2xl">
			Empower productivity
		</h2>
		<p class="text-large mb-macro max-w-xl">
			CDEs give teams time to focus on what they care most about - being
			creative and ready-to-code.
		</p>
	</div>
	<Quote
		quote="
      Gitpod reduces developer downtime to nearly zero. Running in the cloud enables new ways of working together that were not possible before."
		author={{
			name: 'Roger Goldfiner',
			jobTitle: 'Senior Staff Software Engineer at Quizlet',
		}}
		svgClazz="h-12 w-32"
	/>
</div>

<Titles />
<SectionFeatures
	title="Create at the speed you need"
	features={increasedProductivityFeatures}
/>
<Section>
	<Quotes {quotes} class="max-w-7xl mx-auto" />
</Section>
<Explore />
