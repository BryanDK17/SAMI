import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  apiKey = '506ebc7cdd88e7b509df1fb9afcefb6f';
  URI: string = '';

  constructor(private http: HttpClient) {
    this.URI = `https://api.openweathermap.org/data/2.5/weather?appid=${this.apiKey}&units=metric&q=`
  }

  getWeather(zipCode: string, countryCode: string) {
    return this.http.get(`${this.URI}${zipCode},${countryCode}`);
  }

}
