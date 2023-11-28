import { redirect } from '@sveltejs/kit';

export const actions = {
	login: async ({ request }) => {
		const formData = await request.formData();
		console.log(formData);

		let success = validateForm(formData);

		if (success) {
			throw redirect(303, '/');
		} else {
			return {
				error: true
			};
		}
	}
};

/**
 *
 * @param {FormData} data The form data to validate
 */
const validateForm = (data) => {
	const email = data.get('email');
	const password = data.get('password');

	let returnValue = email !== '' && password !== '';

	return returnValue;
};
