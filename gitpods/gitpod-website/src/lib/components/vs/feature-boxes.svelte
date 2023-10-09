<script lang="ts">
	export let title: string = '';
</script>

{#if title}
	<h2 class="mb-x-small md:mb-small text-center">{title}</h2>
{/if}

<div class="feature-boxes">
	<slot />
</div>

<style lang="postcss">
	.feature-boxes > :global(div:not(:last-child)) :global(.feature-box) {
		@apply mb-x-small !important;
	}

	.feature-boxes > :global(div:nth-of-type(even)) :global(.preview) {
		@apply col-start-1;
		@apply row-start-1;
	}
</style>
