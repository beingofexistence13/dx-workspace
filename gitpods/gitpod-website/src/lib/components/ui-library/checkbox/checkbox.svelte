<script lang="ts">
	import { nanoid } from 'nanoid';

	let className: string = '';
	export let checked: boolean = false;
	export let label: string = '';
	export let element: HTMLElement = null;
	export let hasError: boolean = false;
	export let disabled: boolean = false;
	export let labelClasses: string = '';
	export let textClassName: string = 'text-body';
	export { className as class };
	const uid = nanoid();
</script>

<input
	class="hidden absolute box-border text-important {className}"
	class:error={hasError}
	class:disabled
	{disabled}
	id={uid + label}
	bind:checked
	bind:this={element}
	on:change
	type="checkbox"
	{...$$restProps}
/>
{#if label}
	<label
		class="flex cursor-pointer mt-1 mb-2 {textClassName} {labelClasses} {disabled
			? 'pointer-events-none'
			: ''}"
		for={uid + label}
	>
		<span />
		{@html label}
	</label>
{/if}

<style lang="postcss">
	.error {
		@apply text-error border-error;
	}

	label:hover span,
	label:focus span {
		@apply border-divider;
	}

	.disabled {
		@apply pointer-events-none;
	}

	.disabled + label span {
		@apply opacity-50;
	}

	.error + label span {
		@apply text-error border-error;
	}
</style>
