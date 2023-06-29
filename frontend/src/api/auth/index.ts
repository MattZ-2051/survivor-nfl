import { post } from '..';
import type {AuthTokens} from '$types/api';
export const login = async ({
  username,
  password,
}: {
  username: string;
  password: string;
}) => {
  const response = await post<{
    data: AuthTokens;
  }>('/auth/login', {
    username,
    password,
  });
  return response.data;
};

export const signup = async ({
  username,
  password,
}: {
  username: string;
  password: string;
}) => {
  const response = await post<{
    data: AuthTokens;
  }>('/auth/signup', {
    username,
    password,
  });
  return response.data;
};
