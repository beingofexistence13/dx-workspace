import { getCustomer, listCustomers } from '$content/customers';
import type { PageLoad } from './$types';

export const entries = () =>
	listCustomers().map((post) => ({ slug: post.slug }));

export const load: PageLoad = async ({ params }) => {
	return await getCustomer(params.slug);
};
