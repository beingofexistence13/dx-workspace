<script lang="ts">
	import MagGlass from '$lib/components/svgs/mag-glass.svelte';

	import { searchQuery } from '$lib/stores/quickstarts';
</script>

<div class="w-full">
	<div class="bg-card w-full shadow-normal py-2 rounded-2xl my-4">
		<div class="flex justify-items-start items-center relative">
			<label for="quickstart-searchinput" class="sr-only">Search</label>
			<MagGlass
				class="absolute top-1/2 left-3 -translate-y-1/2 pointer-events-none h-xx-small w-xx-small"
				alt="Search"
				aria-hidden="true"
			/>
			<input
				enterkeyhint="done"
				bind:value={$searchQuery}
				type="search"
				placeholder="Search Templates"
				id="quickstart-searchinput"
				class="box-border block w-full text-p-medium h-small pl-11 pr-3 py-2 border bg-transparent border-transparent leading-5 text-gray-600 placeholder-text-body focus:outline-none focus:bg-none focus:ring-white focus:text-important"
			/>
		</div>
	</div>
</div>
