import { start_mongo } from '$db/mongo';

start_mongo
	.then(() => {
		console.log('Mongo client started!');
	})
	.catch((e) => {
		console.error(e);
		console.log('test aljkfhakjhfgakjghfakgh');
	});
