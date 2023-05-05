import { Injectable } from '@angular/core';
import { Airport } from './airport';
import { flights } from 'src/assets/flights';
import { airports } from 'src/assets/airports';
import { Flight } from './flight';

@Injectable({
  providedIn: 'root',
})
export class BookingService {
  airportsList: string[] = airports.map((airport, index) => airport.city);
  flightsList: Flight[] = flights.filter(
    (el: Flight) =>
      el.origin === this.bookingQuery.origin &&
      el.destination === this.bookingQuery.destination
  );
  bookingQuery: any = {};
  constructor() {}
}
