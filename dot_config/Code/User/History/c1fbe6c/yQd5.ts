import db from '$db/mongo';
import { PUBLIC_DATABASE } from '$env/static/public';
import type { JobType, JobState } from '$lib/Job';
import { ObjectId, type ModifyResult, DBRef, FindCursor } from 'mongodb';

const jobs = db.collection('jobs');

export async function createJob(
	name: string,
	state: JobState,
	type: JobType,
	start: Date,
	end: Date,
	items: ObjectId[]
): Promise<Job> {
	let refs = [];

	for (let i = 0; i < items.length; i++) {
		const e = items[i];
		refs.push(new DBRef('jobs', e, jobs.dbName));
	}

	let callback = await jobs.insertOne({
		name: name,
		state: state,
		type: type,
		start: start,
		end: end,
		items: refs
	});

	let job: Job = new Job(callback.insertedId, name, state, type, start, end, refs);

	console.log('Job created: ', job);

	return job;
}

export async function updateJob(job: Job): Promise<ObjectId> {
	let result: ModifyResult = await jobs.findOneAndUpdate({ _id: job._id }, job);
	return result.value._id;
}

export async function getJobs(): Promise<Job[]> {
	const data = await jobs.find().toArray();

	let result: Job[] = [];

	for (let i = 0; i < data.length; i++) {
		const element = data[i];
		// filter out expired sessions
		let job = new Job(
			element._id,
			element.name,
			element.state,
			element.type,
			element.start,
			element.end
		);
		result.push(job);
	}

	return result;
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
		type: JobType,
		start: Date,
		end: Date,
		items?: DBRef[]
	) {
		this._id = _id;
		this.name = name;
		this.type = type;
		this.state = state;
		this.start = start;
		this.end = end;
		this.items = items ?? [];
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
		updateJob(this);
	}
}
