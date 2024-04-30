import { supabaseClient } from '$supabase';
import { getUserProfile } from '$supabase/api/profile';
import { redirect } from '@sveltejs/kit';

/** @type {import('./$types').PageLoad} */
export async function load() {
	const {
		data: { user },
		error
	} = await supabaseClient.auth.getUser();

	if (error) console.log('error with login', error);
	if (user) {
		const profile = await getUserProfile(user.id);
		return {
			profile
		};
	} else {
		await redirect(303, '/login');
	}
}
