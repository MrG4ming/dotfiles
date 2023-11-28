import { DBRef, ObjectId } from 'mongodb';
import type { RequestEvent } from '../../$types';
import { json } from '@sveltejs/kit';

export async function GET(event: RequestEvent) {
	let test = new DBRef(
		'inventorty',
		new ObjectId('64f48966c9e7a04375b0ee6b'),
		'jobmanager'
	).toJSON();

	return json(test, { status: 200 });
}
