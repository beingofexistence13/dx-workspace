import type Component from './link-button.svelte';

export declare class LinkButtonType extends Component {
	$$prop_def: Omit<
		Partial<svelte.JSX.HTMLAttributes<HTMLAnchorElement>>,
		'size'
	> &
		Component['$$prop_def'];

	$$events_def: { click: MouseEvent; mouseover: MouseEvent };
	$$slot_def: { default: {}; image: {} };
}

export declare type ButtonVariations =
	| 'primary'
	| 'secondary'
	| 'cta'
	| 'tertiary'
	| 'unstyled'
	| 'gray'
	| 'white'
	| 'customTertiary';

export declare type ButtonSizes = 'small' | 'normal' | 'medium' | 'large';
