import db from '$db/mongo';
import type { Job } from '$lib/Job';
import { ObjectId, type ModifyResult } from 'mongodb';

const jobs = db.collection('jobs');

export function createJob(jobStart: Date, jobEnd: Date, items: ObjectId[]) {
	let id = new ObjectId('abc');
}

export async function saveJob(job: Job): Promise<ObjectId> {
	let result: ModifyResult = await jobs.findOneAndUpdate({ _id: job._id }, job);
	return result.value._id;
}
