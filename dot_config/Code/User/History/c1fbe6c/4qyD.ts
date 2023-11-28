import db from '$db/mongo';
import type { Job } from '$lib/Job';
import { ObjectId } from 'mongodb';

const jobs = db.collection('jobs');

export function createJob(jobStart: Date, jobEnd: Date, items: ObjectId[]) {
	let id = new ObjectId('abc');
}

export async function saveJob(job: Job): Promise<ObjectId> {
	let result = await jobs.findOneAndUpdate({ _id: job._id }, job);
	return result.insertedId;
}
