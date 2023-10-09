import { json } from '@sveltejs/kit';
import type { RequestHandler } from '@sveltejs/kit';
import { routeToHandler } from '$lib/api/feedback';

export const POST: RequestHandler = async ({ request }) => {
	const data = await request.json();

	const submitFeedback = routeToHandler(data.type);

	try {
		const response = await submitFeedback(data);

		return new Response(response.body, {
			status: response.statusCode,
			headers: {
				'Content-Type': 'application/json',
			},
		});
	} catch (err) {
		return json(err, {
			status: 500,
		});
	}
};
