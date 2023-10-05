import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

const url = 'http://localhost:8080/api/auth/';

@Injectable({
  providedIn: 'root',
})
export class AutenticacionService {
  constructor(private http: HttpClient) {}

  ingresar(usuario: string, clave: string): Observable<any> {

    return this.http.post(url + 'signin', {
      username: usuario,
      password: clave,
    });
  }

  registrar(
    usuario: string,
    correoElectronico: string,
    clave: string
  ): Observable<any> {
    return this.http.post(url + 'signup', {
      username: usuario,
      email: correoElectronico,
      password: clave,
    });
  }
}
