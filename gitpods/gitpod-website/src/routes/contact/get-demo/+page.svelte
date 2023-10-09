<script lang="ts">
	import Header from '$lib/components/contact/header.svelte';
	import UsedBy from '$lib/components/index/used-by.svelte';
	import OpenGraph from '$lib/components/open-graph.svelte';
</script>

<OpenGraph
	data={{
		title: 'Get a demo of Gitpod',
		description:
			"Supercharge your productivity by how you develop. Get a demo of Gitpod's continuous development platform to see how to maximize your developer experience.",
		keywords:
			'continuous development, remote development, demo, get started',
	}}
/>

<Header />

<UsedBy title="Used by 1M+ developers" class="py-small" />
