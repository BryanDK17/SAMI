import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { subscribe } from 'diagnostics_channel';
import { AuthService } from '../../services/auth.service';
import { response } from 'express';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})

export class LoginComponent {

  email: string = '';
  password: string = '';

  constructor(private authService: AuthService, private router: Router) { }

  onLogin() {

    this.authService.login(this.email, this.password).subscribe(
      (response) => {
        console.log('Inicio de sesion exitoso:', response);
        this.router.navigateByUrl("home");
      },
      (error) => {
        console.error('Error de inicio de sesion:', error);
        alert('Credenciales incorrectas');
      }
    );
  }

  Registro() {
    this.router.navigateByUrl("registro");
  }


}