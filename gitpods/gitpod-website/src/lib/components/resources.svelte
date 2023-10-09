<script lang="ts">
	import type { Card as CardType } from '$lib/types/card';
	import Card from './card/card.svelte';

	export let cards: CardType[];
	export let headingLevel: 'h3' | 'h2' = 'h2';
</script>

<div
	class="flex flex-wrap justify-center mt-x-small md:mt-small max-w-8xl mx-auto gap-4"
>
	{#each cards as card}
		<Card
			{card}
			class="text-left w-[343px] sm:w-[368px]"
			{headingLevel}
			textAlign="left"
		/>
	{/each}
</div>
