import { redirect } from '@sveltejs/kit';
import type { RequestEvent } from './$types';
import type { deleteSession } from '$db/sessions';
import { ObjectId } from 'mongodb';

export function GET(event: RequestEvent) {
	const sessionId = event.cookies.get('session');
	deleteSession(new ObjectId(sessionId));

	event.cookies.delete('session');

	throw redirect(303, '/login');
}
