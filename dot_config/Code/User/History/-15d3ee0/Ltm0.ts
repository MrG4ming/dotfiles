import type { DBRef, ObjectId } from 'mongodb';

class Job {
	constructor(jobStart: Date, jobEnd: Date, items: DBRef[]) {}
}
