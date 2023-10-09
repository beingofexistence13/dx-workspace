<script lang="ts">
	import GetStartedSmall from '$lib/components/screencasts/get-started-small.svelte';
	import Button from '$lib/components/ui-library/button/button.svelte';
	import MoreArticles from '$lib/components/more-articles.svelte';
	import { demoScreencasts } from '$lib/contents/screencasts';
	import Body from '$lib/components/screencasts/body.svelte';
	import type { Screencast } from '$lib/types/screencasts';
	import Header from '$lib/components/header.svelte';
	import type { PageData } from './$types';

	export let data: PageData;

	const screencasts = Object.keys(demoScreencasts);

	let selected: string = screencasts[0];

	$: screencast = demoScreencasts[selected];
	$: demoRepo = selected == 'IntelliJ' ? 'spring-petclinic' : 'voting-app';
</script>

<Header
	title="Gitpod's developer platform"
	text="Watch a short demo of Gitpod CDEs to learn how to developer faster <br/> and more securely."
	textClassNames="mb-micro md:mb-small text-large max-w-4xl mx-auto"
	fullWidth
	tight
/>

<div class="mx-auto w-fit text-center space-x-2 space-y-2 mb-7">
	<p class="font-bold text-base mb-2 text-black">Select editor</p>

	{#each screencasts as name}
		<Button
			class={selected == name
				? 'capitalize dark:!bg-primary dark:!text-black !bg-black !text-white'
				: 'capitalize'}
			variant="cta"
			on:click={() => (selected = name)}
		>
			<span class="!text-sm">{name}</span>
		</Button>
	{/each}
</div>

<Body {screencast} hideDescription>
	<div slot="custom">
		<h2 class="h5 mt-micro mb-2">Gitpod Demo</h2>

		<p class="max-w-xl">
			{screencast.description}
		</p>

		<div class="flex flex-row my-xx-small items-center space-x-2">
			<p class="text-important font-bold text-md md:text-xl">
				Try it yourself:
			</p>

			<a
				href="https://gitpod.io/#https://github.com/gitpod-io/{demoRepo}"
				target="_blank"
				data-analytics={`{"context":"screencast_page"}`}
			>
				<img
					src="/svg/open-in-gitpod.svg"
					alt="Open in Gitpod"
					class="h-3/4 md:h-full w-3/4 md:w-full"
				/>
			</a>
		</div>
	</div>
</Body>

<div class="mt-x-large md:mt-xxx-large">
	<GetStartedSmall />
	<p class="mt-6 md:mb-24 max-w-full mx-auto text-center text-base">
		Do you still have questions? Please
		<a href="/contact/sales">Talk to sales</a>.
	</p>
</div>

<MoreArticles
	title="Helpful resources"
	posts={[
		...data.posts,
		{
			title: 'Gitpodifying — The Ultimate Guide',
			excerpt:
				'I recently stumbled upon a new project on GitHub that peaked my interest. It proposed a new type of database that I was dying to try out.',
			teaserImage: '/images/guides/gitpodify/teaser.jpg',
			image: '/images/guides/gitpodify/teaser.jpg',
			href: '/guides/gitpodify',
			isNotAnActualPost: true,
			headings: [],
		},
	]}
/>
