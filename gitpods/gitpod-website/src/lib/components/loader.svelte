<script lang="ts">
	import { fade } from 'svelte/transition';

	let clazz = '';

	export { clazz as class };
	export let height: number = 24;
	export let width: number = 24;
	export let borderWidth: number = 4;
	export let isPositionedCenter: boolean = false;
</script>

<div class:positioned-center={isPositionedCenter} in:fade>
	<div
		style="height: {height}px; width: {width}px; border: {borderWidth}px solid var(--sub); border-top-color: var(--brand-ripe);"
		class="loader rounded-full {clazz}"
		aria-label="Loading..."
	/>
</div>

<style lang="postcss">
	@keyframes spinner {
		0% {
			transform: scale(1) rotate(0deg);
		}

		50% {
			transform: scale(1.25) rotate(360deg);
		}

		100% {
			transform: scale(1) rotate(720deg);
		}
	}

	div {
		@apply inline-block;
	}

	.loader {
		animation: spinner 1.75s cubic-bezier(1, 0.45, 0.45, 1) infinite;
	}

	.positioned-center {
		@apply absolute left-1/2;
		transform: translateX(-50%);
	}
</style>
