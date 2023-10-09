<script lang="ts">
	import Stories from './stories.svelte';
	import { page } from '$app/stores';
	import type { Customer } from '$content/customers';

	export let customers: Customer[];

	$: recentCustomers = customers
		.filter((customer) => customer.slug != $page.params.slug)
		.slice(0, 3);
</script>

<Stories
	title="More Customer Stories"
	customers={recentCustomers}
	class="max-w-7xl md:grid-cols-3 lg:px-9"
/>
