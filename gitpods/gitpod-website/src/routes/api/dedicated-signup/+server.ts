import type { RequestHandler } from '@sveltejs/kit';
import saveToSpreadsheet from '$lib/api/save-to-spreadsheet';

const map = {
	'dedicated-signup': 'Gitpod Dedicated Signups',
};

export const POST: RequestHandler = async ({ request }) => {
	try {
		const body = await request.json();
		console.log(body);
		if (
			!body.payload.email ||
			!body.type ||
			!body.payload.name ||
			!body.payload.company ||
			!body.payload.noOfEngineers ||
			!body.payload.cloudInfrastructure ||
			!body.payload.gitProvider
		) {
			return new Response(undefined, { status: 400 });
		}

		const isSavedInSheet = await saveToSpreadsheet({
			sheetTitle: map[body.type],
			data: [new Date(), ...Object.values(body.payload)],
			uniqueColumn: 2,
		});

		if (isSavedInSheet === 'duplicate') {
			return new Response(undefined, { status: 409 });
		}

		if (!isSavedInSheet) {
			throw new Error();
		}

		return new Response('Signed up', { status: 201 });
	} catch (error) {
		return new Response('Oh no, something failed.', { status: 500 });
	}
};
