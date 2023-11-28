import type { DBRef, ObjectId } from 'mongodb';

enum JobType {
	FULL_SERVICE = 0,
	DELIVERY,
	SELF_PICKUP
}

enum JobState {
	OFFER = 0,
	CONFIRMED,
	COMPLETED
}

class Job {
	type: JobType;
	start: Date;
	end: Date;
	items: DBRef[];

	constructor(start: Date, end: Date, items: DBRef[], type?: JobType) {
		this.type = type ?? JobType.FULL_SERVICE;
		this.start = start;
		this.end = end;
		this.items = items;
	}
}
