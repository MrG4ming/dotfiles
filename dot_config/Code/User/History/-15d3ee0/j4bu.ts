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

	constructor(type: JobType, start: Date, end: Date, items: DBRef[]) {}
}
