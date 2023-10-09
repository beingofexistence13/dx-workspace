import type { PageServerLoad } from './$types';
import { error } from '@sveltejs/kit';
import {
	findChangelog,
	getChangelogSlug,
	listChangelogs,
} from '$content/changelog';

export const entries = () =>
	listChangelogs().map((changelog) => ({
		slug: getChangelogSlug(changelog.metadata),
	}));

export const load: PageServerLoad = async ({ params, fetch }) => {
	const changelog = findChangelog(params.slug);

	if (!changelog) {
		throw error(404, 'Unable to find changelog');
	}

	return changelog;
};
