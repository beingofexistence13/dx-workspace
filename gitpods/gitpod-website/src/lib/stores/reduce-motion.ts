import { readable } from 'svelte/store';

export const reducedMotion = readable(false, (set) => {
	if (typeof window === 'undefined') {
		// We don't need animations on the server
		set(false);
		return;
	}

	const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
	set(reduceMotion.matches);

	const updateMotionPreference = (event) => {
		set(event.matches);
	};

	reduceMotion.addEventListener('change', updateMotionPreference);

	return () => {
		reduceMotion.removeEventListener('change', updateMotionPreference);
	};
});
