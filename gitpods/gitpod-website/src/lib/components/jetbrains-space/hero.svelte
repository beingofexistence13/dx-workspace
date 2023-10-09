<script>
	import Section from '../section.svelte';
	import LinkButton from '$lib/components/ui-library/link-button';
</script>

<Section class="hero relative text-center lg:text-left pb-x-large lg:pb-0">
	<div class="text-box lg:pt-x-large mx-auto lg:mx-0">
		<h1 class="h1">Gitpod vs JetBrains Space</h1>
		<p class="mx-auto max-w-lg lg:mx-0 text-large">
			Gitpod is the vendor neutral, open-source platform that integrates
			with your individual stack including all JetBrains IDEs.
		</p>
		<LinkButton
			class="mt-x-small"
			variant="primary"
			size="large"
			href="https://gitpod.io/login/">Start for free</LinkButton
		>
	</div>
	<img
		class="absolute max-w-2xl right-0 top-1/2 -z-10 hidden lg:block"
		src="/images/jetbrains-space/git-providers.png"
		alt="Git Providers"
	/>
</Section>

<style lang="postcss">
	:global(section.hero) {
		@apply lg:mb-52 !important;
	}

	.h1 {
		@apply mb-micro md:mb-xx-small;
	}

	.text-box {
		max-width: 645px;
	}

	p {
		max-width: 547px;
	}

	img {
		transform: translateX(25%) translateY(-40%);
		width: 40vw;
	}
</style>
