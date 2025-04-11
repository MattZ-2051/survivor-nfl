import { authFormSchema } from '$lib/form-schemas';
import { error, fail, redirect } from '@sveltejs/kit';
import { superValidate } from 'sveltekit-superforms';
import { zod } from 'sveltekit-superforms/adapters';
import type { Actions, PageServerLoad } from './$types';

export const load: PageServerLoad = async () => {
	return {
		form: await superValidate(zod(authFormSchema))
	};
};

export const actions: Actions = {
	default: async (event) => {
		const {
			locals: { supabase }
		} = event;

		const form = await superValidate(event, zod(authFormSchema));

		if (!form.valid) {
			return fail(400, {
				form
			});
		}

		const { email, password } = form.data;
		const { error: supabaseError } = await supabase.auth.signInWithPassword({ email, password });

		if (supabaseError) {
			error(400, supabaseError.message);
		} else {
			redirect(303, '/home');
		}
	}
};
