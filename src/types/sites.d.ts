import { ID } from './index';

export interface Spot {
    id: ID;
    name: string;
    address: string;
    creationDate: Date;
}