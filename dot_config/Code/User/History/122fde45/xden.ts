import db from '$db/mongo';
import { ObjectId } from 'mongodb';
import { getUser } from '$db/users';

export interface Session {
	id: ObjectId;
	email: string;
	expires: string;
}

const sessions = db.collection('sessions');

/**
 * Creates and saves the session for a user and returns the id which is used as a login key
 * @param email the users email
 * @param expires when should the session expire
 * @returns the session id
 */
export const createSessionForMail = async (email: string, expires: Date) => {
	let id = await sessions.insertOne({
		email: email,
		expires: expires.toString()
	});
	console.log('Session id: ', id.insertedId.toString());
	return id.insertedId;
};

/**
 *
 * @param sessionId the session id of a session
 * @returns the user of which the session is
 */
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

/**
 *
 * @param email the email of user to get the sessions from
 * @returns the saved session ids of the user
 */
export const getSessionsForUser = async (email: string) => {
	let result: Session[] = [];

	const data = await sessions.find().toArray();

	for (let i = 0; i < data.filter((e) => e.email === email).length; i++) {
		const element = data.filter((e) => e.email === email)[i];
		result.push({
			id: element._id,
			email: element.email,
			expires: element.expires
		});
	}

	console.log(result);

	return result;
};

const updateSession = async (sessionId: ObjectId, expires: string) => {
	const data = await sessions.findOne({ _id: sessionId });
	if (!data) return;

	await sessions.updateOne(
		{ _id: sessionId },
		{
			$set: {
				expires: expires
			}
		}
	);
};
