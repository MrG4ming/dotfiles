import { MongoClient } from 'mongodb';
import { MONGO_URL } from '$env/static/private';

const client = new MongoClient(MONGO_URL);

export async function start_mongo() {
	console.log('Starting mongo client...');
	let con = await client.connect();
	console.log('MongoDB: Connected!');
	return con;
}

export default client.db();
