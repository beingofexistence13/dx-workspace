<script lang="ts">
	import { isAnExternalLink } from '$lib/utils/helpers';
	import { authorSocialMediaLinks } from '$lib/contents/authors';

	import type { BlogPost } from '$lib/types/blog';
	import Avatars from '$lib/components/ui-library/avatars';
	import type { Guide } from '$content/guides';
	import Pill from '../pill.svelte';

	export let post: BlogPost | Guide;
	export let isMostRecent: boolean = false;
	export let type: 'blog' | 'guides' | 'customers' | 'education';
	export let layout: 'row' | 'column' = 'column';
	export let teaserHeightClass: string = 'h-64';
	export let availability: boolean = true;
	export let headlineOrder: 'h3' | '' = '';
	export let badge: string = '';
	export let textWidth: string = '';

	const generateURL = (href?: string, slug?: string) => {
		if (href) return href;
		if (type === 'education') return `/discover/education/${slug}`;
		return `/${type}/${slug}`;
	};

	$: href = generateURL(post['href'], post.slug);

	$: target =
		post && post['href'] && isAnExternalLink(post['href'])
			? '_blank'
			: undefined;
</script>

<a
	{href}
	{target}
	data-sveltekit-preload-data="hover"
	class:pointer-events-none={!availability}
	tabindex={!availability && -1}
	class="flex flex-col max-w-sm lg:max-w-none text-left group {!isMostRecent
		? 'bg-sand-dark dark:bg-card'
		: 'stroked'} {layout === 'column'
		? ''
		: 'lg:flex-row min-h-[200px] w-full'} rounded-xl transition-all duration-200 {availability &&
		'hover:shadow-normal focus:shadow-normal'}"
	data-analytics={`{"context":"grid","variant":"preview"}`}
>
	{#if isMostRecent}
		<div>
			<div
				role="img"
				aria-label={`${type === 'blog' ? 'Blog post' : 'Guide'}: ${
					post.title
				}`}
				class="object-coverm-auto overflow-hidden rounded-t-xl bg-center bg-cover w-full {teaserHeightClass} {layout ===
				'column'
					? ''
					: 'lg:rounded-l-xl aspect-square lg:rounded-tr-none lg:w-60 lg:h-full'}"
				style={`background-image: url(${
					post['isNotAnActualPost']
						? post.image
						: `/images/${type}/${post.slug}/${post.image}`
				});`}
			/>
		</div>
	{/if}
	<div
		class="{layout === 'column'
			? 'flex-col h-full flex-nowrap'
			: 'flex-wrap gap-y-micro w-full gap-x-small'} flex lg:justify-between p-xx-small"
	>
		<div class="{textWidth ? textWidth : 'max-w-3xl'} ">
			<div class="flex gap-macro {badge || post.tags ? 'mb-micro' : ''}">
				{#if badge}
					<Pill text={badge} variant="orange" />
				{/if}
				{#if post.tags}
					{#each post.tags as tag}
						<Pill
							class="!text-important {isMostRecent
								? ''
								: 'bg-sand-light dark:bg-light-black'}"
							variant={isMostRecent ? 'gray' : 'transparent'}
							text={tag}
						/>
					{/each}
				{/if}
			</div>
			{#if !availability}
				<Pill text="soon" variant="pink" />
			{/if}
			<div class:mt-micro={!availability}>
				{#if headlineOrder === 'h3'}
					<h3
						class="text-h4 text-important transition-all duration-200 delay-[50ms] group-focus:underline group-hover:underline"
					>
						{post.title}
					</h3>
				{:else}
					<h2
						class="text-h4 text-important transition-all duration-200 delay-[50ms] group-focus:underline group-hover:underline"
					>
						{post.title}
					</h2>
				{/if}
			</div>
			<p>{post.excerpt}</p>
		</div>
		<p class="mt-micro md:mt-x-small">
			<span>
				{#if post.author}
					<Avatars
						usernames={post.author}
						socialMediaLinks={authorSocialMediaLinks}
						socialMediaLinkClasses="hover:drop-shadow"
					/>
				{/if}
				{#if post.date}
					<span class="date text-p-small ml-macro">
						{new Date(Date.parse(post.date)).toLocaleDateString(
							undefined,
							{
								year: 'numeric',
								month: 'short',
								day: 'numeric',
							},
						)}
					</span>
				{/if}
			</span>
		</p>
	</div>
</a>
