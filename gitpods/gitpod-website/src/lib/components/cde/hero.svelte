<script lang="ts">
	import Section from '$lib/components/section.svelte';
	import LinkButton from '$lib/components/ui-library/link-button';
</script>

<Section class="mb-xx-large md:mb-[200px]">
	<div class="w-80 md:w-full md:max-w-4xl mx-auto">
		<div
			class="text-important text-2xl md:text-5xl !leading-[2.3rem] md:!leading-[4rem]"
		>
			<span class="text-important highlighter font-bold"
				>Cloud development environments</span
			> <br class="hidden md:block" />
			are
			<span class="text-important highlighter font-bold"
				>on-demand and pre-configured</span
			>
			with all tools, libraries and dependencies required to be
			<span class="text-important highlighter font-bold"
				>ready-to-code</span
			>.
		</div>

		<LinkButton
			href="/contact/get-demo"
			variant="primary"
			size="large"
			class="mt-5 md:mt-8 text-center"
			>Get a demo
		</LinkButton>
	</div>
</Section>

<style lang="postcss">
	/* Apply below css if width screen size is greater than 930px */
	@media (max-width: 929px) {
		.highlighter {
			background-color: #ffe4bc;
		}
		:global(body.dark) .highlighter {
			background-color: #514f4d;
		}
	}

	@media (min-width: 930px) {
		.highlighter {
			position: relative;
		}
		.highlighter::before {
			background-color: #ffe4bc;
			content: ' ';
			position: absolute;
			width: calc(100% + 2px);
			height: 50%;
			bottom: 0;
			z-index: -1;
		}
		:global(body.dark) .highlighter::before {
			background-color: #514f4d;
		}
	}
</style>
