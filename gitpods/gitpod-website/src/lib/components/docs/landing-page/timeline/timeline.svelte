<script lang="ts">
	import { listChangelogsMeta } from '$content/changelog';
	import TimelineItem from './timeline-item.svelte';

	const changelogs = listChangelogsMeta().slice(0, 5);
</script>

<section id="timeline">
	<div class="container order-2 mb-8 mx-auto flex flex-wrap">
		<div class="flex flex-wrap w-full">
			{#each changelogs as entry}
				<TimelineItem timelineItem={entry} />
			{/each}
		</div>
	</div>
</section>
