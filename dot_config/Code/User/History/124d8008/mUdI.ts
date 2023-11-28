import { redirect } from '@sveltejs/kit';
import type { PageServerLoad, PageServerLoadEvent } from './$types';
import { handleLoginRedirect } from '../../AuthenticationHandler';

export const load: PageServerLoad = async (event: PageServerLoadEvent) => {
	const sessionId = event.cookies.get('session');
	if (!sessionId) {
		throw redirect(302, handleLoginRedirect(event));
	}
};
