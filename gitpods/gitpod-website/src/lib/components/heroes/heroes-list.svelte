<script lang="ts">
	import type { Hero as HeroType } from '$lib/types/hero';
	import Hero from './hero.svelte';
	export let heroes: HeroType[];
</script>

<div class="mt-large sm:mt-x-large">
	<div class="flex flex-wrap justify-center mx-auto">
		<!-- sort hero by name -->
		{#each heroes.sort((a, b) => a.name.localeCompare(b.name)) as hero}
			<Hero {hero} />
		{/each}
	</div>
</div>
