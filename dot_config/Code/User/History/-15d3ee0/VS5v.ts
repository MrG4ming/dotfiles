import type { DBRef, ObjectId } from 'mongodb';

export interface IJob {
	_id: ObjectId;
	name: string;
	type: JobType;
	state: JobState;
	start: Date;
	end: Date;
	items: DBRef[];
}

export enum JobType {
	FULL_SERVICE = 'full_service',
	DELIVERY = 'delivery',
	SELF_PICKUP = 'self_pickup'
}

export enum JobState {
	OFFER = 0,
	CONFIRMED,
	COMPLETED
}
