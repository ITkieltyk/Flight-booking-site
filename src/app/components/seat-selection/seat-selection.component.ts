import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { BookingService } from 'src/app/booking.service';

@Component({
  selector: 'app-seat-selection',
  templateUrl: './seat-selection.component.html',
  styleUrls: ['./seat-selection.component.scss'],
})
export class SeatSelectionComponent implements OnInit {
  @Output() windowClose = new EventEmitter<boolean>();

  constructor(private bookingService: BookingService) {}
  seatColumns: string[] = ['A', 'B', 'C', 'D', 'E', 'F'];
  seatRows: number[] = [];
  selectedSeats: string[] = [];
  seatSelect(event: Event) {
    if (
      this.selectedSeats.indexOf(
        (event.target as HTMLButtonElement).innerText
      ) !== -1
    ) {
      this.selectedSeats.splice(
        this.selectedSeats.indexOf(
          (event.target as HTMLButtonElement).innerText
        ),
        1
      );
      (event.target as HTMLButtonElement).classList.toggle('seat-selected');
      console.log(this.selectedSeats);
    } else {
      if (
        this.selectedSeats.length <
        this.bookingService.bookingCache.adults +
          this.bookingService.bookingCache.children
      ) {
        (event.target as HTMLButtonElement).classList.toggle('seat-selected');
        this.selectedSeats.push((event.target as HTMLButtonElement).innerText);
        console.log(this.selectedSeats);
      }
    }
  }

  ngOnInit(): void {
    for (let i = 0; i < 20; i++) {
      this.seatRows.push(i + 1);
    }
  }
  saveSeats() {
    this.bookingService.bookingCache.seats = this.selectedSeats;
    this.windowClose.emit(true);
  }
  cancelSeats() {
    this.selectedSeats = [];
    const tempSeats = document.getElementsByClassName('seat-selected');
    for (let i = 0; i < tempSeats.length; i++) {
      tempSeats[i].classList.toggle('seat-selected');
    }

    this.windowClose.emit(true);
  }
}
