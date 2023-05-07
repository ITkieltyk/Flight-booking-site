import { Component, OnInit } from '@angular/core';
import { BookingService } from '../booking.service';
import { Flight } from '../flight';
import { Bookinginput } from '../bookinginput';

@Component({
  selector: 'app-flight-table',
  templateUrl: './flight-table.component.html',
  styleUrls: ['./flight-table.component.scss'],
})
export class FlightTableComponent implements OnInit {
  constructor(private readonly service: BookingService) {}
  dateToDay(date: string) {
    // const dateArr: string[] = date.split('-');
    return new Date(date).getDay;
  }
  query: Bookinginput = {
    origin: '',
    destination: '',
    adults: '',
    children: '',
    newborn: '',
    takeoffDate: '',
    landingDate: '',
  };
  filteredFlights: Flight[] = this.service.flightsList;
  ngOnInit(): void {
    this.query = this.service.bookingQuery;

    this.filteredFlights = this.service.flightsList.filter(
      (el) =>
        el.destination.city === this.query.destination &&
        el.origin.city === this.query.origin
    );
  }
}
