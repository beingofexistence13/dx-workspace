<script lang="ts">
	import Feature from './feature.svelte';
	import type { Feature as FeatureType } from '$lib/types/feature';

	export let features: FeatureType[];
	export let headingLevel: 'h2' | 'h3' = 'h2';
	let clazz = '';
	export { clazz as class };
</script>

{#each features as feature}
	<Feature feature={{ ...feature, headingLevel }} class={clazz} />
{/each}
