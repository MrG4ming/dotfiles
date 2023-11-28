import { redirect } from '@sveltejs/kit';

export const actions = {
	login: async ({ request }) => {
		const formData = await request.formData();
		console.log(formData);
	},
	cancel: async ({ request }) => {
		const formData = await request.formData();
		console.log('Cancel');
		throw redirect(303, '/');
	}
};
