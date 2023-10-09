<script>
	import { secureParagraphs } from '$lib/contents/security';
	import Section from '../section.svelte';
</script>

<Section>
	<header>
		<img
			src="/svg/security/lock.svg"
			alt="Secure"
			class="mx-auto mb-xx-small"
		/>
		<h2 class="text-center">Secure by design.</h2>
	</header>
	<div
		class="flex flex-col lg:flex-row space-y-large lg:space-y-0 lg:space-x-large mt-small"
	>
		{#each secureParagraphs as p}
			<p class="lg:w-1/3 max-w-md mx-auto">
				{p}
			</p>
		{/each}
	</div>
</Section>
