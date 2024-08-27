import { environment } from '../environment/environment';
import { ApiResponseAxios } from '../types';
import { axiosInstance } from './apiService';

export interface Event {
    name: string
    startDate: string
    endDate: string
    spot: string
    area: string
  }

  export interface Site {
    id: number;
    name: string;
    address: string;
    image: null;
    deletedAt: null;
  }

 export interface Props {
    id?: number;
    name: string;
    deletedAt?: string;
    areas?: Array<{
      id: string;
      name: string;
      eventId: string;
      deletedAt?: string;
      sector: {
        id: number;
        name: string;
        deletedAt?: string;
      };
    }>;
  }


  export const getEvents = async (): Promise<ApiResponseAxios<Event[]>> => {
    try {

      const res = await axiosInstance.post(`${environment.baseUrl}events`);
  
      if (res.statusText !== 'Created') {
        return res.data;
      }
  
      return res.data;
    } catch (error) {
      throw error;
    }
  };
  export const createEvent = async (props: Props): Promise<ApiResponseAxios<Event[]>> => {
    try {

      const res = await axiosInstance.post(`${environment.baseUrl}events`, props);
  
      if (res.statusText !== 'Created') {
        return res.data;
      }
  
      return res.data;
    } catch (error) {
      throw error;
    }
  };