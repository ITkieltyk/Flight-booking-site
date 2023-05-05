import { Component, OnInit } from '@angular/core';
import { BookingService } from '../booking.service';
import { Flight } from '../flight';

@Component({
  selector: 'app-flight-table',
  templateUrl: './flight-table.component.html',
  styleUrls: ['./flight-table.component.scss'],
})
export class FlightTableComponent implements OnInit {
  constructor(private readonly service: BookingService) {}

  filteredFlights: Flight[] = this.service.flightsList;

  ngOnInit(): void {}
}
