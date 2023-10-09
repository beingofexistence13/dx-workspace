<script lang="ts">
	import { dedicatedPricingSalesCtaFeatureFlagStatus } from '$lib/utils/feature-flag-provider';
	import { trackEvent } from '$lib/components/segment.svelte';
	import PricingBoxes from './pricing-boxes.svelte';
	import type { Pricing } from '$lib/types/pricing';
	import Header from '../header.svelte';
	import { page } from '$app/stores';
	import { goto } from '$app/navigation';
	import EnterprirseCalloutCard from './enterprise-callout-card.svelte';
	import DedicatedCalloutCard from './dedicated-callout-card.svelte';
	import { onMount } from 'svelte';
	import Toggle from '$lib/components/toggle.svelte';
	let checked: boolean = false;
	const handleChange = () => {
		checked = !checked;
		if (checked) {
			$page.url.searchParams.set('plan', 'dedicated');
			goto(`?${$page.url.searchParams.toString()}`);
		} else {
			$page.url.searchParams.set('plan', 'cloud');
			goto(`?${$page.url.searchParams.toString()}`);
		}
	};
	export let pricingPlans: Pricing[] = [];
	export let dedicatedPricingPlans: Pricing[] = [];

	// if page URL is /pricing?plan=dedicated, show dedicated pricing plans and make checked true
	onMount(async () => {
		if ($page.url.searchParams.get('plan') === 'dedicated') {
			checked = true;
		}
		await trackEvent('component_loaded', {
			experiments_variant: dedicatedPricingSalesCtaFeatureFlagStatus
				? 'dedicated_pricing_cta_talk_to_sales_loaded'
				: 'dedicated_pricing_cta_contact_sales_loaded',
		});
	});
</script>

<Header
	class="md:!mb-x-small !mb-micro"
	title="Plans and pricing"
	fullWidth={true}
/>
<div class="text-center !mt-8">
	<Toggle
		labelLeft="Gitpod Cloud"
		labelRight="Gitpod Dedicated"
		on:change={handleChange}
		{checked}
		id="cloud-dedicated-toggle"
	/>
</div>

{#if !checked}
	<div class="mt-small">
		{#if pricingPlans.length > 0}
			<PricingBoxes plan={pricingPlans} />
		{/if}
	</div>
	<EnterprirseCalloutCard />
{:else}
	<div class="mt-small">
		{#if dedicatedPricingPlans.length > 0}
			<PricingBoxes plan={dedicatedPricingPlans} />
		{/if}
	</div>
	<DedicatedCalloutCard />
{/if}
