<script lang="ts">
	import Menu from '$lib/components/docs/menu.svelte';
	import MobileMenu from '$lib/components/docs/mobile-menu/index.svelte';
	import Search from '$lib/components/docs/search.svelte';
	import { MENU } from '$lib/contents/docs/menu';
	import OnThisPageNav from '$lib/components/navigation/on-this-page-nav.svelte';
	import EditInGitpod from '$lib/components/docs/edit-in-gitpod.svelte';
	import displayBanner from '$lib/stores/display-banner';
	import type { PageData } from './$types';
	import '$lib/assets/markdown-commons.scss';
	import { page } from '$app/stores';

	export let data: PageData;
</script>

<svelte:head>
	<!-- Disable indexing on subpages of quickstart -->
	<!-- https://github.com/gitpod-io/website/issues/1462 -->
	{#if $page.url.pathname.startsWith('/docs/introduction/getting-started/quickstart/')}
		<meta name="robots" content="noindex" />
	{/if}
</svelte:head>

<div class="pb-10 lg:flex lg:pt-10">
	<div
		class:extended-sticky={$displayBanner}
		class="hidden z-20 sticky top-24 self-start lg:block lg:w-1/5"
	>
		<Search docSearchInputSelector="algolia-mobile" />
		<Menu {MENU} />
	</div>

	<div class="lg:w-3/5 lg:pl-4">
		<div class="block lg:hidden">
			<Search />
		</div>

		<MobileMenu {MENU} isIndex={data.isIndex} />

		<div class="lg:border-l lg:border-r lg:border-divider">
			<slot />
		</div>
	</div>

	<div
		class:extended-sticky={$displayBanner}
		class="lg:w-1/5 flex-col top-24 self-start sticky gap-4 pl-8 hidden lg:flex max-w-none flex-auto min-w-0"
	>
		<div class="lg:mb-4">
			<EditInGitpod isIndex={data.isIndex} />
		</div>

		<OnThisPageNav headings={data.metadata.headings} />
	</div>
</div>

<style lang="postcss">
	.extended-sticky {
		@apply top-36;
	}
</style>
