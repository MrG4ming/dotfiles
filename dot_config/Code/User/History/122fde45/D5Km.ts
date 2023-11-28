import db from '$db/mongo';
import { ObjectId } from 'mongodb';
import { getUser } from '$db/users';

export interface Session {
	id: ObjectId;
	email: string;
	expires: string;
}

const sessions = db.collection('sessions');

export const createSessionForMail = async (email: string, expires: Date) => {
	let id = await sessions.insertOne({
		email: email,
		expires: expires.toString()
	});
	console.log('Session id: ', id.insertedId.toString());
	return id.insertedId;
};

export const getMailBySessionId = async (sessionId: string): Promise<Session> => {
	let session: Session = {
		id: undefined,
		email: undefined,
		expires: undefined
	};

	await sessions.findOne({ _id: new ObjectId(sessionId) }).then((val) => {
		session.id = val?.id;
		session.email = val?.email;
		session.expires = val?.expires;
	});

	if (session.id) return null;

	return session;
};

export const getSessionsForUser = async (email: string) => {
	let result: Session[];

	const data = await sessions.find().toArray();

	console.log(data.filter((e) => e.email === email)[2]);
};
