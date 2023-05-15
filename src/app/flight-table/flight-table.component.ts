import { Component, OnInit } from '@angular/core';
import { BookingService } from '../booking.service';
import { Flight } from '../flight';
import { Bookinginput } from '../bookinginput';
import { FlightsService } from '../flights.service';

@Component({
  selector: 'app-flight-table',
  templateUrl: './flight-table.component.html',
  styleUrls: ['./flight-table.component.scss'],
})
export class FlightTableComponent implements OnInit {
  constructor(
    private service: BookingService,
    private service2: FlightsService
  ) {}

  query: Bookinginput = {
    origin: '',
    destination: '',
    adults: '',
    children: '',
    newborn: '',
    takeoffDateStart: '',
    takeoffDateEnd: '',
  };

  queryDateStart: Date = new Date();
  queryDateEnd: Date = new Date();
  filteredFlights: Flight[] = this.service2.flights;
  ngOnInit(): void {
    this.query = this.service.bookingQuery;
    this.queryDateStart = new Date(this.query.takeoffDateStart.valueOf());
    this.queryDateEnd = new Date(this.query.takeoffDateEnd.valueOf());

    this.filteredFlights = this.service2.flights.filter(
      (el) =>
        el.destination.city === this.query.destination &&
        el.origin.city === this.query.origin &&
        el.date >= this.queryDateStart &&
        el.date <= this.queryDateEnd
    );
    this.filteredFlights = this.filteredFlights.sort(
      (a: Flight, b: Flight) => a.date.getTime() - b.date.getTime()
    );
  }
}
