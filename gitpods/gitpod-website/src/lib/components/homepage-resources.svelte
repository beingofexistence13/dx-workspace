<script lang="ts">
	import type { Card as CardType } from '$lib/types/card';
	import Card from './card/card.svelte';
	import Section from './section.svelte';
	import LinkButton from './ui-library/link-button/link-button.svelte';

	export let cards: CardType[];
	export let iconClassNames: string = 'h-8 w-8 text-initial ml-2';
</script>

<Section>
	<div class="row">
		<h3 class="text-center text-3xl sm:text-5xl font-bold">
			Gitpod makes teams productive
		</h3>
		<p
			class="text-center text-lg sm:text-2xl mt-xx-small mb-x-small mx-auto max-w-4xl"
		>
			Learn <a href="/customers/factorial"
				>how Factorial develops software with Gitpod</a
			>.
		</p>
	</div>
	<div class="flex flex-wrap mt-x-small sm:mt-small justify-center">
		{#each cards as card}
			<Card
				textAlign="left"
				titleClassNames="!text-left h4"
				{card}
				class="sm:mx-macro mb-micro justify-start !w-72"
				{iconClassNames}
			/>
		{/each}
	</div>
	<div class="text-center mt-[32px] text-2xl">
		Want to see a custom demo or get help finding the right solution?
	</div>
	<div class="text-center m-auto mb-small mt-x-small">
		<LinkButton
			href="/contact/get-demo"
			class="items-center"
			size="large"
			variant="primary">Get a demo</LinkButton
		>
	</div>
</Section>
