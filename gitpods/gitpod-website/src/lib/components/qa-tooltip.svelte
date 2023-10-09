<script lang="ts">
	import Tooltip from './tooltip.svelte';

	export let tooltip: string;
	export let text: string;
</script>

<Tooltip title={tooltip} class="inline-flex items-center">
	<span class="whitespace-nowrap mr-macro">{text}</span>
</Tooltip>
