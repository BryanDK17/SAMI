import { Component } from '@angular/core';
import { UsuarioService } from '../../services/usuario.service';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registro',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './registro.component.html',
  styleUrl: './registro.component.css'
})
export class RegistroComponent {

  usuario = {
    nombre: '',
    apellido: '',
    edad: null,
    email: '',
    password: ''
  };

  constructor(private usuarioService: UsuarioService, private router: Router) { }

  registrar() {
    this.usuarioService.registrarUsuario(this.usuario).subscribe({
      next: (response) => {
        alert('Usuario registrado exitosamente');
      },
      error: (error) => {
        console.error(error);
        alert('Ha ocurrido un error al registrar el usuario');
      }
    });
  }

  backLogin() {
    this.router.navigateByUrl("login");
  }

}
