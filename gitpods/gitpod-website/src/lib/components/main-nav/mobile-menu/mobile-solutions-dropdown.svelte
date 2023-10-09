<script lang="ts">
	import Arrow from '$lib/components/svgs/arrow.svelte';
	import {
		mobilePersonasLinks,
		mobileUseCasesLinks,
	} from '$lib/contents/dropdown';
	import { page } from '$app/stores';
	import FullArrowRight from '$lib/components/svgs/full-arrow-right.svelte';
	export let shown: boolean = false;
</script>

<button
	class="flex items-center text-p-large text-left hover:text-important {shown
		? 'font-semibold text-important'
		: 'text-body'}"
	on:click={() => (shown = !shown)}
>
	<p class={shown ? ' left-0 ml-3' : ''}>Solutions</p>
	<Arrow
		class="absolute right-0 mr-8 h-3 w-3 transform {shown
			? 'left-0 ml-4 rotate-90'
			: '-rotate-90'}"
		fillClass={shown ? 'fill-important' : 'fill-body'}
	/>
</button>

{#if shown}
	<div class="nav-items-solutions border-none flex flex-col text-lg">
		<p
			class="py-macro border-none -mx-micro px-micro no-underline text-lg text-important font-bold bg-sand-light dark:bg-dark-grey"
		>
			Use cases
		</p>
		<div class="flex divide-y divide-divider flex-col text-lg">
			{#each mobileUseCasesLinks as { href, text }}
				<a
					{href}
					class="py-macro no-underline text-body hover:text-important {$page
						.url.pathname === '/'
						? /\/$/.test(href)
						: href.indexOf($page.url.pathname) >= 0
						? '!text-important'
						: ''}"
				>
					{text}
				</a>
			{/each}
		</div>
	</div>

	<div class="border-none flex flex-col text-lg">
		<p
			class="py-macro border-none -mx-micro px-micro no-underline text-lg text-important font-bold bg-sand-light dark:bg-dark-grey"
		>
			Personas
		</p>
		<div class="flex divide-y divide-divider flex-col text-lg">
			{#each mobilePersonasLinks as { href, text }}
				<a
					{href}
					class="py-macro no-underline text-body hover:text-important {$page
						.url.pathname === '/'
						? /\/$/.test(href)
						: href.indexOf($page.url.pathname) >= 0
						? '!text-important'
						: ''}"
				>
					{text}
				</a>
			{/each}
		</div>
	</div>
	<a class="flex text-lg font-normal" href="/customers">
		<FullArrowRight width="14" class="mr-1" />
		<p>Customer stories</p>
	</a>
{/if}

<style lang="postcss">
	/* for last-child of docs items to create a extra space*/
	.nav-items-solutions > *:last-child {
		@apply pb-6;
	}
	.nav-items-solutions {
		@apply !pt-0;
	}
</style>
