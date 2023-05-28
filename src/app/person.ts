import { Flight } from './flight';

export interface Person {
  name: string;
  surname: string;
  email: string;
  password: string;
  bookedFlights: Flight[];
  adults?: number;
  children?: number;
  newborn?: number;
  secondLuggage?: boolean;
}
