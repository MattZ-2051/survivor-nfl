import { supabaseClient } from '../';
import type { User } from '../models';
import type { CreateUser } from './types';

export const createUser = async ({ username, password }: CreateUser): Promise<User> => {
	const { data, error } = await supabaseClient
		.from('User')
		.insert([{ username, password }])
		.select();
	console.log('error', error);
	if (!data || !data.length) throw new Error('error creating user');
	return data[0];
};

export const getUser = async (): Promise<User> => {
	const { data } = await supabaseClient.from('User').select('*');
	if (!data || !data.length) throw new Error('no user found');
	return data[0];
};
