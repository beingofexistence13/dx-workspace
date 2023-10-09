<script lang="ts">
	import LinkButton from '$lib/components/ui-library/link-button';
	export let variant: 'primary' | 'secondary' | 'cta';
	let clazz = '';
	export { clazz as class };
</script>

<LinkButton
	{variant}
	size="medium"
	href="https://www.twitter.com/gitpod"
	rel="noopener"
	target="_blank"
	data-analytics={`{"context":"twitter_visit","variant":"social_media"}`}
	class={clazz}>Follow us on Twitter</LinkButton
>
