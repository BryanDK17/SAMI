import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { UsuarioService } from '../../services/usuario.service';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-configuracion',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './configuracion.component.html',
  styleUrl: './configuracion.component.css'
})
export class ConfiguracionComponent implements OnInit {

  usuario: any = {}; // Objeto para almacenar los datos del usuario actual

  constructor(private authService: AuthService, private usuarioService: UsuarioService, private router: Router) { }

  ngOnInit(): void {
    this.cargarDatosUsuario();
  }

  cargarDatosUsuario(): void {
    // Primero obtenemos el ID del usuario autenticado
    this.authService.obtenerIdUsuario().subscribe({
      next: (response) => {
        const usuarioId = response.id; // Obtenemos el ID del usuario
        this.usuarioService.obtenerUsuario(usuarioId).subscribe({
          next: (data) => {
            this.usuario = data.usuario; // Asignamos los datos del usuario
          },
          error: (err) => {
            console.error('Error al cargar los datos del usuario:', err);
          },
        });
      },
      error: (err) => {
        console.error('Error al obtener el ID del usuario:', err);
      },
    });
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
