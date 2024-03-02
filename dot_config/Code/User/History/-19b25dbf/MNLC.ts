import db from '$db/mongo';
import type { ObjectId } from 'mongodb';
import stringHash from 'string-hash';

interface User {
	id?: ObjectId;
	name: string;
	sirname: string;
	id_token?: string;
}

const users = db.collection('users');

export const getUser = async (email: string): Promise<User> => {
	let user: User = {
		id: undefined,
		email: email,
		password: '',
		sessionId: undefined
	};

	await users.findOne({ email: email }).then((val) => {
		/* console.log(val?.email, val?.password); */
		user.id = val?._id;
		user.email = val?.email;
		user.password = val?.password;
		user.sessionId = val?.sessionId;
	});

	if (user?.id) return user;

	return null;
};

export const addUser = (email: string, password: string): void => {
	console.log('Adding user...');
	users
		.insertOne({ email: email, password: stringHash(password) })
		.then((): void => {
			console.log('User added!');
		})
		.catch((e) => {
			console.error(e);
		});
};
