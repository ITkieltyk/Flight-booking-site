import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/login.service';

@Component({
  selector: 'app-booking-summary',
  templateUrl: './booking-summary.component.html',
  styleUrls: ['./booking-summary.component.scss'],
})
export class BookingSummaryComponent implements OnInit {
  constructor(private loginService: LoginService) {}

  bookingData: string = '';

  ngOnInit(): void {
    if (this.loginService.loggedInUser.bookedFlights !== undefined)
      this.bookingData =
        this.loginService.loggedInUser.bookedFlights[0].flightNumber;
  }
}
