import { DBRef, ObjectId } from 'mongodb';
import type { RequestEvent } from '../../$types';
import { json } from '@sveltejs/kit';
import { Job, createJob, getJobs } from '$db/jobs';

export async function GET(event: RequestEvent) {
	const jobs = await getJobs();

	return json(jobs, { status: 200 });
}

export async function POST(event: RequestEvent) {
	const data = JSON.parse(await event.request.json());

	let job = await createJob(
		data?.name,
		data?.state,
		data?.type,
		data?.start,
		data?.end,
		data?.items
	);

	return new Response(JSON.stringify(job), { status: 201 });
}
