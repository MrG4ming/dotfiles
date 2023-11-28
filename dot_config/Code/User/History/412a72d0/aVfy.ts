import type { PageLoad, PageLoadEvent } from '../$types';

export const load: PageLoad = async (event: PageLoadEvent) => {
	const params = event.params;
	const jobId = params?.id;
	console.log(params);
};
