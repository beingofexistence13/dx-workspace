<script lang="ts">
	import type { Hero } from '$lib/types/hero';
	import HeroesGradientStrokeAvatar from '$lib/components/heroes-gradient-avatar.svelte';

	export let hero: Hero;
	const { avatar, name, socialMediaUsername } = hero;
</script>

<div class="flex flex-wrap flex-col mb-small sm:mb-x-large text-center mx-10">
	<div class="mb-x-small">
		<HeroesGradientStrokeAvatar image={avatar} />
	</div>
	<div>
		<h3 class="text-base mb-0">{name}</h3>
		<span class="text-base">@{socialMediaUsername}</span>
	</div>
</div>
