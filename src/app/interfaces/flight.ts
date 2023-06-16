import { Airport } from './airport';
import { Company } from './company';

export interface Flight {
  origin: Airport;
  destination: Airport;
  date: Date;
  durationM: number;
  plane: string;
  flightNumber: string;
  company: Company;
  flightPrice: number;
}
