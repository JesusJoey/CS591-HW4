import { Component, OnInit } from '@angular/core';

import { WeatherService } from '../weather.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  user = {
  	name: 'Joey,
  	zipcode: '1000'
  };

  Zipcode = this.user.zipcode;

  constructor(private weatherService: WeatherService) { }

  ngOnInit() {
  }

  onSelect(): void {
    this.Zipcode = this.user.zipcode;
    this.weatherService.setZipcode(this.user.zipcode);
  }

}
