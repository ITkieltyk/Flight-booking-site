import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomepageComponent } from './components/homepage/homepage.component';
import { FlightTableComponent } from './components/flight-table/flight-table.component';
import { RegisterComponent } from './components/register/register.component';
import { BookingSummaryComponent } from './components/booking-summary/booking-summary.component';
import { UserMenuComponent } from './components/user-menu/user-menu.component';

const routes: Routes = [
  { path: '', redirectTo: 'main-page', pathMatch: 'full' },
  { path: 'main-page', component: HomepageComponent },
  { path: 'search-results', component: FlightTableComponent },
  { path: 'registration', component: RegisterComponent },
  { path: 'summary', component: BookingSummaryComponent },
  { path: 'user-menu', component: UserMenuComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
