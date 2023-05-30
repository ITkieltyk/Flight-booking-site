import { AfterViewInit, Component } from '@angular/core';
import { Router } from '@angular/router';
import { FlightsService } from './flights.service';

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
    private service2: FlightsService
  ) {}

  ngAfterViewInit() {
    if (this.service2.flights.length === 0) {
      this.service2.flightGenerator(this.service2.simDays);
      console.log(this.service2.flights);
    }
  }
}
