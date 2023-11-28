import db from '$db/mongo';
import { ObjectId } from 'mongodb';

export interface Job {
	id: ObjectId;
	jobStart: string;
	jobEnd: string;
	items: ObjectId[];
}

const jobs = db.collection('jobs');

export function createJob(jobStart: Date, jobEnd: Date, items: ObjectId[]) {
	let id = new ObjectId('abc');
}
