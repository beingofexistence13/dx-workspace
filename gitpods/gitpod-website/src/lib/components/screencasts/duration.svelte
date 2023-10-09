<script lang="ts">
	import { beforeUpdate } from 'svelte';

	let clazz = '';
	export { clazz as class };
	export let duration: number;
	let screencastDurationMinutes: number;
	let screencastDurationSeconds: number;

	beforeUpdate(() => {
		screencastDurationMinutes = Math.floor(duration / 60);
		screencastDurationSeconds = duration % 60;
	});
</script>

<time class="text-important {clazz}">
	Duration: {screencastDurationMinutes}m {screencastDurationSeconds}s
</time>
