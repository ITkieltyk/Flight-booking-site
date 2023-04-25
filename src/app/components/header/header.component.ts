import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  @ViewChild('loginPop') 'login': ElementRef<HTMLDivElement>;

  constructor() {}

  loginClick(element: HTMLDivElement) {
    element.classList.toggle('login-visibility-on');
  }
  ngOnInit(): void {}
}
