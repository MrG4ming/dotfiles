import type { DBRef, ObjectId } from 'mongodb';

export interface IJob {
	_id: string;
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
	OFFER = 'offer',
	CONFIRMED = 'confirmed',
	COMPLETED = 'completed'
}
