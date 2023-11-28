import db from '$db/mongo';
import type { ObjectId } from 'mongodb';
import stringHash from 'string-hash';

interface User {
	id: ObjectId;
	email: string;
	password: string;
}

const users = db.collection('users');

export const getUser = (email: string): User => {
	let user: User = {
		id: undefined,
		email: email,
		password: ''
	};

	users.findOne({ email: email }).then((val) => {
		user.id = val._id;
	});

	return null;
};

export const addUser = (email: string, password: string): void => {
	console.log('Adding user...');
	users.insertOne({ email: email, password: stringHash(password) }).then((): void => {
		console.log('User added!');

		users.findOne({ email: email }).then((val) => {
			console.log(JSON.parse(String(val)).email);
		});
	});
};
