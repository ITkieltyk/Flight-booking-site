import { Injectable } from '@angular/core';
import { Person } from '../interfaces/person';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  constructor() {}
  Users: Person[] = [
    {
      name: 'admin',
      surname: 'admin',
      email: 'admin@admin.pl',
      password: '123456',
      bookedFlights: [],
    },
  ];
  loginFlag: boolean = false;
  loggedInUser: Person = {
    name: '',
    surname: '',
    email: '',
    password: '',
    bookedFlights: [],
  };
}
