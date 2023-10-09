<script lang="ts">
	import Section from '../../section.svelte';
	import LinkGitRepository from './link-git-repository.svelte';
	import Card from '$lib/components/ui-library/card';
</script>

<Section id="get-started" class="pt-20">
	<h2 class="!mb-x-small text-center text-h2">
		Get started with any project
	</h2>
	<div
		class="cards-container flex flex-col lg:flex-row max-w-5xl gap-4 mx-auto justify-center"
	>
		<Card
			class="p-xx-small sm:py-small basis-[50%] sm:px-x-small xl:p-medium text-center"
			size="small"
		>
			<LinkGitRepository />
		</Card>
	</div>
</Section>
