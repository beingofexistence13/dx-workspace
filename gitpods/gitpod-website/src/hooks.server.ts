export const handle = async ({ event, resolve }) => {
	event.setHeaders({
		'Content-Security-Policy':
			'frame-ancestors *.gitpod.cloud *.gitpod.io *.staging.gitpod-dev.com;',
	});

	return await resolve(event);
};
