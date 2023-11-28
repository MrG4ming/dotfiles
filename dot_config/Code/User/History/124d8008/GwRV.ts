import type { PageServerLoad, PageServerLoadEvent } from './$types';

export const load: PageServerLoad = async (event: PageServerLoadEvent) => {
	const storedCookie = event.cookies.get('session');
	console.log(storedCookie);
};
