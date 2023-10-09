<script lang="ts">
	import LinkButton from '$lib/components/ui-library/link-button';
	export let name: string;
	export let path: string;
	export let icon: string;
</script>

<LinkButton
	href={path}
	variant="cta"
	size="large"
	class="flex items-center group"
>
	<div slot="image" class="w-12 flex-shrink-0">
		<img
			class="grayscale group-hover:grayscale-0 transition-all duration-200"
			src={icon}
			alt={`${name}-icon`}
			width="24px"
		/>
	</div>
	<span class="truncate"> More on {name}</span>
</LinkButton>
