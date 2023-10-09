import type { RequestHandler } from '@sveltejs/kit';
import saveToSpreadsheet from '$lib/api/save-to-spreadsheet';

const workshopMap = {
	'aws-workshop': 'AWS Workshop Signups',
};

export const POST: RequestHandler = async ({ request }) => {
	try {
		const body = await request.json();

		if (!body.companyName || !body.type || !body.workshopName) {
			return new Response(undefined, { status: 400 });
		}

		const isSavedInSheet = await saveToSpreadsheet({
			sheetTitle: workshopMap[body.type],
			data: [new Date(), body.workshopName, body.companyName],
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
