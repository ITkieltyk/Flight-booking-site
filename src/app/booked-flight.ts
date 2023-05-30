import { Flight } from './flight';

export interface BookedFlight {
  flight: Flight;
  adults: number;
  children: number;
  newborn: number;
  secondLuggage: boolean;
  seats: string[];
}
