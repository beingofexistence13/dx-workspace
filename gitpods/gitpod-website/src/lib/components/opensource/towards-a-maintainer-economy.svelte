<script lang="ts">
	import MoreArticles from '../more-articles.svelte';
	import type { BlogPost } from '$lib/types/blog';

	export let posts: BlogPost[];
</script>

<MoreArticles
	title="Acknowledging and supporting the maintainers"
	text="It wouldn’t have been possible to create Gitpod without all the amazing open-source work it's built upon. See examples below!"
	{posts}
/>
