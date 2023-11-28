import type { RequestEvent } from '../$types';
import type { PageLoadEvent } from './$types';

export const load = async (event: PageLoadEvent) => {
	const data = await event.fetch('/api/jobs');

	if (data.ok) {
		return {
			jobs: data.json()
		};
	}
};
