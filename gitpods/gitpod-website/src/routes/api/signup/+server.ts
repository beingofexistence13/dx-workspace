import { json } from '@sveltejs/kit';
import type { RequestHandler } from '@sveltejs/kit';
import type { SignupData } from '$lib/api/api';
import { signup } from '$lib/api/signup';

export const POST: RequestHandler = async ({ request }) => {
	const body: SignupData = await request.json();

	try {
		const response = await signup(body);

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
