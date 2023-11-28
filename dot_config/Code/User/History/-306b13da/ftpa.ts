import { start_mongo } from '$db/mongo';
import { type Handle } from '@sveltejs/kit';

start_mongo()
	.then((): void => {
		console.log('Mongo started.');
	})
	.catch((e) => console.error(e));
