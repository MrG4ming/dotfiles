import { redirect } from '@sveltejs/kit';
import type { RequestEvent } from './$types';

export function GET(event: RequestEvent) {
	event.cookies.delete('session');

	throw redirect(303, '/login');
}
