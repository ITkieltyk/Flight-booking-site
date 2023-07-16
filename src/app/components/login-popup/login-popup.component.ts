import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { DBUser } from 'src/app/interfaces/dbuser';
import { Person } from 'src/app/interfaces/person';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-login-popup',
  templateUrl: './login-popup.component.html',
  styleUrls: ['./login-popup.component.scss'],
})
export class LoginPopupComponent implements OnInit {
  validCredentials: boolean = false;

  constructor(
    private router: Router,
    private loginServ: LoginService,
    private fb: FormBuilder
  ) {}
  @Output() openClose = new EventEmitter<boolean>();
  loginForm: FormGroup = this.fb.group({
    login: new FormControl('', {
      validators: [],
    }),
    pass: new FormControl('', {
      validators: [],
    }),
  });

  ngOnInit(): void {}
  login: string = '';
  pass: string = '';

  signInButton(): void {
    this.router.navigate(['/registration']);
    this.openClose.emit(true);
  }
  logInButton() {
    this.loginServ
      .getuser(this.loginForm.value.login, this.loginForm.value.pass)
      .subscribe({
        next: (res) => {
          console.log(res);
          if (res.users.length) {
            this.loginServ.loggedInUser = res.users[0];
            this.loginServ.loginFlag = true;
            this.openClose.emit(true);
            console.log(this.loginServ.loggedInUser);
          } else {
            this.validCredentials = false;
            alert(`Credentials incorrect!`);
          }
        },
      });
    setTimeout(() => {
      console.log('Status użytkownika:', this.validCredentials);
    }, 1500);

    // if (
    //   this.loginServ.Users.filter(
    //     (val) =>
    //       val.email === this.loginForm.value.login &&
    //       val.password === this.loginForm.value.pass
    //   ).length !== 0
    // ) {
    //   this.loginServ.loggedInUser = this.loginServ.Users.filter(
    //     (val2) =>
    //       val2.email === this.loginForm.value.login &&
    //       val2.password === this.loginForm.value.pass
    //   )[0];

    //   this.loginServ.loginFlag = true;
    //   this.openClose.emit(true);
    // } else {
    //   alert(`Credentials incorrect!`);
    // }
  }
}
