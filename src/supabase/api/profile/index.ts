import { supabaseClient } from '../';
import type { Profile } from '../models';

export const getUserProfile = async (userId: string): Promise<Profile> => {
	const { data, error } = await supabaseClient.from('Profile').select('*').eq('user_id', userId);
	if (!data || !data.length || error) throw new Error('no user found');
	return data[0];
};
