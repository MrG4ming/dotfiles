import db from '$db/mongo';
import type { Job } from '$lib/Job';
import { ObjectId } from 'mongodb';

const jobs = db.collection('jobs');

export function createJob(jobStart: Date, jobEnd: Date, items: ObjectId[]) {
	let id = new ObjectId('abc');
}

export function saveJob(job: Job) {
	jobs.insertOne(job);
}
