import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/login.service';
import { Person } from 'src/app/person';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit {
  constructor(
    private fb: FormBuilder,
    private regService: LoginService,
    private router: Router
  ) {}
  signInForm: FormGroup = this.fb.group({
    name: new FormControl('', {
      validators: [Validators.required],
      updateOn: 'submit',
    }),
    surname: new FormControl('', {
      validators: [Validators.required],
      updateOn: 'submit',
    }),
    email: new FormControl('', {
      validators: [Validators.required, Validators.email],
      updateOn: 'submit',
    }),
    password: new FormControl('', {
      validators: [Validators.required, Validators.minLength(6)],
      updateOn: 'submit',
    }),
  });

  registerButton() {
    if (this.signInForm.valid) {
      const formValues = this.signInForm.value;
      const UserData: Person = {
        name: formValues.name,
        surname: formValues.surname,
        email: formValues.email,
        password: formValues.password,
        bookedFlights: [],
      };
      this.regService.Users.push(UserData);
      console.log('Users[0]', this.regService.Users[0]);
      console.log('Form input', formValues);
      this.router.navigate(['/main-page']);
    }
  }

  ngOnInit(): void {}
}
