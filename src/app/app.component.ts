import { AfterViewInit, Component } from '@angular/core';
import { Router } from '@angular/router';
import { FlightsService } from './services/flights.service';
import { LoginService } from './services/login.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements AfterViewInit {
  title = 'Flight-booking';

  routingVariable: string = 'main-page';
  constructor(
    private readonly router: Router,
    private service2: FlightsService,
    public loginService: LoginService
  ) {}
  infoData: string = `User ${this.loginService.loggedInUser.name} logged in`;
  isLogged: boolean = false;
  modalVisibility: boolean = false;
  modalVis(flag: boolean, el: HTMLDivElement) {
    !flag ? el.classList.toggle('hidden') : '';
  }

  ngAfterViewInit() {
    if (this.service2.flights.length === 0) {
      this.service2.flightGenerator(this.service2.simDays);
    }

    this.modalVisibility = this.isLogged;
  }
}
