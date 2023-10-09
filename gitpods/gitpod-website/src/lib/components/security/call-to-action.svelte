<script>
	import {
		reportAction,
		thanksAction,
		assessmentAction,
	} from '$lib/contents/security';
	import Section from '../section.svelte';
	import Action from './action.svelte';
</script>

<Section>
	<div
		class="flex flex-col gap-x-xx-small lgx:flex-row items-center lgx:items-start justify-between max-w-6xl mx-auto space-y-large lgx:space-y-0"
	>
		{#each [thanksAction, reportAction, assessmentAction] as action}
			<Action {action} />
		{/each}
	</div>
</Section>
