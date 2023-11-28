import { start_mongo } from '$db/mongo';
import { redirect, type Handle } from '@sveltejs/kit';
import { handleLoginRedirect } from './AuthenticationHandler';
import { getSession, type Session } from '$db/sessions';
import { ObjectId } from 'mongodb';

start_mongo()
	.then((): void => {
		console.log('Mongo started.');
	})
	.catch((e) => console.error(e));

export const handle: Handle = async ({ event, resolve }) => {
	//console.log(event.url);

	if (!event.url.pathname.startsWith('/login') && !event.url.pathname.startsWith('/register')) {
		const sessionId = event.cookies.get('session');
		console.log('Session id: ', sessionId);

		if (!sessionId) {
			throw redirect(303, handleLoginRedirect(event));
		}
		if (await getSession(sessionId)) throw redirect(303, handleLoginRedirect(event));
	}

	const response = await resolve(event);

	return response;
};
