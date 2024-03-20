import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SearchComponent } from './pages/website/search/search.component';
import { BookFlightComponent } from './pages/website/book-flight/book-flight.component';
import { MyBookingsComponent } from './pages/website/my-bookings/my-bookings.component';
import { LayoutComponent } from './pages/admin/layout/layout.component';
import { AirportComponent } from './pages/admin/airport/airport.component';
import { AllFlightsComponent } from './pages/admin/all-flights/all-flights.component';
import { CityComponent } from './pages/admin/city/city.component';
import { BookingsComponent } from './pages/admin/bookings/bookings.component';
import { LoginComponent } from './pages/admin/login/login.component';
import { NewFlightComponent } from './pages/admin/new-flight/new-flight.component';

const routes: Routes = [{ path: '', redirectTo: 'search', pathMatch: 'full' },
  { path: 'search', component: SearchComponent , title: 'Search Flights'},
  { path: 'book-flight', component: BookFlightComponent, title: 'Book New Ticket' },
  { path: 'Bookings', component: MyBookingsComponent, title: 'My Bookings' },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: '',
    component: LayoutComponent,
    children: [
      { path: 'airport', component: AirportComponent, title: 'Airport' },
      { path: 'city', component: CityComponent, title: 'City' },
      { path: 'all-bookings', component: BookingsComponent, title: 'Bookings' },
      {path: 'new-flight', component:NewFlightComponent, title: 'New Flight'}
      
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
