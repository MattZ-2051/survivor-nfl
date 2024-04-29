import { createClient } from '@supabase/supabase-js';
import type { Database } from './schema';
// Create a single supabase client for interacting with your database
const supabseUrl = import.meta.env?.VITE_SUPABASE_URL as string;
const supabaseKey = import.meta.env?.VITE_SUPABASE_KEY as string;
export const supabaseClient = createClient<Database>(supabseUrl, supabaseKey);
