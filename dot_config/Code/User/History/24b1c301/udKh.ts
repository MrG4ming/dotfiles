import { DBRef, ObjectId } from 'mongodb';
import type { RequestEvent } from '../../$types';
import { json } from '@sveltejs/kit';
import { getJobs } from '$db/jobs';

export async function GET(event: RequestEvent) {
	const jobs = await getJobs();

	return json(jobs, { status: 200 });
}

export async function POST(event: RequestEvent) {
	const data = JSON.parse(await event.request.json());

	return new Response(null, { status: 201 });
}
