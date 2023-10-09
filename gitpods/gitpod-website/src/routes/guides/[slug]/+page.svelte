<script lang="ts">
	import GuidesContentLayout from '$lib/components/guides/guides-content-layout.svelte';
	import type { PageData } from './$types';

	export let data: PageData;
</script>

<GuidesContentLayout guide={data.guide}>
	<svelte:component this={data.Component} />
</GuidesContentLayout>
