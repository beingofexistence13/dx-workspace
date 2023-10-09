<script lang="ts">
	import Header from '$lib/components/kubecon-demo/header.svelte';

	import Titles from '$lib/components/index/titles.svelte';
	import UsedBy from '$lib/components/index/used-by.svelte';
	import OpenGraph from '$lib/components/open-graph.svelte';
</script>

<OpenGraph
	data={{
		title: 'Get a demo of Gitpod at KubeCon EU 2023',
		description:
			"Supercharge your productivity by how you develop. Get a demo of Gitpod's continuous development platform to see how to maximize your developer experience.",
		keywords:
			'continuous development, remote development, demo, get started',
	}}
/>

<Header />

<Titles />

<UsedBy title="Speeding up 1M+ developers in teams like" isCard={false} />
