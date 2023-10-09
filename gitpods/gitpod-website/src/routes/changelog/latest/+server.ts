import { listChangelogs } from '$content/changelog';
import type { RequestHandler } from './$types';
import { json } from '@sveltejs/kit';

export const GET: RequestHandler = async () => {
	const releaseId = listChangelogs()
		.find(({ metadata }) => metadata.tag && metadata.tag == 'rollup')
		.fileName.slice(0, -3);

	return json(
		{ releaseId },
		{
			headers: {
				'Cache-Control': 'public, max-age=600',
			},
		},
	);
};
