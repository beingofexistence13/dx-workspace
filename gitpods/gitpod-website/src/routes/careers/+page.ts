import type { GreenhouseResponse } from '$lib/types/careers';
import type { PageLoad } from './$types';
import { error } from '@sveltejs/kit';

export const load: PageLoad = async ({ fetch }) => {
	const res = await fetch(
		'https://boards-api.greenhouse.io/v1/boards/gitpod/jobs',
	);

	if (!res.ok) {
		throw error(500, 'Failed to fetch job board');
	}

	const data: GreenhouseResponse = await res.json();
	return { data };
};
