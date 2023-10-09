<script lang="ts">
	import type { Features } from '$lib/types/pricing';
	import QaTooltip from '../qa-tooltip.svelte';

	let className: string = '';

	export { className as class };

	export let features: Features;
</script>

<ul
	class="inline-flex flex-col ml-x-small mt-xx-small space-y-8 text-left {className}"
>
	{#each features as feature}
		<li class="relative inline-flex text-important">
			{#if typeof feature !== 'string'}
				<QaTooltip text={feature.text} tooltip={feature.tooltip} />
			{:else}
				{@html feature}
			{/if}
		</li>
	{/each}
</ul>

<style lang="postcss">
	li::before {
		content: url('/tick.svg');
		@apply absolute inline-block -left-7 sm:-left-9;
		height: 1.375rem;
		width: 1.375rem;

		@media (max-width: 375px) {
			@apply h-5 w-5;
		}
	}
</style>
