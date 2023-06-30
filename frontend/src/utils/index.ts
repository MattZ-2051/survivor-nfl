import type { StorageTokenData } from '$types/api';
import jwt_decode from 'jwt-decode';

export const decodeJwtToken = (token: string): Record<string, string> => {
	return jwt_decode(token);
};

export const checkStorage = (): StorageTokenData | null => {
	const tokenExist = !!localStorage.getItem('authTokens');
	if (tokenExist) {
		const authTokens = JSON.parse(localStorage.getItem('authTokens') as string);
		const tokenData = decodeJwtToken(authTokens?.access);
		return { tokenData, authTokens };
	} else {
		return null;
	}
};

export const handleUserTokenData = (token: string) => {
	const tokenData = decodeJwtToken(token);
	localStorage.setItem('authTokens', JSON.stringify({ accessToken: token }));
	return tokenData;
};
