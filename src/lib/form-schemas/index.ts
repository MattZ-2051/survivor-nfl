import { z } from 'zod';

export const authFormSchema = z.object({
	email: z.string().email().min(1, { message: '' }),
	password: z.string().min(1, { message: 'Please provide a valid password.' })
});

export type AuthFormSchema = typeof authFormSchema;
