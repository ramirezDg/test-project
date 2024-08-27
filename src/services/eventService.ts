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

 export interface EventsProps {
    id: string;
    name: string;
    description: string;
    company: Company;
    date_end: string;
    date_start: string;
    areas: Array<{
      id: string;
      name: string;
      eventId: string;
      deletedAt?: string;
      sector: {
        id: number;
        name: string;
        deletedAt?: string;
      };
      eventAdminAreas: Array<{
        id: number;
        id_active: string;
        admin: {
          id: string;
          name: string;
          last_name: string;
          identification: string;
        };
      }>;
    }>;
    site: {
      id: number;
      name: string;
    };
    deletedAt?: string;
  }
  interface Company {
    id: number;
    name: string;
    deletedAt?: string | null;
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


  export const eventsGet = async (): Promise<EventsProps[]> => {
    try {
      const res = await axiosInstance.get(`${environment.baseUrl}events`);
  
      if (res.statusText !== 'OK') {
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