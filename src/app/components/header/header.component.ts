import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  @ViewChild('loginPop') 'login': ElementRef<HTMLDivElement>;

  constructor(private readonly router: Router) {}
  defaultUserPic: string =
    'https://www.pngall.com/wp-content/uploads/5/Profile-PNG-File-Download-Free.png';
  userPic: string = '';
  loginClick(element: HTMLDivElement) {
    element.classList.toggle('login-visibility-on');
  }
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
