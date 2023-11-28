import { DBRef, ObjectId } from 'mongodb';
import type { RequestEvent } from '../../$types';

export async function GET(event: RequestEvent) {
	console.log(new DBRef('inventory', new ObjectId('test'), 'jobmanager'));
}
