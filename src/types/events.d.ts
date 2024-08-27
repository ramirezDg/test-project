import { ID } from './index';

export interface Event {
    id: ID;
    name: string;
    description: string;
    startDate: string; 
    endDate: string; 
    spot: string;
    area: string;
  }