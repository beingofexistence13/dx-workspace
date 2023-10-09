<script lang="ts">
	import Octocat from '../svgs/octocat.svelte';

	const numberFormatter = Intl.NumberFormat('en-US', {
		notation: 'compact',
		maximumFractionDigits: 1,
		unitDisplay: 'long',
	});

	const stars = __GITHUB_STARS__;

	let starsFormatted: string;

	if (stars) {
		starsFormatted = numberFormatter.format(stars).toLocaleLowerCase();
	} else {
		starsFormatted = null;
	}
</script>

<a
	rel="noreferrer"
	href="https://github.com/gitpod-io/gitpod"
	target="_blank"
	class="flex items-center font-bold text-sm"
>
	<Octocat class="mr-1.5" />
	{starsFormatted}
</a>

<style lang="postcss">
	a:hover,
	a:focus {
		:global(path) {
			@apply fill-important;
		}
	}
</style>
