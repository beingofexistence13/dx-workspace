import {
	getEducationCustomer,
	listEducationCustomers,
} from '$content/education';
import type { PageLoad } from './$types';

export const entries = () =>
	listEducationCustomers().map((post) => ({
		slug: post.slug,
	}));

export const load: PageLoad = async ({ params }) => {
	return await getEducationCustomer(params.slug);
};
