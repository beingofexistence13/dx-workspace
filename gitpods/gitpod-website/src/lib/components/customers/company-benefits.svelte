<script lang="ts">
	let clazz = '';
	export { clazz as class };
	export let benefits: { title: string; text: string }[];
	import Section from '../section.svelte';
</script>

<Section
	class="flex flex-wrap justify-around lg:justify-between max-w-6xl mx-auto text-center {clazz}"
	style="margin-top: 0"
>
	{#each benefits as { title, text }}
		<div class="w-72 mt-small lg:w-1/3">
			<h2 class="h2">{title}</h2>
			<p>{@html text}</p>
		</div>
	{/each}
</Section>
