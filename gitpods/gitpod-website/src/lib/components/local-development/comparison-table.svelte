<script>
	import { localComparison } from '$lib/contents/local-development';
	import SectionCommon from '../section-common.svelte';
	import FeatureTable from '../ui-library/feature-table/feature-table.svelte';
</script>

<div class="comparison-wrapper m-0 p-0">
	<SectionCommon
		title="How does the setup affect their work?"
		isTitleADeepLink={true}
	>
		<FeatureTable slot="content" tableData={localComparison} />
	</SectionCommon>
</div>

<style lang="postcss">
	.comparison-wrapper :global(.inner-grid-mobile) {
		grid-template-rows: 300px 200px 320px 200px 100px;
	}
	@media (min-width: 1024px) {
		.comparison-wrapper :global(.inner-grid-desktop) {
			grid-template-rows: 300px 200px 320px 200px 100px;
		}
	}
	@media (min-width: 768px) {
		.comparison-wrapper :global(.inner-grid-desktop) {
			grid-template-rows: 390px 270px 390px 200px 150px;
		}
	}
</style>
