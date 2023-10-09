import { listChangelogs, listRawChangelogs } from '$content/changelog';
import type { RequestHandler } from './$types';

function findChangelog(releaseId?: string): string {
	const rawChangelogs = listRawChangelogs();

	// Check the raw changelogs for that release id
	const rawChangelog = rawChangelogs.find(
		({ fileName }) => releaseId == fileName.slice(0, -3),
	);

	if (rawChangelog) return rawChangelog.raw;

	// If the id doesn't exist get the latest changelog
	const latestChangelog = listChangelogs().find(
		({ metadata }) => metadata.tag && metadata.tag == 'rollup',
	);

	// and return the raw body of it
	return rawChangelogs.find(
		({ fileName }) => latestChangelog.fileName == fileName,
	).raw;
}

export const GET: RequestHandler = async ({ url, locals }) => {
	const releaseId = url.searchParams.get('releaseId');
	const foundChangelog = findChangelog(releaseId);

	return new Response(foundChangelog, {
		headers: {
			'Cache-Control': 'public, max-age=3600',
		},
	});
};
