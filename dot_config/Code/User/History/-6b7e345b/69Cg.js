import { redirect } from '@sveltejs/kit';
import users from '$db/users.ts';

export const actions = {
	login: async ({ request }) => {
		const formData = await request.formData();
		console.log(formData);

		let validation = validateForm(formData);

		if (validation.success) {
			throw redirect(303, '/');
		} else {
			return {
				error: true,
				email: validation.email,
				password: validation.password
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

	let validation = {
		success,
		email,
		password
	};

	return validation;
};
