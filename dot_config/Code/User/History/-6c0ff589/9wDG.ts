import { start_mongo } from '$db/mongo';
import { redirect, type Handle } from '@sveltejs/kit';
import { handleLoginRedirect } from '$lib/AuthenticationHandler';
import { dev } from '$app/environment';

start_mongo()
	.then((): void => {
		console.log('Mongo started.');
	})
	.catch((e) => console.error(e));

export const handle: Handle = async ({ event, resolve }) => {
	if (dev) console.log('Handling: ', event.url.pathname);

	if (
		!event.url.pathname.startsWith('/login') &&
		!event.url.pathname.startsWith('/register') &&
		!event.url.pathname.startsWith('/logout')
	) {
		// const sessionId = event.cookies.get('session');
		/* console.log('Session id: ', sessionId); */
		/* if (!sessionId) {
			throw redirect(303, handleLoginRedirect(event));
		} */
		/* console.log('Session cookie exists'); */
		/* const dbSession = await getSession(sessionId); */
		// TODO: hier google auth?
		/* console.log(dbSession, !dbSession); */
		/* if (!dbSession) throw redirect(303, handleLoginRedirect(event)); */
		//TODO: handle redirekt if no session is authenticated
	}

	const response = await resolve(event);

	return response;
};
