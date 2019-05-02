import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({providedIn: 'root'})
export class WeatherService {

  zipcode = '1000';
  API_URL = 'http://localhost:4000/api';

  constructor( private http: HttpClient ) { }

  getWeather() {
    return this.http.get(`${this.API_URL}/${this.zipcode}`);
  }
  getZipcode (): Observable<zipcode> {
    return this.http.get<zipcode>(this.zipcode);
  }

  setZipcode(zipcode) {
    this.zipcode = zipcode;
    console.log(zipcode);
  }

}
