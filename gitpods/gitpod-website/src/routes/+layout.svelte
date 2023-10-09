<script lang="ts">
	import { isEurope, removeTrailingSlash } from '$lib/utils/helpers';
	import CookieConsent from '$lib/components/banners/cookie-consent.svelte';
	import LayoutMain from '$lib/components/layout-main.svelte';
	import LayoutRoot from '$lib/components/layout-root.svelte';
	import Footer from '$lib/components/footer/index.svelte';
	import Nav from '$lib/components/main-nav/index.svelte';
	import Segment from '$lib/components/segment.svelte';
	import { cookies } from '$lib/constants';
	import { page } from '$app/stores';
	import { onMount } from 'svelte';
	import Cookies from 'js-cookie';
	import '$lib/assets/global.css';
	import '$lib/assets/styles.scss';

	onMount(() => {
		Cookies.set(cookies.NECESSARY, 'true', {
			expires: 365,
			domain: '.gitpod.io',
		});

		if (Cookies.get(cookies.ANALYTICAL) !== 'false' && !isEurope()) {
			Cookies.set(cookies.ANALYTICAL, 'true', {
				expires: 365,
				domain: '.gitpod.io',
			});
		}

		if (Cookies.get(cookies.ANALYTICAL) === 'true') {
			Cookies.set(cookies.VISITED, 'true', {
				expires: 365,
				domain: '.gitpod.io',
			});
		}
	});

	$: if ($page.url.pathname) {
		// Workaround until https://github.com/sveltejs/kit/issues/2664 is fixed
		if (typeof window !== 'undefined' && window.location.hash) {
			const deepLinkedElement = document.getElementById(
				window.location.hash.substring(1),
			);
			if (deepLinkedElement) {
				deepLinkedElement.scrollIntoView();
			}
		}
	}
</script>

<svelte:head
	><link
		rel="canonical"
		href={removeTrailingSlash(`https://www.gitpod.io${$page.url.pathname}`)}
	/></svelte:head
>

<LayoutRoot>
	<Nav />
	<LayoutMain>
		<slot />
	</LayoutMain>
	{#if $page.url.pathname !== '/extension-activation' && $page.url.pathname !== '/workshop-login/aws'}
		<Footer />
	{/if}
</LayoutRoot>
<CookieConsent />
<Segment />

<style lang="postcss">
	:global(#svelte-announcer) {
		@apply sr-only;
	}

	:global(html) {
		scroll-padding-top: 6rem;
	}
</style>
