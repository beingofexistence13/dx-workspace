<script lang="ts">
	import type { Pricing } from '$lib/types/pricing';
	import PricingBox from './pricing-box.svelte';

	let pricingPlans: Pricing[];
	let dedicatedPricingPlans: Pricing[];
	export let plan = pricingPlans || dedicatedPricingPlans;
</script>

<div class="flex justify-center">
	{#each plan as pricing}
		<PricingBox {pricing} />
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
