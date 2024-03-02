import { redirect } from '@sveltejs/kit';
import { OAuth2Client } from 'google-auth-library';
import { SECRET_CLIENT_ID, SECRET_CLIENT_SECRET } from '$env/static/private';

export const authenticate = () => {
	const redirectURL = 'https://localhost:5172/oauth';

	const OAuth2Client: OAuth2Client = new OAuth2Client(
		SECRET_CLIENT_ID,
		SECRET_CLIENT_SECRET,
		redirectURL
	);
};
