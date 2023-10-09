<script lang="ts">
	import type { Customer } from '$content/customers';
	import PostPreview from '../blog/post-preview.svelte';

	import SectionCommon from '../section-common.svelte';
	export let customers: Customer[];
	export let title: string;
	export let text: string = '';
	export let id: string = '';

	let clazz = '';
	export { clazz as class };
</script>

<SectionCommon {title} {text} {$$restProps} {id}>
	<div
		slot="content"
		class="grid justify-center gap-xx-small mx-auto mt-small {clazz}"
	>
		{#each customers as { title, excerpt, image, slug }}
			<PostPreview
				post={{
					title,
					excerpt,
					slug,
					image,
					teaserImage: image,
					headings: [],
				}}
				headlineOrder="h3"
				type="customers"
				isMostRecent={true}
			/>
		{/each}
	</div>
</SectionCommon>
