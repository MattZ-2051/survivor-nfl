import type { AuthTokens } from "$types/api";

export type User = {
  username: string;
  authTokens?: AuthTokens
};
