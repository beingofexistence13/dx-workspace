<script lang="ts">
	import PopularQuickstartItem from './popular-quickstart-item.svelte';
	import { popularQuickstarts } from '$lib/stores/quickstarts';
</script>

<div class="grid grid-cols-1 md:grid-cols-2 gap-4">
	{#each $popularQuickstarts as item}
		<PopularQuickstartItem
			icon={item.icon}
			name={item.title}
			path={item.path}
		/>
	{/each}
</div>
