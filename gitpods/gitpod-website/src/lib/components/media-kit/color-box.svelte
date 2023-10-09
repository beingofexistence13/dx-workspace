<script lang="ts">
	export let colorName: string;
	export let colorValue: string;
	export let isDark: boolean = false;
</script>

<div
	class="w-64 sm:w-80 shadow-normal py-medium sm:pl-medium rounded-4xl text-large text-center sm:text-left mb-micro sm:mb-small sm:mx-micro {!isDark
		? 'text-dark-grey'
		: 'text-white'}"
	class:text-white={isDark}
	style={`background: ${colorValue}`}
>
	{colorName}
	<br />
	{colorValue}
</div>
