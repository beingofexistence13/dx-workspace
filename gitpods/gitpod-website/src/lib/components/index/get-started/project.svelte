<script lang="ts">
	import type { Project } from '$lib/types/project';
	import LinkButton from '$lib/components/ui-library/link-button';
	import Button from '$lib/components/ui-library/button';

	export let project: Project;

	const { logo, alt, title, githubUrl, trackingName } = project;
</script>

<div class="w-72 sm:w-[28rem] inline-flex flex-col">
	<LinkButton
		class="flex h-12 items-center justify-between group !p-3"
		variant="cta"
		size="large"
		href={`https://gitpod.io#${githubUrl}`}
		target="_blank"
		aria-label={alt}
		data-analytics={`{"context":"example_workspace","label":"` +
			trackingName +
			`"}`}
		rel="noopener"
	>
		<div class="inline-flex flex-wrap space-x-2 items-center">
			<img
				src={`/${logo}`}
				{alt}
				class="ml-macro mr-[0.75rem] transition-all duration-200 delay-[50ms] grayscale group-focus:grayscale-0 group-hover:grayscale-0"
				width="27"
				height="27"
			/>
			<div
				class="w-48 text-left text-[#565252] transition-all duration-200 delay-[50ms] group-hover:text-black dark:group-hover:text-black dark:text-important"
			>
				{title}
			</div>
		</div>
		<Button
			class="hidden transition-all duration-200 delay-[50ms] md:group-hover:inline-block"
			variant="tertiary"
			size="medium">Launch workspace</Button
		>
	</LinkButton>
</div>

<style lang="postcss">
	:global(body.dark) div :global(a:hover) {
		:global(h4) {
			@apply text-black;
		}

		:global(button) {
			@apply bg-black text-important;
		}
	}
</style>
