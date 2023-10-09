<script lang="ts">
	import { stringToBeautifiedFragment } from '$lib/utils/helpers';
	import type { Screencast } from '$lib/types/screencasts';
	import Logo from '../svgs/logo.svelte';

	export let screencast: Screencast;
	export let headlineOrder: 'h3' | '' = '';
</script>

<a
	href={screencast.href ||
		`/screencasts/${stringToBeautifiedFragment(
			screencast.title.slice(0, -3),
		)}`}
	class="cast relative flex flex-col flex-nowrap min-w-full text-left mb-micro py-micro pl-x-small z-10 rounded-t-2xl bg-right h-56"
	data-analytics={`{"variant":"preview"}`}
>
	<div class="flex flex-col h-full">
		<Logo height="40" width="56" />
		<div class="flex justify-center">
			{#if headlineOrder === 'h3'}
				<h3 class="h2 py-8">{screencast.title}</h3>
			{:else}
				<h2 class="py-8">{screencast.title}</h2>
			{/if}
		</div>
	</div>
</a>

<style lang="postcss">
	.cast {
		padding-right: 40%;
		background: linear-gradient(
			205.82deg,
			var(--white) 11.31%,
			var(--sand-dark) 83.69%
		);
	}
	:global(body.dark) .cast {
		background: linear-gradient(205.82deg, #332d23 11.31%, #0f0e0b 83.69%);
	}
	.cast:hover::after,
	.cast:hover::before,
	.cast:focus::after,
	.cast:focus::before {
		content: '';
		@apply absolute;
	}
	.cast:hover::after,
	.cast:focus::after {
		@apply top-0 left-0 right-0 bottom-0;
		background: rgba(18, 16, 12, 0.7);
		border-radius: inherit;
	}
	.cast:hover::before,
	.cast:focus::before {
		border: transparent solid;
		border-width: 20px 36px;
		border-left-color: white;
		z-index: 5;
		left: 45%;
		top: 45%;
	}
	.cast h2,
	.cast .h2 {
		@apply m-0 leading-6 flex-1;
		font-size: var(--xx-small);
	}
	.cast > div::after {
		content: '';
		@apply -z-10 absolute right-0 top-8 bottom-8 pointer-events-none;
		background-image: url('/images/index/vscode-desktop.webp');
		border-radius: 0.25rem;
		background-size: auto 100%;
		width: 150px;

		@media (max-width: 505px) {
			width: 115px;
		}
	}
</style>
