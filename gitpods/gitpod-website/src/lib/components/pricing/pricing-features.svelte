<script lang="ts">
	import PricingFeatureBoxes from './pricing-feature-boxes.svelte';
	import type { FeatureList } from '$lib/types/pricing';
	import Section from '$lib/components/section.svelte';

	export let cloudFeatures: FeatureList[] = [];
	export let dedicatedFeatures: FeatureList[] = [];
</script>

<Section>
	<div
		class="flex flex-col md:flex-row mx-auto justify-center max-w-7xl gap-4"
	>
		{#if cloudFeatures.length > 0}
			<PricingFeatureBoxes featuresLists={cloudFeatures} />
		{/if}
		{#if dedicatedFeatures.length > 0}
			<PricingFeatureBoxes featuresLists={dedicatedFeatures} />
		{/if}
	</div>
</Section>
