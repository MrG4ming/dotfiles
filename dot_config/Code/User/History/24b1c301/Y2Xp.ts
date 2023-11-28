import { DBRef, ObjectId } from 'mongodb';
import type { RequestEvent } from '../../$types';

export async function GET(event: RequestEvent) {
	console.log(
		new DBRef('inventory', new ObjectId('64f48966c9e7a04375b0ee6b'), 'jobmanager').toJSON()
	);
}
