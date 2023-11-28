import type { DBRef, ObjectId } from 'mongodb';

enum JobType {
	FULL_SERVICE = 1,
	DELIVERY,
	SELF_PICKUP
}

interface IJob {
	type: JobType;
	start: Date;
	end: Date;
	items: DBRef[];
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
