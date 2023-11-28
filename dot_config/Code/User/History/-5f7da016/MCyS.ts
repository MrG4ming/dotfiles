import type { RequestEvent } from '../$types';
import type { PageLoadEvent } from './$types';

export const load = async (event: PageLoadEvent) => {
	const data = await event.fetch('/api/jobs');

	console.log('After fetch: ', data.json());

	if (data.ok) {
		return {
			jobs: data.json()
		};
	}
};
