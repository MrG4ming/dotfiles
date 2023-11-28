import type { DBRef, ObjectId } from 'mongodb';

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
	type: JobType;
	state: JobState;
	start: Date;
	end: Date;
	items: DBRef[];

	constructor(state: JobState, start: Date, end: Date, items: DBRef[], type?: JobType) {
		this.type = type ?? JobType.FULL_SERVICE;
		this.state = state;
		this.start = start;
		this.end = end;
		this.items = items;
	}

	setState(state: JobState) {
		this.state = state;
	}
}
