import type Component from './button.svelte';

export declare class Button extends Component {
	$$prop_def: Omit<
		Partial<svelte.JSX.HTMLAttributes<HTMLButtonElement>>,
		'size'
	> &
		Component['$$prop_def'];

	$$events_def: { click: MouseEvent } & Component['$$events_def'];

	$$slot_def: { default: {}; image: {} };
}

export declare type ButtonVariations =
	| 'primary'
	| 'secondary'
	| 'cta'
	| 'tertiary'
	| 'unstyled'
	| 'white'
	| 'gray';

export declare type ButtonSizes = 'small' | 'normal' | 'medium' | 'large';
