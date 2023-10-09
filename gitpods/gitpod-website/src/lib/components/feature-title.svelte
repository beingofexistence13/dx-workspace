<script lang="ts">
	import Card from './ui-library/card/card.svelte';
	import type { FeatureTitle as FeatureTitleProps } from '$lib/types/feature-title';

	export let featureTitle: FeatureTitleProps;
	export let featureTitlePadding: string;
	export let cardContainsLinks: boolean = false;
	export let customTitle: boolean;
	const { main, sub, href, third, swap, showLeftKumquat, showRightKumquat } =
		featureTitle;
</script>

{#if cardContainsLinks}
	<a {href} data-sveltekit-preload-data="hover" class="no-underline">
		<Card
			size="small"
			class="w-full sm:w-[296px] {featureTitlePadding} text-center"
		>
			{#if showLeftKumquat}
				<img
					src="/images/startups/kumquat-right.png"
					alt="Gitpod Kumquat"
					class="absolute hidden -z-10 md:block -left-[44px] -top-[16px] lgx:top-[-30px] lgx:left-[-86px] h-16 lgx:h-32 lgx:w-36"
				/>
			{/if}
			{#if showRightKumquat}
				<img
					src="/images/startups/kumquat-left.png"
					alt="Gitpod Kumquat"
					class="absolute hidden -z-10 md:block top-[110px] lgx:top-[82px] right-[-60px] lgx:right-[-112px] h-16 lgx:h-32 lgx:w-36"
				/>
			{/if}
			<!-- This is being used on /CDE -->
			{#if customTitle}
				<div class="h4 font-bold text-important !mb-0 text-left">
					<div class={swap ? 'text-base font-normal text-body' : ''}>
						{main}
					</div>
					<div
						class="{!swap
							? 'text-base font-normal text-body'
							: ''} mt-macro sm:mt-micro"
					>
						{sub}
					</div>
					{#if third}
						<div class="text-base font-normal text-body">
							{third}
						</div>
					{/if}
				</div>
			{:else}
				<h2 class="h2 !mb-0">
					<div
						class={swap ? 'text-medium font-normal text-body' : ''}
					>
						{main}
					</div>
					<div
						class="{!swap
							? 'text-medium font-normal text-body'
							: ''} mt-macro sm:mt-micro"
					>
						{sub}
					</div>
					{#if third}
						<div class="text-medium font-normal text-body">
							{third}
						</div>
					{/if}
				</h2>
			{/if}
		</Card>
	</a>
{:else}
	<Card
		size="small"
		class="w-full sm:w-[296px] {featureTitlePadding} text-center"
	>
		{#if showLeftKumquat}
			<img
				src="/images/startups/kumquat-right.png"
				alt="Gitpod Kumquat"
				class="absolute hidden -z-10 md:block -left-[44px] -top-[16px] lgx:top-[-30px] lgx:left-[-86px] h-16 lgx:h-32 lgx:w-36"
			/>
		{/if}
		{#if showRightKumquat}
			<img
				src="/images/startups/kumquat-left.png"
				alt="Gitpod Kumquat"
				class="absolute hidden -z-10 md:block top-[110px] lgx:top-[82px] right-[-60px] lgx:right-[-112px] h-16 lgx:h-32 lgx:w-36"
			/>
		{/if}
		<!-- This is being used on /CDE -->
		{#if customTitle}
			<div class="h4 font-bold text-important !mb-0 text-left">
				<div class={swap ? 'text-base font-normal text-body' : ''}>
					{main}
				</div>
				<div
					class="{!swap
						? 'text-base font-normal text-body'
						: ''} mt-macro sm:mt-micro"
				>
					{sub}
				</div>
				{#if third}
					<div class="text-base font-normal text-body">
						{third}
					</div>
				{/if}
			</div>
		{:else}
			<h2 class="h2 !mb-0">
				<div class={swap ? 'text-medium font-normal text-body' : ''}>
					{main}
				</div>
				<div
					class="{!swap
						? 'text-medium font-normal text-body'
						: ''} mt-macro sm:mt-micro"
				>
					{sub}
				</div>
				{#if third}
					<div class="text-medium font-normal text-body">
						{third}
					</div>
				{/if}
			</h2>
		{/if}
	</Card>
{/if}
