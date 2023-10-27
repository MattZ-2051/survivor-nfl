export interface User {
  id: number;
  username: string;
  profilePhoto: string | null;
}

export type Tokens = {
  access: string;
  refresh: string;
};

export type JwtPayload = {
  username: string;
  sub: number;
};

export type JwtPayloadWithRt = JwtPayload & { refreshToken: string };
