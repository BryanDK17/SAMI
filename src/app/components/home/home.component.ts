import { Component, OnInit } from '@angular/core';
import { WeatherService } from '../../services/weather.service';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {

  weather: any;

  constructor(private weatherService: WeatherService, private router: Router) { }

  ngOnInit(): void {
  }

  getWeather(zipCode: string, countryCode: string) {
    this.weatherService.getWeather(zipCode, countryCode).subscribe(
      res => {
        console.log(res);
        this.weather = res
      },
      err => console.log(err)
    )
  }

  submitLocation(zipCode: HTMLInputElement, countryCode: HTMLInputElement) {
    if (zipCode.value && countryCode.value) {
      this.getWeather(zipCode.value, countryCode.value);
      zipCode.value = '';
      countryCode.value = '';
    } else {
      alert('Por favor, inserte los valores');
    }
    zipCode.focus();
    return false;
  }

  onHome() {
    this.router.navigateByUrl("home");

  }

  onHistorial() {
    this.router.navigateByUrl("historial");

  }

  onReco() {
    this.router.navigateByUrl("recomendaciones");

  }

  onNoticias() {
    this.router.navigateByUrl("noticias");

  }

  onConfiguracion() {
    this.router.navigateByUrl("configuracion");

  }

}
