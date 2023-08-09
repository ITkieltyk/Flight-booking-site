import { Component, OnInit } from '@angular/core';
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
    private readonly router: Router
  ) {}

  ngOnInit(): void {}

  toogleSize(target: HTMLElement) {
    target.classList.toggle('short');
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
