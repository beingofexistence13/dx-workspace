<script lang="ts">
	import type { FeatureTitle as FeatureTitleProps } from '$lib/types/feature-title';
	import FeatureTitle from './feature-title.svelte';

	export let featureTitles: FeatureTitleProps[];
	export let swap: boolean = false;
	export let customTitle: boolean = false;
	export let showKumquat: boolean = false;
	export let cardContainsLinks: boolean = false;
	export let featureTitlePadding: string =
		'px-macro py-xx-small sm:p-x-small';
</script>

<div
	class="grid grid-cols-2 lg:grid-cols-4 gap-macro sm:gap-micro max-w-[608px] lg:flex lg:max-w-none lg:justify-center mx-auto"
>
	{#each featureTitles as featureTitle, index}
		<FeatureTitle
			featureTitle={{
				...featureTitle,
				swap,
				showLeftKumquat: showKumquat ? index === 0 : false,
				showRightKumquat: showKumquat
					? index === featureTitles.length - 1
					: false,
			}}
			{featureTitlePadding}
			{customTitle}
			{cardContainsLinks}
		/>
	{/each}
</div>
