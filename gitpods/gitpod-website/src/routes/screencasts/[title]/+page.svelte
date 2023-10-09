<script lang="ts">
	import Explore from '$lib/components/explore.svelte';
	import SectionCommon from '$lib/components/section-common.svelte';
	import ScreencastsGrid from '$lib/components/screencasts/screencasts-grid.svelte';
	import Body from '$lib/components/screencasts/body.svelte';
	import Header from '$lib/components/header.svelte';
	import type { PageData } from './$types';
	import { onMount } from 'svelte';

	export let data: PageData;

	let isAMobileDevice = false;

	onMount(() => {
		let query = window.matchMedia('(max-width: 768px)');
		const handler = () => {
			if (query.matches) {
				isAMobileDevice = true;
			} else {
				isAMobileDevice = false;
			}
		};
		query.addEventListener('change', handler);

		return () => {
			query.removeEventListener('change', handler);
		};
	});
</script>

<Header
	title={data.screencast.title}
	text={data.screencast.description}
	textClassNames="mb-small text-large max-w-4xl mx-auto"
	fullWidth
	tight
/>

<Body screencast={data.screencast} />

{#if data.nextScreencasts.length}
	<SectionCommon title="Next up">
		<ScreencastsGrid
			headlineOrder="h3"
			screencasts={data.nextScreencasts.slice(0, isAMobileDevice ? 3 : 6)}
			slot="content"
		/>
	</SectionCommon>
{/if}
<Explore />
