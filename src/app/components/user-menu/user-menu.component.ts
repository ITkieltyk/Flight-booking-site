import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { Person } from 'src/app/interfaces/person';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-user-menu',
  templateUrl: './user-menu.component.html',
  styleUrls: ['./user-menu.component.scss'],
})
export class UserMenuComponent implements OnInit {
  constructor(
    readonly loginService: LoginService,
    private readonly router: Router,
    private fb: FormBuilder
  ) {}

  loadedUser: Person = {} as Person;
  passwordChangeForm: FormGroup = this.fb.group({
    oldPass: new FormControl('', {
      validators: [Validators.required],
    }),
    newPass: new FormControl('', {
      validators: [Validators.required, Validators.minLength(6)],
    }),
    passCheck: new FormControl('', {
      validators: [Validators.required, Validators.minLength(6)],
    }),
  });
  ngOnInit(): void {
    this.loadedUser = this.loginService.loggedInUser;
  }

  toogleSize(target: HTMLElement) {
    target.classList.toggle('short');
  }

  passwordChange(oldPass: string, newPass: string, passcheck: string) {
    if (oldPass === this.loginService.loggedInUser.password) {
      if (newPass === passcheck) {
        this.loginService.loggedInUser.password = newPass;
        this.loginService
          .passUpdate(this.loginService.loggedInUser)
          .subscribe();
        console.log('Pass update attempt ', newPass);
      } else {
        console.log('New pass not match pass check');
      }
    } else {
      console.log('Old pass incorrect');
    }
  }

  logOutUser() {
    this.loginService.loggedInUser = {} as Person;
    this.loginService.loginFlag = false;
    localStorage.removeItem('login');
    localStorage.removeItem('password');

    console.log(localStorage.getItem('login'));
    this.router.navigate(['/main-page']);
  }
}
