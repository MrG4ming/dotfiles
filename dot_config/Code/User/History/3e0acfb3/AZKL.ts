import { redirect } from '@sveltejs/kit';
import stringHash from 'string-hash';
import { getUser, addUser } from '$db/users.js';

enum FormValidationState {
	SUCCESS = 1,
	GENERAL_ERROR,
	CONFIRM_PWD_ERROR
}

export const actions = {
	default: async ({ request }) => {
		const formData = await request.formData();
		console.log(formData);

		let formValidation = validateForm(formData);

		if (formValidation.status) {
			let status: boolean = await registerUser(formValidation.email, formValidation.password);
			if (status) {
				throw redirect(303, '/');
			}
			return {
				error: true,
				email: formValidation.email,
				password: formValidation.password,
				message: 'User with this email already exists!'
			};
		}

		return {
			error: true,
			email: formValidation.email,
			password: formValidation.password,
			message: 'Email and Password must be provided!'
		};
	}
};

const registerUser = async (email: string, password: string) => {
	let possibleUser = await getUser(email);
	if (possibleUser) return false;

	addUser(email, stringHash(password));
	return true;
};

/**
 *
 * @param {FormData} data The form data to validate
 */
const validateForm = (data) => {
	const email = String(data.get('email'));
	const password = String(data.get('password'));
	const confirmPassword = String(data.get('confirm-password'));

	let success = email !== '' && password !== '' && confirmPassword !== '';

	let status: FormValidationState = success && FormValidationState.SUCCESS;

	let formValidation = {
		status,
		email,
		password
	};

	return formValidation;
};
