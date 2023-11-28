import db from '$db/mongo';
import type { ObjectId } from 'mongodb';
import stringHash from 'string-hash';

export interface User {
	id: ObjectId;
	email: string;
	password: string;
}

const users = db.collection('users');

export const getUser = async (email: string): Promise<User> => {
	let user: User = {
		id: undefined,
		email: email,
		password: ''
	};

	users.findOne({ email: email }).then((val) => {
		user.id = val?._id;
		user.email = val?.email;
		user.password = val?.password;
		return new Promise((resolve, reject) => {
			resolve(user);
		});
	});

	return new Promise((resolve, reject) => {
		reject('User with this email does not exist!');
	});
};

export const addUser = (email: string, password: string): void => {
	console.log('Adding user...');
	users.insertOne({ email: email, password: stringHash(password) }).then((): void => {
		console.log('User added!');
	});
};
