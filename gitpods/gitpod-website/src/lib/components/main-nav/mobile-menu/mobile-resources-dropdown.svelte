<script lang="ts">
	import Arrow from '$lib/components/svgs/arrow.svelte';
	import {
		mobileGetStartedLinks,
		templateLinks,
		mobileDiscoverLinks,
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
	<p class={shown ? 'left-0 ml-3' : ''}>Resources</p>
	<Arrow
		class="absolute right-0 mr-8 h-3 w-3 transform {shown
			? 'left-0 ml-4 rotate-90'
			: '-rotate-90'}"
		fillClass={shown ? 'fill-important' : 'fill-body'}
	/>
</button>

{#if shown}
	<div class="nav-items-docs border-none flex flex-col text-lg">
		<p
			class="py-macro border-none -mx-micro px-micro no-underline text-lg text-important font-bold bg-sand-light dark:bg-dark-grey"
		>
			Get Started
		</p>
		<div class="flex divide-y divide-divider flex-col text-lg">
			{#each mobileGetStartedLinks as { href, text }}
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

	<div class="nav-items-docs border-none flex flex-col text-lg">
		<p
			class="py-macro border-none -mx-micro px-micro no-underline text-lg text-important font-bold bg-sand-light dark:bg-dark-grey"
		>
			Discover
		</p>
		<div class="flex divide-y divide-divider flex-col text-lg">
			{#each mobileDiscoverLinks as { href, text }}
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

	<p
		class="py-macro border-none -mx-micro px-micro no-underline text-lg text-important font-bold bg-sand-light dark:bg-dark-grey"
	>
		Templates
	</p>
	<div class="flex divide-y divide-divider flex-col text-lg">
		{#each templateLinks as { href, text }}
			<a class="py-macro no-underline" {href}>
				{text}
			</a>
		{/each}
	</div>
	<a
		class="flex text-lg font-normal"
		href="/docs/introduction/getting-started/quickstart"
	>
		<FullArrowRight width="12" class="mr-1" />
		<p>&nbsp;view all</p>
	</a>
{/if}

<style lang="postcss">
	/* for last-child of docs items to create a extra space*/
	.nav-items-docs > *:last-child {
		@apply pb-6;
	}
	.nav-items-docs {
		@apply !pt-0;
	}
</style>
