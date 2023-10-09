<script lang="ts">
	import FeatureTitles from '../feature-titles.svelte';
	import Section from '../section.svelte';
	import { featureTitles } from '$lib/contents/home/index';

	export let cardContainsLinks: boolean = false;
</script>

<Section>
	<FeatureTitles
		{featureTitles}
		{cardContainsLinks}
		featureTitlePadding="px-macro py-xx-small sm:px-small sm:py-x-small"
	/>
</Section>
