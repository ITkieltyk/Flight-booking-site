import { AfterViewInit, Component, OnChanges, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { BookingService } from 'src/app/booking.service';
import { FlightsService } from 'src/app/flights.service';

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
  dzisiaj: number = new Date().getDay();
  airportList: string[] = [];
  bookinginput: FormGroup = this.fb.group({
    origin: new FormControl('', {
      validators: [Validators.required],
      updateOn: 'blur',
    }),
    destination: new FormControl('', {
      validators: [Validators.required],
      updateOn: 'blur',
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
    takeoffDateStart: new FormControl('', {
      validators: [],
      updateOn: 'blur',
    }),
    takeoffDateEnd: new FormControl('', {
      validators: [],
      updateOn: 'blur',
    }),
  });

  flightSearch() {
    console.log(this.bookinginput.value);
    this.service2.flightGenerator(this.service2.simDays);
    console.log(this.service2.flights);
    if (this.bookinginput.valid) {
      this.service.bookingQuery = this.bookinginput.value;
      this.router.navigate(['/search-results']);
    }
  }

  ngOnInit(): void {
    this.airportList = this.service.airportsList;
  }
  ngAfterViewInit(): void {}
}
