import { redirect } from '@sveltejs/kit';
import type { PageServerLoad, PageServerLoadEvent } from './$types';
import { handleLoginRedirect } from '../../AuthenticationHandler';
import { getSession } from '$db/sessions';

export const load: PageServerLoad = async (event: PageServerLoadEvent) => {
	const sessionId = event.cookies.get('session');
	/* console.log('Home page cookie read: ', sessionId); */

	if (!sessionId) {
		throw redirect(303, handleLoginRedirect(event));
	}
	if (await getSession(sessionId)) throw redirect(303, handleLoginRedirect(event));
};
