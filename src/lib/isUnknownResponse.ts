import axios, { AxiosError } from 'axios';
import { ApiError } from '../types';

export const handleApiError = (error: unknown): ApiError => {
    if (axios.isAxiosError(error)) {
      const axiosError = error as AxiosError<ApiError>;
      return {
        status: axiosError.response?.status || 500,
        message: axiosError.response?.data.message || 'An unknown error occurred',
      };
    }
  
    return {
      status: 500,
      message: 'An unknown error occurred',
    };
  };