import { HttpClient } from '@angular/common/http';
import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/services/login.service';
import { subscribeOn } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  @ViewChild('loginPop') 'login': ElementRef<HTMLDivElement>;

  constructor(private readonly router: Router, private regser: LoginService) {}
  defaultUserPic: string =
    'https://www.pngall.com/wp-content/uploads/5/Profile-PNG-File-Download-Free.png';
  userPic: string = '';

  loginClick(element: HTMLDivElement) {
    element.classList.toggle('login-visibility-on');
  }
  setLoginVisibility(flag: boolean) {
    if (flag) {
      this.loginClick(this.login.nativeElement);
    }
  }

  // headerShrink(el: HTMLElement) {
  //   el.classList.toggle('header-shrink');
  // }

  logoHome() {
    this.router.navigate(['/main-page']);
  }
  ngOnInit(): void {
    this.userPic = this.defaultUserPic;
  }

  ngAfterViewInit() {
    this.userPic = this.defaultUserPic;
  }
}
