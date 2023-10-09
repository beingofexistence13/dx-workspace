import type { RequestHandler } from '@sveltejs/kit';

import saveToSpreadsheet from '$lib/api/save-to-spreadsheet';

const signupTypeToSheetTitle = {
	'java-panel-discussion': 'Java Panel Discussion Registrations',
	'getting-started-with-nuaware':
		'Getting started with Gitpod Nuaware registrations',
	'shares-cde-adoption': 'Webinar registrations - Shares customer stories',
};

export const POST: RequestHandler = async ({ request }) => {
	try {
		const body = await request.json();

		if (!body.email || !body.type || !body.name || !body.company) {
			return new Response(undefined, { status: 400 });
		}

		const isSavedInSheet = await saveToSpreadsheet({
			sheetTitle: signupTypeToSheetTitle[body.type],
			data: [new Date(), body.name, body.email, body.company],
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
