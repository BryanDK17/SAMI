import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private apiUrl = 'http://127.0.0.1:8000/api';

  constructor(private http: HttpClient) { }

  login(email: string, password: string): Observable<any> {
    const body = { email, password };
    return this.http.post(`${this.apiUrl}/login`, body);
  }

  // obtenerIdUsuario(): number {
  //   const usuario = JSON.parse(localStorage.getItem('usuario') || '{}');
  //   return usuario.id; // Asegúrate de almacenar el ID al iniciar sesión
  // }


  obtenerIdUsuario(): Observable<any> {
    const headers = {
      Authorization: `Bearer ${localStorage.getItem('token')}`, // Asegúrate de usar el token correcto
    };
    return this.http.get(`${this.apiUrl}/usuario-id`, { headers });
  }

}
