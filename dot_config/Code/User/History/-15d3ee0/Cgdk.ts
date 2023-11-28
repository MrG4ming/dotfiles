import { DBRef, type ObjectId } from 'mongodb';
import { DATABASE } from '$env/static/private';
import { saveJob } from '$db/jobs';

export enum JobType {
	FULL_SERVICE = 0,
	DELIVERY,
	SELF_PICKUP
}

export enum JobState {
	OFFER = 0,
	CONFIRMED,
	COMPLETED
}

export class Job {
	_id: ObjectId;
	type: JobType;
	state: JobState;
	start: Date;
	end: Date;
	items: DBRef[];

	constructor(
		_id: ObjectId,
		state: JobState,
		start: Date,
		end: Date,
		items: DBRef[],
		type?: JobType
	) {
		this._id = _id;
		this.type = type ?? JobType.FULL_SERVICE;
		this.state = state;
		this.start = start;
		this.end = end;
		this.items = items;
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
		let refObj: DBRef = new DBRef('jobs', item, DATABASE);
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
