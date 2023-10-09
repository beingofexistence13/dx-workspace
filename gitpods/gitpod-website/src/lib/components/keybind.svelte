<!--
  @component

  The <Keybind> component is used to create accessible elements displaying keyboard keys and/or their combinations.
    Usage is as straight forward as plugging in the key combo as a child of the component, with keys separated by a `+`.
    For example:
    ```svelte
      <Keybind>Ctrl + F</Keybind>
    ```

    The component also provides dynamic keys for different platforms. This adds two special cases for keys: `CtrlCmd` and `AltOption`. These simply display the first key (Ctrl or Alt) on Windows and Linux, and use Cmd and Option for macOS.
-->
<script lang="ts">
	import { isMac as checkIsMac } from '$lib/utils/helpers';

	let slotData: HTMLSpanElement;
	let keys: string;
	$: {
		if (slotData) {
			const isMac = checkIsMac();
			keys = slotData.innerText
				.trim()
				.split('+')
				.map((key) => key.trim())
				.map((key) => {
					switch (key) {
						case 'AltOption':
							return `<kbd title="Use ⌥ (Option) on macOS and Alt on Windows / Linux">${
								isMac ? '⌥' : 'Alt'
							}</kbd>`;
						case 'CtrlCmd':
							return `<kbd title="Use ⌘ (Command) on macOS and Ctrl on Windows / Linux">${
								isMac ? '⌘' : 'Ctrl'
							}</kbd>`;
						case 'Shift':
							return `<kbd title="Shift">${
								isMac ? '⇧' : 'Shift'
							}</kbd>`;
						case 'Ctrl':
							return `<kbd title="Control">${
								isMac ? '⌃' : 'Ctrl'
							}</kbd>`;
						default:
							return `<kbd>${key}</kbd>`;
					}
				})
				.join(' + ');
		}
	}
</script>

<span>
	<span bind:this={slotData} style="display: none">
		<slot />
	</span>
	<kbd>
		{#if keys}
			{@html keys}
		{/if}
	</kbd>
</span>
