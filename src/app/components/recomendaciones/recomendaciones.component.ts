import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-recomendaciones',
  standalone: true,
  imports: [],
  templateUrl: './recomendaciones.component.html',
  styleUrl: './recomendaciones.component.css'
})
export class RecomendacionesComponent {

  constructor(private router: Router) { }

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
