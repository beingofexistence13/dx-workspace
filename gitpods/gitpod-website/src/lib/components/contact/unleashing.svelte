<script lang="ts">
	import { brands } from '$lib/contents/home/index';
</script>

<section class="my-small lg:my-0 max-w-2xl">
	<h2 class="h5 text-left max-w-md md:max-w-xl mx-auto">
		Empowering 1M+ developers at organizations like
	</h2>
	<div
		class="grid max-w-xl mx-auto gap-x-x-small md:gap-x-medium gap-y-8 mt-x-small"
	>
		{#each [...brands] as brand}
			<svelte:component
				this={brand.logo}
				class="max-h-[40px] w-[88px]"
				transform={brand.transform}
			/>
		{/each}
	</div>
</section>

<style lang="postcss">
	div {
		place-items: center;
		@apply grid-cols-2;

		@media (min-width: 425px) {
			@apply grid-cols-3;
		}

		@media (min-width: 1024px) {
			@apply grid-cols-2;
		}

		@media (min-width: 1280px) {
			@apply grid-cols-3;
		}
	}
</style>
