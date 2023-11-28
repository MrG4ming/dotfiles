import { dev } from '$app/environment';

import { redirect } from '@sveltejs/kit';
import stringHash from 'string-hash';
import { getUser } from '$db/users.js';
import { createSessionForMail, getSessionsForUser, updateSession } from '$db/sessions.js';
import type { ObjectId } from 'mongodb';

export const actions = {
	login: async ({ request, cookies }) => {
		const formData = await request.formData();
		console.log(formData);

		let formValidation = validateForm(formData);

		if (formValidation.success) {
			let loginValidation = await validateLogin(formValidation.email, formValidation.password);
			console.log('Validation: ', loginValidation);

			if (loginValidation) {
				let expireDate = new Date();
				expireDate.setDate(expireDate.getDate() + 7);

				const existingSessions = await getSessionsForUser(formValidation.email);
				console.log(existingSessions.length);

				if (!(existingSessions.length > 0)) {
					const sessionId: ObjectId = await createSessionForMail(formValidation.email, expireDate);

					cookies.set('session', sessionId.toString(), {
						httpOnly: true,
						secure: !dev,
						maxAge: 60 * 60 * 24 * 7
					});

					throw redirect(303, '/');
				} else {
					const sessionId: ObjectId = existingSessions[0]?.id;

					updateSession(sessionId, expireDate);

					cookies.set('session', sessionId.toString(), {
						httpOnly: true,
						secure: !dev,
						maxAge: 60 * 60 * 24 * 7
					});

					throw redirect(303, '/');
				}
			} else {
				return {
					error: true,
					email: formValidation.email,
					password: formValidation.password,
					message: 'Email or Password are not correct.'
				};
			}
		} else {
			return {
				error: true,
				email: formValidation.email,
				password: formValidation.password,
				message: 'Email and Password must be provided!'
			};
		}
	}
};

/**
 *
 * @param {FormData} data The form data to validate
 */
const validateForm = (data) => {
	const email = String(data.get('email'));
	const password = String(data.get('password'));
	const stayLoggedIn = Boolean(data.get('stayLoggedIn'));

	let success = email !== '' && password !== '';

	let formValidation = {
		success,
		email,
		password
	};

	return formValidation;
};

const validateLogin = async (email: string, password: string) => {
	let user = await getUser(email);

	/* console.log('Inside login validation: ', stringHash(password), user?.password); */

	if (!user) {
		return false;
	}
	if (!user?.password) {
		return false;
	}
	if (user?.password !== stringHash(password)) {
		return false;
	}

	return true;
};
