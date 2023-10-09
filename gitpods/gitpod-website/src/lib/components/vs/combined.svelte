<script>
	import Section from '../section.svelte';
</script>

<Section>
	<div class="combined">
		<slot name="top" />
		<div
			class="flex flex-wrap lg:flex-nowrap justify-center gap-micro lg:gap-small max-w-7xl mx-auto"
		>
			<slot />
		</div>
	</div>
</Section>

<style lang="postcss">
	.combined :global(.feature-box) {
		@apply mb-micro lg:mb-x-small !important;
	}
</style>
