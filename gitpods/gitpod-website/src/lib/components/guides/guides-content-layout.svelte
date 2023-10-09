<script lang="ts">
	import FeedbackWidget from '../docs/feedback-widget.svelte';
	import PostContentLayout from '../post-content-layout.svelte';
	import Newsletter from '$lib/components/forms/newsletter.svelte';
	import type { Guide } from '$content/guides';

	export let guide: Guide;
</script>

<PostContentLayout
	{...guide}
	imagesDirectoryName="guides"
	baseUrl="https://www.gitpod.io/guides/"
>
	<slot />
</PostContentLayout>

<FeedbackWidget type="guides" class="mt-large mb-huge" />

<Newsletter
	title="Stay in the loop"
	description="Get a weekly email with our latest thinking, news, and insights."
/>
