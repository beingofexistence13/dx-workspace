<script lang="ts">
	import LinkButton from '$lib/components/ui-library/link-button';
	import ButtonsWrapper from '../buttons-wrapper.svelte';
	import { onMount } from 'svelte';
	import { trackEvent } from '$lib/components/segment.svelte';
	import { getFeatureFlag } from '$lib/utils/feature-flag-provider';
	let homepageCtaFlagValue = null;
	onMount(async () => {
		getFeatureFlag('homepageHeroCta', false, async (val) => {
			homepageCtaFlagValue = val;
			trackEvent('component_loaded', {
				experiments_variant: homepageCtaFlagValue
					? 'homepage_cta_start_for_free_loaded'
					: 'homepage_cta_try_for_free_loaded',
			});
		});
	});
</script>

<div class="hero mt-x-small" data-analytics={`{"position":"hero"}`}>
	<div class="hero__text">
		<h1 class="homeh1">
			Always<br /> ready-to-code.
		</h1>
		<p
			id="choose-project-observer-target"
			class="hero__intro-text text-large max-w-xl"
		>
			The developer platform for on-demand cloud development environments.
			Create software faster and more securely.
		</p>
		<div class="hero__action">
			<ButtonsWrapper class="mt-x-small lg:mt-small mb-x-small">
				{#if homepageCtaFlagValue}
					<LinkButton
						variant="primary"
						href="https://gitpod.io/login/"
						size="large"
						data-analytics={`{"experiments_variant":"homepage_cta_start_for_free_clicked"}`}
						>Start for free</LinkButton
					>
				{:else}
					<LinkButton
						variant="primary"
						href="https://gitpod.io/login/"
						size="large"
						data-analytics={`{"experiments_variant":"homepage_cta_try_for_free_clicked"}`}
						>Try for free</LinkButton
					>
				{/if}
				<LinkButton variant="cta" href="contact/get-demo" size="large"
					>Get a demo</LinkButton
				>
			</ButtonsWrapper>
		</div>
	</div>
	<div class="hero__illustration">
		<img
			src="/images/illustration-large.webp"
			alt="Gitpod in a Nutshell"
			width="700"
			height="724"
			class="block dark:hidden"
		/>
		<img
			src="/images/illustrattion-large-dark.webp"
			alt="Gitpod in a Nutshell"
			width="700"
			height="724"
			class="hidden dark:block"
		/>
	</div>
</div>

<style lang="scss">
	.hero {
		display: flex;
		align-items: center;
		justify-content: center;

		@media (max-width: 647px) {
			flex-direction: column;
			margin: var(--small) auto 0;
			max-width: 450px;
		}

		&__text {
			max-width: 700px;
			flex: 0 0 50%;

			@media (max-width: 972px) {
				flex: 0 0 50%;
			}

			@media (max-width: 698px) {
				flex: 0 0 54%;
			}
		}

		&__intro-text {
			margin-top: -16px;

			@media (max-width: 972px) {
				font-size: var(--p-medium);
			}
		}

		&__illustration {
			max-width: 700px;
			padding-left: 70px;
			padding-top: 20px;
			flex: 1;

			@media (max-width: 972px) {
				margin-top: var(--micro);
				padding: 0;
			}
		}
	}
</style>
