import db from '$db/mongo';
import stringHash from 'string-hash';

const users = db.collection('users');

export const addUser = (email: string, password: string): void => {
	console.log('Adding user...');
	users.insertOne({ email: email, password: stringHash(password) }).then((): void => {
		console.log('User added!');
	});
};
