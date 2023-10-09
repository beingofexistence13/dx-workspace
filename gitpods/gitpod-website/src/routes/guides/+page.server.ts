import { listGuides } from '$content/guides';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async () => {
	return {
		guides: listGuides(),
	};
};
