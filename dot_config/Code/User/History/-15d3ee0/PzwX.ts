import type { DBRef, ObjectId } from 'mongodb';

enum JobType {
	FULL_SERVICE = 1,
	DELIVERY,
	SELF_PICKUP
}

class Job {
	type: JobType;
	start: Date;
	end: Date;
	items: DBRef[];

	constructor(type: JobType = JobType.FULL_SERVICE, start: Date, end: Date, items: DBRef[]) {
		this.type = type;
		this.start = start;
		this.end = end;
		this.items = items;
	}
}
