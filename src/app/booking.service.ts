import { Injectable } from '@angular/core';
import { Airport } from './airport';
import { flights } from 'src/assets/flights';
import { airports } from 'src/assets/airports';

@Injectable({
  providedIn: 'root',
})
export class BookingService {
  airportsList: string[] = airports.map((airport, index) => airport.city);
  constructor() {}
}
