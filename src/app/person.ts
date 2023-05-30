import { BookedFlight } from './booked-flight';
import { Flight } from './flight';

export interface Person {
  name: string;
  surname: string;
  email: string;
  password: string;
  bookedFlights: BookedFlight[];
}
