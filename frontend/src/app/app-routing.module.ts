import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { UserComponent } from './user/user.component';
import { WeatherComponent } from './weather/weather.component';

const routes: Routes = [
  { path: '', redirectTo: '/user', pathMatch: 'full' },
  { path: 'user', component: UserComponent },
  { path: 'weather', component: WeatherComponent }
];

const ngModule = NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
});

@ngModule
export class AppRoutingModule { }
