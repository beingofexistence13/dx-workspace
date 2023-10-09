import type { RequestHandler } from '@sveltejs/kit';
import saveToSpreadsheet from '$lib/api/save-to-spreadsheet';

const whitepaperMap = {
	'cde-whitepaper': 'CDE Whitepaper Downloads',
};

export const POST: RequestHandler = async ({ request }) => {
	try {
		const body = await request.json();

		if (!body.email || !body.type || !body.name) {
			return new Response(undefined, { status: 400 });
		}

		const isSavedInSheet = await saveToSpreadsheet({
			sheetTitle: whitepaperMap[body.type],
			data: [new Date(), body.name, body.email],
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
