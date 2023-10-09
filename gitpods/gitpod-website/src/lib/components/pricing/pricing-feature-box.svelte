<script lang="ts">
	import type { FeatureList } from '$lib/types/pricing';
	import LinkButton from '$lib/components/ui-library/link-button';
	import Card from '$lib/components/ui-library/card';
	import FeaturesList from './features-list.svelte';

	export let featuresList: FeatureList;
	const { title, description, btnHref, btnText, features } = featuresList;
</script>

<Card
	size="medium"
	class="flex flex-col justify-between items-start shadow-normal box !max-w-[368px] md:!max-w-[604px] gap-small p-x-small md:p-x-large bg-card mt-0 mb-micro lg:mb-0 text-center transition-all duration-200"
	stroked={true}
>
	<div class="flex flex-col text-left w-full">
		<h2 class="text-important text-[32px] leading-[2.5rem] font-bold">
			{title}
		</h2>
		{#if description}
			<p class="text-base font-normal mb-x-small">
				{description}
			</p>
		{/if}
		{#if features}
			<FeaturesList class="!mt-0" {features} />
		{/if}
	</div>
	{#if btnHref && btnText}
		<div>
			<LinkButton variant="cta" size="large" href={btnHref}
				>{btnText}</LinkButton
			>
		</div>
	{/if}
</Card>

<style lang="postcss">
	:global(.plan) {
		@apply bg-white;
	}

	:global(.crossed-out) {
		@apply line-through;
	}

	:global(.price-small),
	:global(.crossed-out) {
		@apply text-body text-h4 mr-macro;
	}
</style>
