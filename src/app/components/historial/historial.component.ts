import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { HttpRegistroService } from '../../services/http-registro.service';
import { RegistroInterface } from '../../interfaces/registro-interface';
import { subscribe } from 'diagnostics_channel';
import { Router } from '@angular/router';

@Component({
  selector: 'app-historial',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './historial.component.html',
  styleUrl: './historial.component.css'
})
export class HistorialComponent implements OnInit {

  ListaRegistro: RegistroInterface[] = [];
  displayedRegistro: RegistroInterface[] = [];
  currentIndex: number = 1;
  itemsPerPage: number = 12;

  constructor(private httpregistroservice: HttpRegistroService, private router: Router) { }

  ngOnInit(): void {
    this.getRegistro();
  }

  getRegistro() {

    this.httpregistroservice.getRegistro().subscribe({
      next: (result) => {
        this.ListaRegistro = result.registro;
      },
      error: (err) => {
        console.log(err);
      }
    });
  }

  loadPage(index: number): void {
    this.currentIndex = index;
    const start = index * this.itemsPerPage;
    const end = start + this.itemsPerPage;
    this.displayedRegistro = this.ListaRegistro.slice(start, end);
  }

  nextPage(): void {
    if ((this.currentIndex + 1) * this.itemsPerPage < this.ListaRegistro.length) {
      this.loadPage(this.currentIndex + 1);
    }
  }

  previousPage(): void {
    if (this.currentIndex > 0) {
      this.loadPage(this.currentIndex - 1);
    }
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
