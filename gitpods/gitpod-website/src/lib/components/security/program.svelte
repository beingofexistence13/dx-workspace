<script lang="ts">
	import { programFeatures } from '$lib/contents/security';
	import Section from '../section.svelte';
	import CardSmall from '$lib/components/card/card-small.svelte';
</script>

<Section>
	<h2 class="text-center mb-small">Security program</h2>
	<div
		class="flex flex-wrap justify-center mt-small mx-auto 1/2xl:justify-center gap-y-micro md:gap-y-small gap-x-4"
	>
		{#each programFeatures as feature}
			<CardSmall
				size="small"
				class="relative"
				textAlign="left"
				titleClassNames="!text-left h4"
				card={feature}
				iconClassNames="mx-0"
				btnClassNames="self-start mt-xx-small"
			/>
		{/each}
	</div>
</Section>
