import { stringToBeautifiedFragment } from '$lib/utils/helpers';
import { screencasts } from '$lib/contents/screencasts';
import type { PageLoad } from './$types';
import { redirect } from '@sveltejs/kit';

export const load: PageLoad = async ({ params }) => {
	const { title } = params;

	const screencast = screencasts.find(
		(s) => stringToBeautifiedFragment(s.title.slice(0, -3)) === title,
	);

	if (!screencast) {
		throw redirect(307, '/screencasts');
	}

	return {
		screencast,
		nextScreencasts: screencasts.slice(screencasts.indexOf(screencast) + 1),
	};
};
