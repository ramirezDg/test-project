import { AxiosError } from 'axios';
import { environment } from '../environment/environment';
import { ApiResponseAxios, User } from '../types';
import { axiosInstance } from './apiService';

export const getUsers = async (): Promise<ApiResponseAxios<User[]>> => {
  try {
    const response = await axiosInstance.get<User[]>(
      `${environment.baseUrl}users`,
    );
    return {
      data: response.data,
      statusCode: response.status,
      message: response.statusText,
    };
  } catch (error) {
    const typedError = error as AxiosError;
    return {
      statusCode: typedError.response?.status || 500,
      message: typedError.response?.statusText || 'Internal Server Error',
      data: [],
    }; 
  }
};


export const getUserById = async (id: string): Promise<ApiResponseAxios<User[]>> => {
  try {
    const response = await axiosInstance.get<User[]>(
      `${environment.baseUrl}users/${id}`,
    );
    return {
      data: response.data,
      statusCode: response.status,
      message: response.statusText,
    };
  } catch (error) {
    const typedError = error as AxiosError;
    return {
      statusCode: typedError.response?.status || 500,
      message: typedError.response?.statusText || 'Internal Server Error',
      data: [],
    }; 
  }
};

