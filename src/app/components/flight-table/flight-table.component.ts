import { AfterViewInit, Component, OnInit } from '@angular/core';
import { BookingService } from '../../booking.service';
import { Flight } from '../../flight';
import { Bookinginput } from '../../bookinginput';
import { FlightsService } from '../../flights.service';
import { Forecast } from '../../weatherInterfaces';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/login.service';

@Component({
  selector: 'app-flight-table',
  templateUrl: './flight-table.component.html',
  styleUrls: ['./flight-table.component.scss'],
})
export class FlightTableComponent implements OnInit, AfterViewInit {
  constructor(
    private service: BookingService,
    private service2: FlightsService,
    private router: Router,
    private loginService: LoginService
  ) {}

  secondLuggage: boolean = false;
  forecastTemp: number = 0;
  forecastIcon: string = './../../assets/loading.gif';
  query: Bookinginput = {
    origin: '',
    destination: '',
    adults: '',
    children: '',
    newborn: '',
    takeoffDateStart: '',
    takeoffDateEnd: '',
  };
  bookFlightClick(clickedFlight: Flight) {
    console.log(
      'Flight: ',
      clickedFlight,
      'xtra luggage: ',
      this.secondLuggage
    );
    if (this.loginService.loginFlag) {
      this.loginService.loggedInUser.bookedFlights.push(clickedFlight);
      this.loginService.loggedInUser.adults = Number(
        this.service.bookingQuery.adults
      );
      this.loginService.loggedInUser.children = Number(
        this.service.bookingQuery.children
      );
      this.loginService.loggedInUser.newborn = Number(
        this.service.bookingQuery.newborn
      );
      this.loginService.loggedInUser.secondLuggage = this.secondLuggage;
      console.log(
        'loggedInUser bookedflight',
        this.loginService.loggedInUser.bookedFlights
      );
      this.router.navigate(['/summary']);
    } else {
      alert('You must be loggedIn to book a flight!');
    }
  }
  queryDateStart: Date = new Date();
  queryDateEnd: Date = new Date();
  filteredFlights: Flight[] = this.service2.flights;
  ngOnInit(): void {
    this.query = this.service.bookingQuery;
    this.queryDateStart = new Date(this.query.takeoffDateStart.valueOf());
    this.queryDateEnd = new Date(this.query.takeoffDateEnd.valueOf());

    this.filteredFlights = this.service2.flights.filter(
      (el) =>
        el.destination.city === this.query.destination &&
        el.origin.city === this.query.origin &&
        el.date >= this.queryDateStart &&
        el.date <= this.queryDateEnd
    );
    this.filteredFlights = this.filteredFlights.sort(
      (a: Flight, b: Flight) => a.date.getTime() - b.date.getTime()
    );
  }
  ngAfterViewInit(): void {
    this.service.getForecast(this.query.destination.valueOf()).subscribe({
      next: (res: any) => {
        this.forecastTemp = Math.round((res.main.temp - 273) * 10) / 10;
        // console.log(res);
        this.forecastIcon = `https://openweathermap.org/img/wn/${res.weather[0].icon}@2x.png`;
      },
    });
  }
}
