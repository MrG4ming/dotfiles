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

	constructor(obj);
	constructor(obj: IJob);
	constructor(obj?: IJob) {
		this.type = obj?.type;
		this.start = obj?.start;
		this.end = obj?.end;
		this.items = obj?.items;
	}
}
