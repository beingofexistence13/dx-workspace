<script lang="ts">
	import { page } from '$app/stores';
	import { getMenuContext } from '$lib/contents/docs/menu';
	// Following line is needed to make the next & previous link work => to trigger the reactivity for $page.url.pathname
	$: menuCtx = getMenuContext($page.url.pathname);
</script>

<div
	class="flex mx-4 justify-between pt-xx-small border-t border-solid border-divider"
>
	{#if menuCtx.prev}
		<a
			href={menuCtx.prev.path}
			title={`Previous: ${menuCtx.prev.title}`}
			class="font-thin"
		>
			Previous
		</a>
	{:else}
		<div />
	{/if}
	{#if menuCtx.next}
		<a
			href={menuCtx.next.path}
			title={`Next: ${menuCtx.next.title}`}
			class="font-thin"
		>
			Next
		</a>
	{:else}
		<div />
	{/if}
</div>
