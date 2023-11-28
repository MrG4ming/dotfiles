import db from '$db/mongo';
import { ObjectId } from 'mongodb';

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
		expires: expires.toISOString()
	});
	console.log('Session id: ', id.insertedId.toString());
	return id.insertedId;
};

/**
 *
 * @param sessionId the session id of a session
 * @returns the session
 */
export const getSession = async (sessionId: string): Promise<Session> => {
	let session: Session = {
		id: new ObjectId(sessionId),
		email: undefined,
		expires: undefined
	};

	await sessions.findOne({ _id: session.id }).then((val) => {
		session.email = val?.email;
		session.expires = val?.expires;
	});

	if (!session.email) return null;

	if (new Date(session.expires) < new Date()) {
		sessions.deleteOne({ _id: session.id });
		return null;
	}

	return session;
};

/**
 *
 * @param email the email of user to get the sessions from
 * @returns the saved session ids of the user
 */
export const getSessionsForUser = async (email: string) => {
	let result: Session[] = [];

	let expiredSessions: Session[] = [];

	const data = await sessions.find().toArray();

	for (let i = 0; i < data.filter((e) => e.email === email).length; i++) {
		const element = data.filter((e) => e.email === email)[i];
		// filter out expired sessions
		if (new Date(element.expires) < new Date()) {
			expiredSessions.push({
				id: element._id,
				email: element.email,
				expires: element.expires
			});
			continue;
		}
		result.push({
			id: element._id,
			email: element.email,
			expires: element.expires
		});
	}

	// delete expired Sessions:
	for (let i = 0; i < expiredSessions.length; i++) {
		const session: Session = expiredSessions[i];

		sessions.deleteOne({ _id: session.id });
	}

	/* console.log('Expired Sessions: ', expiredSessions); */

	/* console.log('Result: ', result); */

	return result;
};

export const updateSession = async (sessionId: ObjectId, expires: Date) => {
	const data = await sessions.findOne({ _id: sessionId });
	if (!data) return;

	await sessions.updateOne(
		{ _id: sessionId },
		{
			$set: {
				expires: expires.toISOString()
			}
		}
	);
};

export const deleteSesion = async (sessionId: ObjectId) => {
	const data = await sessions.findOne({ _id: sessionId });

	if (data) sessions.deleteOne({ _id: sessionId });
};
