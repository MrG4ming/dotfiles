import db from '$db/mongo';
import { type ObjectId } from 'mongodb';

export interface Job {
	id: ObjectId;
	jobStart: string;
	jobEnd: string;
	items: ObjectId[];
}

const jobs = db.collection('jobs');
