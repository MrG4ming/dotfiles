import { SvelteKitAuth } from '@auth/sveltekit';
import { GOOGLE_CLIENT_ID, GOOGLE_CLIENT_SECRET } from '$env/static/private';
import Google from '@auth/core/providers/google';

export const authenticate = () => {
	const redirectURL = 'https://localhost:5172/oauth';

	const OAuth2Client: OAuth2Client = new OAuth2Client(
		SECRET_CLIENT_ID,
		SECRET_CLIENT_SECRET,
		redirectURL
	);
};
