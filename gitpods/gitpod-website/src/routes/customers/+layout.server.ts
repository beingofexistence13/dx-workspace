import { listCustomers } from '$content/customers';
import type { LayoutServerLoad } from './$types';

export const load: LayoutServerLoad = () => {
	return {
		customers: listCustomers(),
	};
};
