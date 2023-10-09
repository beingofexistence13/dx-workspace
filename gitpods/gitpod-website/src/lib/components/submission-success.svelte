<script lang="ts">
	import { interestingReads } from '$lib/contents/support';
	import CardSmall from '$lib/components/card/card-small.svelte';
	import Section from '$lib/components/section.svelte';
	import GitpodIllustration from './gitpod-illustration.svelte';

	export let title: string = '';
	export let text: string = '';

	export let contactSubmission: boolean = false;

	let clazz = '';
	export { clazz as class };
</script>

{#if contactSubmission}
	<Section class="!mt-xx-large">
		<div class={clazz}>
			<h2 class="text-center h3">
				Interesting reads that you might like
			</h2>
			<div
				class="flex flex-wrap mx-auto justify-around max-w-2xl space-y-2 sm:space-y-0 mt-xx-small"
			>
				{#each interestingReads as article}
					<CardSmall
						size="small"
						textAlign="left"
						textClassNames="!text-base"
						titleClassNames="!text-left h5"
						card={article}
						btnClassNames="self-start mt-xx-small"
						variant={article.link.btnVariant}
					/>
				{/each}
			</div>
		</div>
	</Section>
{:else}
	<div class={clazz}>
		{#if title}
			<h2 class="h3 text-center mb-8">{title}</h2>
		{/if}
		{#if text}
			<p class="text-center">
				{@html text}
			</p>
		{/if}
		<GitpodIllustration />
	</div>
{/if}
