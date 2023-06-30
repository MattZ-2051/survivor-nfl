import type { AuthTokens } from '$types/api';

export type User = {
	id: string;
	username: string;
	authTokens?: AuthTokens;
};
