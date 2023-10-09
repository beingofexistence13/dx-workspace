<script lang="ts">
	import DocsContentLayout from '$lib/components/docs/docs-content-layout.svelte';
	import type { PageData } from './$types';

	export let data: PageData;
</script>

<DocsContentLayout {...data.metadata}>
	<svelte:component this={data.Component} />
</DocsContentLayout>
