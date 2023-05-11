import { Injectable } from '@angular/core';
import { Airport } from './airport';
import { flights } from 'src/assets/flights';
import { airports } from 'src/assets/airports';
import { Flight } from './flight';
import { flightTest } from 'src/assets/test1';
import { Bookinginput } from './bookinginput';

@Injectable({
  providedIn: 'root',
})
export class BookingService {
  airportsList: string[] = airports.map((airport, index) => airport.city);
  // flightsList: Flight[] = flights;
  flightsList: Flight[] = flightTest;
  bookingQuery: Bookinginput = {
    origin: '',
    destination: '',
    adults: '',
    children: '',
    newborn: '',
    takeoffDate: '',
    landingDate: '',
  };
  constructor() {}
}
