<script>
	import { intros } from '$lib/contents/local-development';
	import Card from '$lib/components/ui-library/card';

	import Section from '../section.svelte';
	import ComparisonGraphic from './comparison-graphic.svelte';
	import ComparisonTable from './comparison-table.svelte';
</script>

<Section>
	<div class="text-center">
		<h2>Meet Bob and Alice</h2>
		<p class="text-large">
			Let’s have a closer look on how desktop and cloud development
			differentiate.
		</p>
	</div>
	<div
		class="intros flex flex-col lg:flex-row items-center lg:items-start mx-auto justify-between mt-small lg:mt-x-large lg:space-x-medium space-y-x-large lg:space-y-0"
	>
		{#each intros as { image, name, works, workflow, workflowComponent, isHighlighted }}
			<div class="max-w-sm">
				<img src={image} alt={name} class="h-56 w-56 mx-auto" />
				<div class="text-center">
					<h3 class="h4 mt-micro mb-macro">
						{name}
					</h3>
					<p>{works}</p>
				</div>
				<Card
					size="small"
					brandShadow={isHighlighted}
					class="px-x-small py-xx-small mt-x-small"
				>
					{@html workflow}
					{#if workflowComponent}
						<svelte:component
							this={workflowComponent}
							class="inline h-6 w-20"
						/>&nbsp;.
					{/if}
				</Card>
			</div>
		{/each}
	</div>

	<ComparisonTable />

	<ComparisonGraphic />
</Section>

<style lang="postcss">
	.intros {
		max-width: 820px;
	}
	.intros :global(ul) {
		@apply pl-small list-disc;
	}
</style>
