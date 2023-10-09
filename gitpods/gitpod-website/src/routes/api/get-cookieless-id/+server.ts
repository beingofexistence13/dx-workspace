import { json as json$1 } from '@sveltejs/kit';
import type { RequestHandler } from '@sveltejs/kit';
import { getCookielessId } from '$lib/utils/analytics';

export const GET: RequestHandler = async ({ request }) => {
	try {
		const ip = request.headers.get('x-forwarded-for')?.split(',')[0];
		if (!ip) {
			return json$1(
				{ message: 'no x-forwarded-for header provided' },
				{
					status: 400,
				},
			);
		}
		const cookielessId = await getCookielessId(
			ip,
			request.headers.get('user-agent') || '',
		);

		return json$1(
			{
				cookielessId: cookielessId,
			},
			{
				status: 200,
			},
		);
	} catch (e) {
		return json$1(
			{ message: `failed` },
			{
				status: 500,
			},
		);
	}
};
