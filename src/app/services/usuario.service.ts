import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  private apiUrl = 'http://127.0.0.1:8000/api/usuario';

  constructor(private http: HttpClient) { }

  //metodo de registro de usuario
  registrarUsuario(usuario: any): Observable<any> {
    return this.http.post(this.apiUrl, usuario);
  }

  // obtenerUsuario(id: number): Observable<any> {
  //   return this.http.get(`${this.apiUrl}/usuario/${id}`);
  // }

  actualizarUsuario(id: number, datos: any): Observable<any> {
    return this.http.patch(`${this.apiUrl}/usuario/${id}`, datos);
  }

  obtenerUsuarioAutenticado(): Observable<any> {
    return this.http.get(`${this.apiUrl}/usuario-autenticado`);
  }


  obtenerUsuario(id: number): Observable<any> {
    const headers = {
      Authorization: `Bearer ${localStorage.getItem('token')}`, // Asegúrate de usar el token correcto
    };
    return this.http.get(`${this.apiUrl}/usuario/${id}`, { headers });
  }



}
