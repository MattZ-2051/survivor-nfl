import type { Database } from '../schema';

export type Profile = Database['public']['Tables']['Profile']['Row'];
export type Game = Database['public']['Tables']['Game']['Row'];
export type Player = Database['public']['Tables']['Player']['Row'];
