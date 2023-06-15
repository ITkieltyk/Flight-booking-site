import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/login.service';

@Component({
  selector: 'app-login-popup',
  templateUrl: './login-popup.component.html',
  styleUrls: ['./login-popup.component.scss'],
})
export class LoginPopupComponent implements OnInit {
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
    console.log(
      'login: ',
      this.loginForm.value.login,
      'pass: ',
      this.loginForm.value.pass
    );
    console.log('Users ', this.loginServ.Users);
    if (
      this.loginServ.Users.filter(
        (val) =>
          val.email === this.loginForm.value.login &&
          val.password === this.loginForm.value.pass
      ).length !== 0
    ) {
      this.loginServ.loginFlag = true;
      this.loginServ.loggedInUser = this.loginServ.Users.filter(
        (val2) =>
          val2.email === this.loginForm.value.login &&
          val2.password === this.loginForm.value.pass
      )[0];

      this.openClose.emit(true);
    } else {
      alert(`Credentials incorrect!`);
    }
  }
}
