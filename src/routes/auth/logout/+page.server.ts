import { redirect } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async ({ locals: { supabase } }): Promise<void> => {
	const { error } = await supabase.auth.signOut();
	if (error) {
		console.error(error);
	}

	redirect(301, '/auth/login');
	return;
};
