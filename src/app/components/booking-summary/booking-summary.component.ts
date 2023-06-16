import {
  AfterViewInit,
  Component,
  ElementRef,
  OnChanges,
  OnInit,
  SimpleChanges,
  ViewChild,
} from '@angular/core';
import { BookedFlight } from 'src/app/services/booked-flight';
import { BookingService } from 'src/app/services/booking.service';
import { LoginService } from 'src/app/services/login.service';
import { SeatSelectionComponent } from '../seat-selection/seat-selection.component';

@Component({
  selector: 'app-booking-summary',
  templateUrl: './booking-summary.component.html',
  styleUrls: ['./booking-summary.component.scss'],
})
export class BookingSummaryComponent implements OnInit, AfterViewInit {
  @ViewChild('seatSelection') 'seatSelect': ElementRef<HTMLDivElement>;

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
  seatsChoosing(element: HTMLDivElement) {
    element.classList.toggle('plane-seats-visible');
    element.classList.toggle('plane-seats-hidden');
  }

  seatsChoosingShow(event: boolean) {
    if (event) {
      console.log('event passed', event);

      this.seatSelect.nativeElement.classList.toggle('plane-seats-visible');

      console.log('event passed', event);
    }
  }
  confirmation() {
    this.loginService.loggedInUser.bookedFlights.push(
      this.bookingService.bookingCache
    );
    alert('Flight has been pushed!');
  }
  selectSeats(el: HTMLDivElement) {
    el.classList.toggle('plane-seats-visible');
  }
}
