import { ApiResponseAxios } from '../types';

export function isSuccessfulResponse<T>(response: ApiResponseAxios<T>): boolean {
    return response.statusCode === 200 || response.statusCode === 201;
}