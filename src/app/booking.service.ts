import { Injectable } from '@angular/core';
import { Airport } from './airport';

import { airports } from 'src/assets/airports';
import { Flight } from './flight';
// import { flightTest } from 'src/assets/test1';
import { Bookinginput } from './bookinginput';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class BookingService {
  airportsList: string[] = airports.map((airport, index) => airport.city);
  // flightsList: Flight[] = flights;
  flightsList: Flight[] = [];
  bookingQuery: Bookinginput = {
    origin: '',
    destination: '',
    adults: '',
    children: '',
    newborn: '',
    takeoffDateStart: '',
    takeoffDateEnd: '',
  };
  constructor(private http: HttpClient) {}

  getForecast(city: string) {
    const url: string = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=42a491361bd2e4afc756141d720279eb`;
    return this.http.get(url);
  }
}
