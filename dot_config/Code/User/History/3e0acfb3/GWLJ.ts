import { redirect } from '@sveltejs/kit';
import stringHash from 'string-hash';
import { getUser, addUser } from '$db/users.js';

export const actions = {
	default: async ({ request }) => {
		const formData = await request.formData();
		console.log(formData);

		let formValidation = validateForm(formData);

		if (formValidation.success) {
			let loginValidation = await validateLogin(formValidation.email, formValidation.password);
			console.log('Validation: ', loginValidation);

			if (loginValidation) {
				throw redirect(303, '/');
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

	let success = email !== '' && password !== '';

	let formValidation = {
		success,
		email,
		password
	};

	return formValidation;
};

/**
 *
 * @param email the email of the user to validate
 * @param password the passwort of the user to validate
 * @returns true if login is granted
 */
const validateLogin = async (email: string, password: string) => {
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
