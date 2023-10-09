import { listEducationCustomers } from '$content/education';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async () => {
	return {
		customers: listEducationCustomers(),
	};
};
