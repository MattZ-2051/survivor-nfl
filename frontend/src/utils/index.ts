import type { AuthTokens, StorageTokenData } from '$types/api';
import jwt_decode from 'jwt-decode';

export const decodeJwtToken = (token: string): Record<string, string> => {
	return jwt_decode(token);
};

export const checkStorage = (): StorageTokenData | null => {
	if (!localStorage) return null;
	const tokenExist = !!localStorage.getItem('authTokens');
	if (tokenExist) {
		const authTokens = JSON.parse(localStorage.getItem('authTokens') as string);
		const tokenData = decodeJwtToken(authTokens?.access);
		return { tokenData, authTokens };
	} else {
		return null;
	}
};

export const handleUserTokenData = (token: AuthTokens) => {
	const tokenData = decodeJwtToken(token.access);
	localStorage.setItem(
		'authTokens',
		JSON.stringify({ access: token.access, refresh: token.refresh })
	);
	return tokenData;
};
