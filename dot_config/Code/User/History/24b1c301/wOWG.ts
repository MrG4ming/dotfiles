import { DBRef, ObjectId } from 'mongodb';
import type { RequestEvent } from '../../$types';
import { json } from '@sveltejs/kit';
import { Job, createJob, deleteJob, getJobs } from '$db/jobs';

export async function GET(event: RequestEvent) {
	const jobs = await getJobs();

	return json(jobs, { status: 200 });
}

export async function POST(event: RequestEvent) {
	const data = await event.request.json();

	//console.log(data.name);

	let job = await createJob(
		data?.name,
		data?.state,
		data?.type,
		data?.start,
		data?.end,
		data?.items
	);

	return new Response(JSON.stringify({ message: 'Job created!' }), { status: 201 });
}

export async function DELETE(event: RequestEvent) {
	const data = await event.request.json();

	deleteJob(new ObjectId(data?._id));

	return new Response(JSON.stringify({ message: 'Job has been deleted!' }), { status: 202 });
}
