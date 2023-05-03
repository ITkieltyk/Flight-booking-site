import { Airport } from './airport';
import { Company } from './company';

export interface Flight {
  origin: Airport;
  destination: Airport;
  date: number;
  durationM: number;
  plane: string;
  flightNumber: string;
  company: Company;
}
