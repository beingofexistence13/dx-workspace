<script lang="ts">
	import { resourcesLinks } from '$lib/contents/dropdown';
	import { onMount } from 'svelte';

	import { fade } from 'svelte/transition';
	import Arrow from '../svgs/arrow.svelte';
	import displayBanner from '$lib/stores/display-banner';

	let shown: boolean = false;
	let buttonEl: HTMLButtonElement;
	let wrapperEl: HTMLDivElement;
	let linksGrid: HTMLDivElement;

	const handleClickOutside = (e: Event) => {
		const target = e.target;

		if (
			target !== buttonEl &&
			target !== wrapperEl &&
			target !== linksGrid
		) {
			shown = false;
		}
	};

	onMount(() => {
		window.addEventListener('click', handleClickOutside);

		return () => {
			window.removeEventListener('click', handleClickOutside);
		};
	});
</script>

<button
	on:click={() => (shown = !shown)}
	class="flex relative py-[29px] items-center text-base transition-all duration-200 hover:text-important focus:text-important"
	bind:this={buttonEl}
	aria-expanded={shown}
	aria-haspopup="menu"
>
	Solutions
	<Arrow
		class="ml-1.5 h-3 w-3 transform {shown ? 'rotate-180' : ''}"
		fillClass={shown ? 'fill-important' : 'fill-body'}
	/>
	{#if shown}
		<span
			in:fade={{ duration: 300 }}
			class="absolute z-20 h-[2px] bottom-0 w-full bg-important"
		/>
	{/if}
</button>

{#if shown}
	<div
		class:extended={$displayBanner}
		class="fixed top-20 left-0 w-screen flex justify-center bg-bg border-y border-divider !m-0 shadow-md dark:border-b-black dark:shadow-[0_10px_24px_0px_rgba(0,0,0,1)]"
		in:fade={{ duration: 300 }}
		bind:this={wrapperEl}
	>
		<div
			class="grid grid-cols-2 pr-[136px] xl:pr-[90px] py-x-small gap-x-8"
			bind:this={linksGrid}
		>
			<p class="font-bold text-grey text-base ml-6">Use cases</p>
			<p class="font-bold text-grey text-base ml-6">Personas</p>
			{#each resourcesLinks as { href, text, description }}
				<a
					class="
              inline-block
              py-micro
              pl-xx-small
              text-p-small
              rounded-lg
              pr-medium
              border
              border-transparent
              items
              w-[342px]
            "
					on:click={() => (shown = false)}
					{href}
				>
					<p class="text-important font-bold mb-1">{text}</p>
					<p>{description}</p>
				</a>
			{/each}
		</div>
		<a
			class="ml-large absolute inset-y-0 right-0 flex w-1/4 justify-center bg-white dark:bg-card border-y border-divider !m-0 shadow-md dark:border-b-black dark:shadow-[0_10px_24px_0px_rgba(0,0,0,1)] group"
			in:fade={{ duration: 300 }}
			href="/customers"
		>
			<div class="flex flex-col mx-auto w-10/12 justify-start mt-6">
				<img
					src="/images/navbar/customer-stories-navbar.png"
					alt="customer stories"
					class="h-36 2xl:h-44 w-72"
				/>
				<p
					class="mt-4 2xl:mt-2 text-important font-bold text-small max-w-xl text-left transition-all duration-200 delay-[50ms] group-focus:underline group-hover:underline"
				>
					Customer stories
				</p>
				<p
					class="mt-2 text-important text-left text-small max-w-lg pb-xx-small !decoration-transparent !no-underline"
				>
					Learn how customers leverage Gitpod to improve their
					developer experience, remote collaboration and security.
				</p>
			</div>
		</a>
	</div>
{/if}

<style lang="postcss">
	a.items {
		&:hover,
		&:focus {
			@apply border-divider text-body bg-sand-light;
		}
	}

	:global(body.dark) a {
		&:hover,
		&:focus {
			@apply bg-card;
		}
	}

	button {
		@apply relative;

		&::after {
			content: '';
			@apply absolute w-full h-full;
		}
	}

	.extended {
		@apply top-[125px];
	}
</style>
