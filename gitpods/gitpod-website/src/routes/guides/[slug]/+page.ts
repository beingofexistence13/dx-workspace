import { getGuide, listGuides } from '$content/guides';
import type { PageLoad } from './$types';

export const entries = () =>
	listGuides().map((guide) => ({ slug: guide.slug }));

export const load: PageLoad = async ({ params }) => {
	return await getGuide(params.slug);
};
