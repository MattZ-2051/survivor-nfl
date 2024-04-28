import { createClient } from '@supabase/supabase-js';
// Create a single supabase client for interacting with your database
export const supabaseClient = createClient('https://xyzcompany.supabase.co', 'public-anon-key');
