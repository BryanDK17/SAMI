import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-noticias',
  standalone: true,
  imports: [],
  templateUrl: './noticias.component.html',
  styleUrl: './noticias.component.css'
})
export class NoticiasComponent {

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
