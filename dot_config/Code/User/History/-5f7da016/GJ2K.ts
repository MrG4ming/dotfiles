import type { RequestEvent } from '../$types';
import type { PageLoadEvent } from './$types';

export const load = async (event: PageLoadEvent) => {
	const data = await event.fetch('/api/jobs');

	const jsonData = await data.json();

	//console.log('After fetch: ', jsonData);

	if (data.ok) {
		return {
			jobs: jsonData
		};
	}
};
