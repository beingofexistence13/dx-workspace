<script lang="ts">
	let clazz = '';
	export { clazz as class };
	export let labelLeft: string;
	export let labelRight: string;
	export let isInversed: boolean = false;
	export let checked: boolean;
	export let id: string;
</script>

<div class="text-center">
	<div
		class="switch-container inline-flex justify-center items-center space-x-0.5 {clazz} h-14 mx-auto bg-card p-1.5 rounded-5xl"
		class:checked
		class:inversed={isInversed}
	>
		<label for={id} class:text-gray-900={!checked && !isInversed}
			>{labelLeft}</label
		>
		<div
			class="relative flex items-center cursor-pointer"
			data-analytics={`{"label":"` +
				labelLeft +
				` <> ` +
				labelRight +
				` Toggle"}`}
		>
			<input {id} type="checkbox" on:change class="h-full w-full" />
		</div>
		<label for={id}>{labelRight}</label>
	</div>
</div>

<style lang="postcss">
	label {
		@apply mb-0 cursor-pointer text-h6 font-bold py-macro px-xx-small rounded-5xl transition-all duration-300;
	}
	.switch-container {
		filter: drop-shadow(0px 1px 1px rgba(0, 0, 0, 0.1));
	}
	label:first-of-type {
		@apply bg-tertiary;
	}
	label:last-of-type {
		@apply hover:text-important;
	}
	.checked label {
		&:first-of-type {
			@apply bg-card hover:text-important;
		}
		&:last-of-type {
			@apply bg-tertiary text-gray-900;
		}
	}
	.inversed label {
		&:first-of-type {
			@apply bg-card hover:text-important;
		}
		&:last-of-type {
			@apply bg-tertiary text-gray-900 hover:text-important;
		}
	}
	.inversed.checked label {
		&:first-of-type {
			@apply bg-tertiary text-gray-900 hover:text-important;
		}
		&:last-of-type {
			@apply bg-card hover:text-important;
		}
	}
</style>
