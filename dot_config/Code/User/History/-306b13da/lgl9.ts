import { start_mongo } from '$db/mongo';
import { redirect, type Handle } from '@sveltejs/kit';
import { handleLoginRedirect } from './AuthenticationHandler';

start_mongo()
	.then((): void => {
		console.log('Mongo started.');
	})
	.catch((e) => console.error(e));

export const handle: Handle = async ({ event, resolve }) => {
	console.log(event.url.pathname.startsWith('/login'));

	if (!event.url.pathname.startsWith('/login') || !event.url.pathname.startsWith('/register')) {
		if (!event.cookies.get('session')) {
			throw redirect(303, handleLoginRedirect(event));
		}
	}

	const response = await resolve(event);
	return response;
};
