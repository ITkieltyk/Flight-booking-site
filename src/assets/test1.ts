import { Flight } from 'src/app/flight';
import { Airport } from 'src/app/airport';
import { Company } from 'src/app/company';

const flightTest: Flight[] = [
  {
    origin: {
      city: 'New York',
      country: 'USA',
      continent: 'North America',
      coords: 16,
    },
    destination: {
      city: 'Warsaw',
      country: 'Poland',
      continent: 'Europe',
      coords: 0,
    },
    date: new Date().getTime(),
    durationM: 300,
    plane: 'Airbus',
    flightNumber: 'TP5885',
    company: {
      name: 'Tap Portugal',
      flightNamePrefix: 'TP',
    },
  },
  {
    origin: {
      city: 'Warsaw',
      country: 'Poland',
      continent: 'Europe',
      coords: 0,
    },
    destination: {
      city: 'New York',
      country: 'USA',
      continent: 'North America',
      coords: 16,
    },
    date: new Date().getTime(),
    durationM: 300,
    plane: 'Airbus',
    flightNumber: 'TP5897',
    company: {
      name: 'Tap Portugal',
      flightNamePrefix: 'TP',
    },
  },
];

export { flightTest };
