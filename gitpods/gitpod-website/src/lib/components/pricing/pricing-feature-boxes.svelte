<script lang="ts">
	import type { FeatureList } from '$lib/types/pricing';
	import PricingFeatureBox from './pricing-feature-box.svelte';

	let cloudFeatures: FeatureList[];
	let dedicatedFeatures: FeatureList[];
	export let featuresLists = cloudFeatures || dedicatedFeatures;
</script>

<div class="flex justify-center">
	{#each featuresLists as featuresList}
		<PricingFeatureBox {featuresList} />
	{/each}
</div>

<style lang="postcss">
	/* ! do not remove the following block with the custom random breakpoint value 1250px as it addresses https://github.com/gitpod-io/website/issues/1505  */
	div {
		@media (max-width: 1250px) {
			@apply flex-wrap;
		}
	}
</style>
