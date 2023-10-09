<script lang="ts">
	import FeatureTitles from '$lib/components/feature-titles.svelte';
	import Section from '$lib/components/section.svelte';
	import { featureTitles } from '$lib/contents/cde-manifesto';
</script>

<Section>
	<h3
		class="text-left sm:text-center text-2xl sm:text-5xl font-bold mb-xx-small sm:mb-small"
	>
		CDE principles
	</h3>
	<FeatureTitles
		{featureTitles}
		featureTitlePadding="px-macro py-xx-small sm:px-small sm:py-x-small"
		customTitle={true}
	/>
</Section>
