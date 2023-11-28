import { DBRef, type ObjectId } from 'mongodb';

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

	constructor(params: Job = {} as IJob) {
		const {
			type = JobType.FULL_SERVICE,
			start = new Date(),
			end = new Date(),
			items = undefined
		} = params;

		this.type = type;
		this.start = start;
		this.end = end;
		this.items = items;
	}
}

let test: Job = new Job();
