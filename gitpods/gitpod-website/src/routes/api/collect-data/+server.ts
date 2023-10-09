import { json as json$1 } from '@sveltejs/kit';
import type { RequestHandler } from '@sveltejs/kit';
import fetch from 'node-fetch';
import { getCookielessId } from '$lib/utils/analytics';
import type { AnalyticsPayload, PageProps } from '$lib/types/analytics';
import { SEGMENT_KEY } from '$env/static/private';
import { dev } from '$app/environment';

const allowedEvents = [
	'component_loaded',
	'email_submitted',
	'extension_installed',
	'extension_uninstalled',
	'feedback_submitted',
	'message_submitted',
	'screencast_started',
	'waitlist_joined',
	'website_clicked',
	'whitepaper_downloaded',
	'aws_workshop_submission',
];

export const POST: RequestHandler = async ({ request }) => {
	const body = (await request.json()) as AnalyticsPayload;
	const ip = request.headers.get('x-forwarded-for')?.split(',')[0];
	if (!ip) {
		return json$1(
			{ message: 'no x-forwarded-for header provided' },
			{
				status: 400,
			},
		);
	}
	const agent = request.headers.get('user-agent') || '';

	const hash = await getCookielessId(ip, agent);

	const maskIp = (ip: string) => {
		const octets = ip.split('.');
		return octets?.length == 4
			? octets.slice(0, 3).concat(['0']).join('.')
			: undefined;
	};

	const getPrimaryLanguage = () => {
		const languages = request.headers.get('accept-language');
		if (languages) {
			return languages.split(',')[0];
		}
	};

	const getServerContext = () => {
		return {
			userAgent: agent,
			ip: maskIp(ip),
			locale: getPrimaryLanguage(),
		};
	};

	try {
		const basicAuthHeader = `${SEGMENT_KEY}:`;
		const authHeader = Buffer.from(basicAuthHeader).toString('base64');
		const [trackingMethod, anonymousId] = body.cookieId
			? ['cookie', body.cookieId]
			: ['cookieless', hash];
		switch (body.type) {
			case 'event':
				if (!body.eventName)
					return json$1(
						{ message: 'Please provide eventName' },
						{
							status: 400,
						},
					);
				if (!allowedEvents.includes(body.eventName)) {
					return json$1(
						{ message: 'Invalid eventName passed.' },
						{
							status: 400,
						},
					);
				}
				await fetch('https://api.segment.io/v1/track', {
					method: 'POST',
					headers: {
						'Content-Type': 'application/json',
						Authorization: `Basic ${authHeader}`,
					},
					body: JSON.stringify({
						anonymousId: anonymousId,
						event: body.eventName,
						properties: body.props,
						context: {
							...body.context,
							...getServerContext(),
							trackingMethod: trackingMethod,
							cookielessId: hash,
						},
						sentAt: new Date().toISOString(),
					}),
				});

				break;
			case 'identity':
				if (!body.traits)
					return json$1(
						{ message: 'Please provide traits' },
						{
							status: 400,
						},
					);
				await fetch('https://api.segment.io/v1/identify', {
					method: 'POST',
					headers: {
						'Content-Type': 'application/json',
						Authorization: `Basic ${authHeader}`,
					},
					body: JSON.stringify({
						anonymousId: anonymousId,
						traits: body.traits,
						context: {
							...body.context,
							...getServerContext(),
							trackingMethod: trackingMethod,
							cookielessId: hash,
						},
						sentAt: new Date().toISOString(),
					}),
				});

				break;
			case 'page':
				if (!body.props.url || !body.props.path)
					return json$1(
						{
							message: 'Please include url and path in props',
						},
						{
							status: 400,
						},
					);
				// If application is not running in Dev Mode and URL is not from gitpod.io then return error and also return error if url doesnt contains gitpod-kumquat.netlify.app
				if (
					!dev /* For Dev mode */ &&
					!body.props.url.startsWith(
						'https://www.gitpod.io',
					) /* For Production */ &&
					!body.props.url.includes(
						'gitpod-kumquat.netlify.app',
					) /* For Staging */
				) {
					return json$1(
						{ message: 'Invalid URL provided' },
						{
							status: 400,
						},
					);
				}
				await fetch('https://api.segment.io/v1/page', {
					method: 'POST',
					headers: {
						'Content-Type': 'application/json',
						Authorization: `Basic ${authHeader}`,
					},
					body: JSON.stringify({
						anonymousId: anonymousId,
						properties: body.props as PageProps,
						context: {
							...body.context,
							...getServerContext(),
							trackingMethod: trackingMethod,
							cookielessId: hash,
						},
						sentAt: new Date().toISOString(),
					}),
				});
				break;
			default:
				return json$1(
					{ message: 'please provide valid type' },
					{
						status: 400,
					},
				);
		}

		return json$1({ message: 'success' });
	} catch (e) {
		return json$1(
			{ message: `failed` },
			{
				status: 500,
			},
		);
	}
};
