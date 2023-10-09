<script lang="ts">
	import CalendlyEmbed from '../get-demo/calendly-embed.svelte';
	import HeaderDescription from '$lib/components/events/header-description.svelte';
</script>

<header class="flex justify-between mt-small">
	<div>
		<HeaderDescription
			class="!m-0"
			title="Let's meet at KubeCon EU, booth SU22"
			label="Conference"
			date="April 19-21"
			location="Amsterdam, The Netherlands"
			description="Our CEO and CTO will be at KubeCon. Schedule a meeting now to discuss running cloud development environments at your company.      <br/><br/>
      See you at Booth SU22!"
		/>
	</div>

	<div>
		<CalendlyEmbed
			calendlyUrl="https://calendly.com/d/yyt-j28-84m?primary_color=ffae33"
		/>
	</div>
</header>

<style lang="postcss">
	header {
		@media (max-width: 810px) {
			@apply flex-col items-center gap-y-x-small;
		}
	}

	div {
		&:first-child {
			flex: 0 0 40%;

			@media (max-width: 1000px) {
				flex: 0 0 50%;
			}

			@media (min-width: 811px) {
				@apply mt-huge;
			}
		}

		&:last-child {
			@apply w-full max-w-[600px];
			@media (min-width: 811px) {
				flex: 0 0 46%;
			}
		}
	}
</style>
