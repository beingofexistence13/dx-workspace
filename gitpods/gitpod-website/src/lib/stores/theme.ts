import { writable } from 'svelte/store';

let storedTheme;

if (typeof window !== 'undefined' && typeof document !== 'undefined') {
	const theme = localStorage.getItem('theme');
	if (theme === 'dark') {
		storedTheme = 'dark';
	} else if (theme === 'system') {
		storedTheme = window.matchMedia('(prefers-color-scheme: dark)').matches
			? 'dark'
			: 'light';
	} else {
		storedTheme = 'light';
	}
}

export const theme = writable(storedTheme);
