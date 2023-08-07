import { Injectable } from '@angular/core';
import { Person } from '../interfaces/person';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { HttpParams } from '@angular/common/http';
import { DBUser } from '../interfaces/dbuser';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  constructor(private http: HttpClient) {}
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

  userToMongo(body: Person) {
    const server = 'http://localhost:27002/setuser';

    return this.http.post(server, body);
  }
  getuser(email: string, pass: string) {
    const server = 'http://localhost:27002/getusers';
    const params = new HttpParams().set('login', email).set('password', pass);
    return this.http.get<DBUser>(server, {
      params,
    });
  }
  pushFlight(user: Person) {
    const server = 'http://localhost:27002/pushflight';

    return this.http.put<DBUser>(server, user);
  }
  // saveusers() {
  //   this.getuser().subscribe(res:

  //   )

  // }
}
