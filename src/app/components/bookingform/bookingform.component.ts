import { formatDate } from '@angular/common';
import { AfterViewInit, Component, OnChanges, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  MinLengthValidator,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { BookingService } from 'src/app/services/booking.service';
import { FlightsService } from 'src/app/services/flights.service';

@Component({
  selector: 'app-bookingform',
  templateUrl: './bookingform.component.html',
  styleUrls: ['./bookingform.component.scss'],
})
export class BookingformComponent implements OnInit, AfterViewInit {
  constructor(
    private readonly fb: FormBuilder,
    private service: BookingService,
    private readonly router: Router,
    private service2: FlightsService
  ) {}
  dzisiaj: string = new Date().toISOString().split('T')[0];
  airportList: string[] = [];
  bookinginput: FormGroup = this.fb.group({
    origin: new FormControl('', {
      validators: [Validators.required],
      updateOn: 'change',
    }),
    destination: new FormControl('', {
      validators: [Validators.required],
      updateOn: 'change',
    }),
    adults: new FormControl('1', {
      validators: [Validators.required],
      updateOn: 'blur',
    }),
    children: new FormControl('0', {
      validators: [],
      updateOn: 'blur',
    }),
    newborn: new FormControl('0', {
      validators: [],
      updateOn: 'blur',
    }),
    takeoffDateStart: new FormControl(this.dzisiaj, {
      validators: [],
      updateOn: 'blur',
    }),
    takeoffDateEnd: new FormControl('', {
      validators: [],
      updateOn: 'blur',
    }),
  });

  flightSearch() {
    if (this.bookinginput.valid) {
      this.service.bookingQuery = this.bookinginput.value;
      this.router.navigate(['/search-results'], {
        queryParams: {
          origin: this.bookinginput.value.origin,
          destination: this.bookinginput.value.destination,
          adults: this.bookinginput.value.adults,
          children: this.bookinginput.value.children,
          newborn: this.bookinginput.value.newborn,
          takeoffDateStart: this.bookinginput.value.takeoffDateStart,
          takeoffDateEnd: this.bookinginput.value.takeoffDateEnd,
        },
      });
    }
  }

  ngOnInit(): void {
    this.airportList = this.service.airportsList;
  }
  ngAfterViewInit(): void {}
}
