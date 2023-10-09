import type { ChangelogEntry } from '$lib/types/changelog-entry';
import { listChangelogs } from '$content/changelog';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async () => {
	return {
		changelogs: listChangelogs(),
	};
};
