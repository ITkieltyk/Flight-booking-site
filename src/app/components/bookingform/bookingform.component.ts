import { AfterViewInit, Component, OnChanges, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { BookingService } from 'src/app/booking.service';

@Component({
  selector: 'app-bookingform',
  templateUrl: './bookingform.component.html',
  styleUrls: ['./bookingform.component.scss'],
})
export class BookingformComponent implements OnInit, AfterViewInit {
  constructor(
    private readonly fb: FormBuilder,
    private service: BookingService,
    private readonly router: Router
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
    adults: new FormControl('', {
      validators: [Validators.required],
      updateOn: 'blur',
    }),
    children: new FormControl('', {
      validators: [Validators.required],
      updateOn: 'blur',
    }),
    newborn: new FormControl('', {
      validators: [Validators.required],
      updateOn: 'blur',
    }),
    takeoffDate: new FormControl('', {
      validators: [Validators.required],
      updateOn: 'blur',
    }),
    landingDate: new FormControl('', {
      validators: [Validators.required],
      updateOn: 'blur',
    }),
  });

  flightSearch() {
    console.log(this.bookinginput.value);
    alert(Object.entries(this.bookinginput.value));
    this.service.bookingQuery = this.bookinginput.value;
    this.router.navigate(['/search-results']);
  }

  ngOnInit(): void {
    this.airportList = this.service.airportsList;
  }
  ngAfterViewInit(): void {}
}
