import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HttpRegistroService {

  API_URL: string = 'http://127.0.0.1:8000/api/registro';

  constructor(protected http: HttpClient) { }

  getRegistro(): Observable<any> {
    return this.http.get(this.API_URL).pipe(res => res);
  }

}
