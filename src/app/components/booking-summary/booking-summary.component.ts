import { AfterViewInit, Component, OnInit } from '@angular/core';
import { BookedFlight } from 'src/app/booked-flight';
import { BookingService } from 'src/app/booking.service';
import { LoginService } from 'src/app/login.service';

@Component({
  selector: 'app-booking-summary',
  templateUrl: './booking-summary.component.html',
  styleUrls: ['./booking-summary.component.scss'],
})
export class BookingSummaryComponent implements OnInit, AfterViewInit {
  constructor(
    private loginService: LoginService,
    private bookingService: BookingService
  ) {}

  bookingData: BookedFlight = {} as BookedFlight;
  pricePerAdult: number | null = null;
  pricePerChild: number | null = null;
  pricePerNewBorn: number | null = null;
  totalPrice: number | null = null;

  ngOnInit(): void {
    if (this.bookingService.bookingCache !== undefined) {
      this.bookingData = this.bookingService.bookingCache;
      this.pricePerAdult = this.bookingData.flight.flightPrice;
      this.pricePerChild = Math.floor(this.pricePerAdult * 0.66);
      this.pricePerNewBorn = 25;
      this.totalPrice =
        this.pricePerAdult * this.bookingData.adults +
        this.pricePerChild * this.bookingData.children +
        this.pricePerNewBorn * this.bookingData.newborn;
    }
  }
  ngAfterViewInit(): void {}
}
