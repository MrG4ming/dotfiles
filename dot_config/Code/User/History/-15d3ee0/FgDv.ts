import { DBRef, type ObjectId } from 'mongodb';
import { saveJob } from '$db/jobs';
import mongo from '$db/mongo';

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
		items?: DBRef[],
		type?: JobType
	) {
		this._id = _id;
		this.name = name;
		this.type = type ?? JobType.FULL_SERVICE;
		this.state = state;
		this.start = start;
		this.end = end;
		this.items = items ?? DBRef[];
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
		let refObj: DBRef = new DBRef('jobs', item, mongo.databaseName);
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
