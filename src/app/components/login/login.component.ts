import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

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

  constructor(private router: Router) { }

  onSubmit() {
    // Aquí podrías agregar la lógica de autenticación
    if (this.email === '21690160@tecvalles.mx' && this.password === '123') {
      // Redirigir al componente "Home"
      this.router.navigate(['/home']);
    } else {
      alert('Credenciales incorrectas');
    }
  }

}
