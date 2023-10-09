import type { SvelteComponent } from 'svelte';

declare const _textareaProps: {
	value: string;
	class?: string;
	element?: HTMLElement;
};

declare const _textareaEvents: {
	change: Event;
};

declare const _textareaSlots: {};

export declare type Props = typeof _textareaProps;
export declare type Events = typeof _textareaEvents;
export declare type Slots = typeof _textareaSlots;

export {};

export default class Textarea extends SvelteComponent<Props, Events, Slots> {}
