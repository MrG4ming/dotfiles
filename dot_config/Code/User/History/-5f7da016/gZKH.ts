import type { RequestEvent } from '../$types';
import type { PageLoadEvent } from './$types';

export const load = async (event: PageLoadEvent) => {
	const data = await event.fetch('/api/jobs');

	console.log('After fetch: ', await data.json());

	if (data.ok) {
		return {
			jobs: data.json()
		};
	}
};
