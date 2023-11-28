import db from '$db/mongo';
import type { ObjectId } from 'mongodb';
import stringHash from 'string-hash';

interface User {
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

	await users.findOne({ email: email }).then((val) => {
		/* console.log(val?.email, val?.password); */
		user.id = val?._id;
		user.password = val?.password;
	});

	if (user?.id) return user;

	return null;
};

export const addUser = (email: string, password: string): void => {
	console.log('Adding user...');
	users.insertOne({ email: email, password: stringHash(password) }).then((): void => {
		console.log('User added!');
	});
};

export const validateUser = async (email: string, password: string): Promise<boolean> => {
	let success: boolean = true;

	let user = await getUser(email);

	/* console.log('Inside login validation: ', stringHash(password), user?.password); */

	if (!user) {
		success = false;
		return success;
	}
	if (!user?.password) {
		success = false;
		return false;
	}
	if (user?.password !== stringHash(password)) {
		success = false;
		return false;
	}

	return success;
};

export const getUserBySessionId = async (sessionId: string) => {
	let user = {
		id: undefined,
		email: undefined,
		password: undefined,
		sessionId: sessionId
	};

	await users.findOne({ session: sessionId }).then((val) => {
		user.id = val?.id;
		user.email = val?.email;
		user.password = val?.password;
		user.sessionId = val?.sessionId;
	});
};
