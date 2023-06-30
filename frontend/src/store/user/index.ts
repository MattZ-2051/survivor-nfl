import { login, signup } from '$api/auth';
import { createEffect, createEvent, createStore } from 'effector';
import { decodeJwtToken, handleUserTokenData } from '$utils';
import type { User } from '$types/models';

const updateUser = createEvent<User>();
export const loginFx = createEffect(login);
export const signUpFx = createEffect(signup);

signUpFx.doneData.watch((result) => {
	console.log('res', result);
});

signUpFx.failData.watch((error) => {
	console.log('error', error);
});

loginFx.doneData.watch((result) => {
	console.log('res', result);
	handleUserTokenData(result.accessToken);
	const jwtData = decodeJwtToken(result.accessToken);
	updateUser({ id: jwtData.sub, username: jwtData.username });
	console.log('here', jwtData);
	// toast.success('Login Success');
});

loginFx.failData.watch((error) => {
	// toast.error('Wrong Username or Password');
});

export const $user = createStore<User | null>(null).on(updateUser, (prevState, payload) => {
	console.log('payload', payload);
	return payload;
});
