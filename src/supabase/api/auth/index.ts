import { supabaseClient } from '../';
import type { LoginUser, CreateUser } from './types';
import type { Profile } from '../models';
import { getUserProfile } from '../profile';

export const createUser = async ({ email, username, password }: CreateUser): Promise<Profile> => {
	const { data, error } = await supabaseClient.auth.signUp({
		email,
		password,
		options: {
			data: {
				username
			}
		}
	});

	if (!data.user || !data.user?.id || error) throw new Error('error creating user');

	try {
		const profile = await getUserProfile(data.user.id);
		return profile;
	} catch (error) {
		throw new Error(error as string);
	}
};

export const loginUser = async ({ email, password }: LoginUser) => {
	const { data, error } = await supabaseClient.auth.signInWithPassword({
		email,
		password
	});

	if (error) console.log('error with login', error);
	if (!data.user || !data.user?.id || error) throw new Error('error creating user');

	try {
		const profile = await getUserProfile(data.user.id);
		return profile;
	} catch (error) {
		throw new Error(error as string);
	}
};

export const logoutUser = async (): Promise<void> => {
	const { error } = await supabaseClient.auth.signOut();
	if (error) throw new Error('error signing user out');
};
