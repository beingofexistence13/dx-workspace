<script lang="ts">
	import type { Image } from '$lib/types/image';
	export let image: Image;
	const { src, alt, styles } = image;
</script>

<div class="flex items-center justify-center h-[170px] w-[170px] rounded-full">
	<img
		{src}
		{alt}
		style={styles}
		class="{image.class} rounded-full h-[153px] w-[153px] grayscale object-cover"
	/>
</div>

<style lang="postcss">
	div {
		background-image: linear-gradient(
			to right,
			var(--off-white-1),
			var(--brand-ripe)
		);
	}

	:global(body.dark) div {
		background-image: linear-gradient(
			to right,
			var(--black),
			var(--brand-ripe)
		);
	}
</style>
