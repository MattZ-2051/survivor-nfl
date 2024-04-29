import type { Database } from '../schema';

export type User = Database['public']['Tables']['User']['Row'];
export type Game = Database['public']['Tables']['Game'];
export type Player = Database['public']['Tables']['Player'];
