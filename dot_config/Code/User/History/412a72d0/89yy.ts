import type { PageLoad, PageLoadEvent } from '../$types';

export const load: PageLoad = async (event: PageLoadEvent) => {
	const params = event.params;
	console.log(params);
};
