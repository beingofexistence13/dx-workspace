<script lang="ts">
	import OpenGraph from '$lib/components/open-graph.svelte';
	import Description from '$lib/components/careers/description.svelte';
	import Header from '$lib/components/careers/header.svelte';
	import WhatWeOffer from '$lib/components/careers/what-we-offer.svelte';
	import OpenPositions from '$lib/components/careers/open-positions.svelte';
	import type { PageData } from './$types';

	export let data: PageData;
</script>

<OpenGraph
	data={{
		description: 'Come join our fast-growing, venture-backed team.',
		title: 'Careers at Gitpod',
	}}
/>
<Header />
<Description />
<WhatWeOffer />
<OpenPositions openPositions={data.data} />
