import axios from 'axios';
import { $user } from '$store/user';

const baseURL = import.meta.env?.VITE_API_URL;

const axiosInstance = axios.create({
  baseURL
});

const getHeaders = () => {
  return $user.getState()?.authTokens
    ? {
        headers: {
          'Content-Type': 'application/json',
          Authorization:
            'Bearer ' + $user.getState()?.authTokens?.access?.toString(),
        },
      }
    : {};
};
export const get = async <T>(
  path: string,
): Promise<T> => {
  return await axiosInstance.get(path, getHeaders());
};

export const post = async <T>(
  path: string,
  data: any,
): Promise<T> => {
  return await axiosInstance.post(path, data, getHeaders());
};

export const patch = async <T>(path: string, data?: any): Promise<T> => {
  return await axiosInstance.patch(path, data, getHeaders());
};

export const del = async <T>(path: string): Promise<T> => {
  return await axiosInstance.delete(path, getHeaders());
};
