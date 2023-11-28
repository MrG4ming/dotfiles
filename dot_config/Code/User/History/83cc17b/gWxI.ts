import { redirect } from '@sveltejs/kit';
import type { RequestEvent } from './$types';

export function GET(event: RequestEvent) {
	throw redirect(303, '/');
}
