import { redirect } from '@sveltejs/kit';

export const actions = {
	login: async ({ request }) => {
		const formData = await request.formData();
		console.log(formData);

		throw redirect(303, '/');
	},
	cancel: async ({ request }) => {
		const formData = await request.formData();
		console.log('Cancel');
	}
};
