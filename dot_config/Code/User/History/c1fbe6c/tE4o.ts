import db from '$db/mongo';
import type { JobState, JobType } from '$lib/Job';
import { ObjectId, type ModifyResult } from 'mongodb';

const jobs = db.collection('jobs');

export function createJob(jobStart: Date, jobEnd: Date, items: ObjectId[]) {
	let id = new ObjectId('abc');
}

export async function saveJob(job: Job): Promise<ObjectId> {
	let result: ModifyResult = await jobs.findOneAndUpdate({ _id: job._id }, job);
	return result.value._id;
}

export class Job {
	_id: ObjectId;
	name: string;
	type: JobType;
	state: JobState;
	start: Date;
	end: Date;
	items: DBRef[];

	constructor(
		_id: ObjectId,
		name: string,
		state: JobState,
		start: Date,
		end: Date,
		type?: JobType
	) {
		this._id = _id;
		this.name = name;
		this.type = type ?? JobType.FULL_SERVICE;
		this.state = state;
		this.start = start;
		this.end = end;
	}

	setState(state: JobState) {
		this.state = state;
	}
	setStart(start: Date) {
		this.start = start;
	}
	setEnd(end: Date) {
		this.end = end;
	}

	addItem(item: ObjectId) {
		let refObj: DBRef = new DBRef('jobs', item, String(PUBLIC_DATABASE));
		this.items.push(refObj);
	}
	removeItem(itemId: ObjectId) {
		if (this.items.filter((i) => i.oid === itemId).length > 0) {
			this.items = this.items.filter((i) => i.oid !== itemId);
		}
	}

	saveJob() {
		saveJob(this);
	}
}
