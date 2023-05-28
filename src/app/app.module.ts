import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FooterComponent } from './components/footer/footer.component';
import { HomepageComponent } from './components/homepage/homepage.component';
import { LoginPopupComponent } from './components/login-popup/login-popup.component';
import { BookingformComponent } from './components/bookingform/bookingform.component';
import { FlightTableComponent } from './components/flight-table/flight-table.component';
import { BookingService } from './booking.service';
import { DurationPipe } from './duration.pipe';
import { FlightsService } from './flights.service';
import { HttpClientModule } from '@angular/common/http';
import { LandingtimerPipe } from './landingtimer.pipe';
import { RegisterComponent } from './components/register/register.component';
import { BookingSummaryComponent } from './components/booking-summary/booking-summary.component';
import { LoginService } from './login.service';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomepageComponent,
    LoginPopupComponent,
    BookingformComponent,
    FlightTableComponent,
    DurationPipe,
    LandingtimerPipe,
    RegisterComponent,
    BookingSummaryComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [BookingService, FlightsService, LoginService],
  bootstrap: [AppComponent],
})
export class AppModule {}
