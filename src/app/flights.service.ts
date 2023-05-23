import { Injectable } from '@angular/core';
import { Flight } from 'src/app/flight';
import { Company } from 'src/app/company';
import { Airport } from 'src/app/airport';
import { airports } from '../assets/airports';
@Injectable({
  providedIn: 'root',
})
export class FlightsService {
  constructor() {}
  today: Date = new Date();
  simDays: number = 60;
  planes: string[] = ['Embraer', 'Boeing 737', 'Boeing 747'];
  companies: Company[] = [
    {
      name: 'Lufthansa',
      flightNamePrefix: 'LH',
      logo: './../../assets/Lufthansa.png',
    },
    {
      name: 'LOT',
      flightNamePrefix: 'LT',
      logo: './../../assets/PLL LOT.png',
    },
    {
      name: 'Tap Portugal',
      flightNamePrefix: 'TP',
      logo: './../../assets/Tap portugal.png',
    },
    {
      name: 'Emirates',
      flightNamePrefix: 'EM',
      logo: './../../assets/Emirates.png',
    },
    {
      name: 'Ryan Air',
      flightNamePrefix: 'RA',
      logo: './../../assets/RyanAir.jpeg',
    },
  ];
  flights: Flight[] = [];

  flightGenerator(duration: number) {
    for (let y = 0; y < duration; y++) {
      for (let i = 0; i < airports.length; i++) {
        for (let x = 0; x < 5; x++) {
          let startAirport: Airport;
          let landAirport: Airport;
          startAirport = airports[Math.floor(Math.random() * airports.length)];
          do {
            landAirport = airports[Math.floor(Math.random() * airports.length)];
          } while (startAirport === landAirport);
          let flightDate: Date = new Date();
          flightDate.setDate(this.today.getDate() + y);
          flightDate.setHours(Math.floor(Math.random() * 24));
          const duration: number =
            startAirport.coords - landAirport.coords > 0
              ? (startAirport.coords - landAirport.coords) * 30 + 30
              : (landAirport.coords - startAirport.coords) * 30 + 30;
          const price: number =
            50 + (duration / 30) * 25 + Math.round((Math.random() - 0.5) * 10);
          const company: Company =
            this.companies[Math.floor(this.companies.length * Math.random())];
          const element: Flight = {
            origin: startAirport,
            destination: landAirport,
            date: flightDate,
            durationM: duration,
            plane:
              duration > 300
                ? this.planes[2]
                : duration > 90
                ? this.planes[1]
                : this.planes[0],
            flightNumber:
              company.flightNamePrefix +
              Math.floor(Math.random() * 9999).toString(),
            company: company,
            flightPrice: price,
          };

          this.flights.push(element);
        }
      }
    }
  }
}
