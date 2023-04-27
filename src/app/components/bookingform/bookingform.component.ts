import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-bookingform',
  templateUrl: './bookingform.component.html',
  styleUrls: ['./bookingform.component.scss'],
})
export class BookingformComponent implements OnInit {
  constructor(private readonly fb: FormBuilder) {}
  dzisiaj: number = new Date().getDay();
  bookinginput = new FormGroup({
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

  flightSearch() {}

  ngOnInit(): void {
    this.dzisiaj = new Date().getDate();
  }
}
