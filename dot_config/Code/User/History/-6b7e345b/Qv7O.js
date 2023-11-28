import { redirect } from '@sveltejs/kit';

export const actions = {
	login: async ({ request }) => {
		const formData = await request.formData();
		console.log(formData);

		validateForm(formData);

		throw redirect(303, '/');
	}
};

/**
 *
 * @param {FormData} data
 */
const validateForm = (data) => {};
