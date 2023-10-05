import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TokenService {
  private TOKEN_KEY = 'jwt-token';
  private USER_KEY = 'user';

  constructor() { }

  guardarToken(token: string) {
    localStorage.removeItem(this.TOKEN_KEY);
    localStorage.setItem(this.TOKEN_KEY, token);
  }

  guardarUsuario(usuario: any) {
    localStorage.removeItem(this.USER_KEY);
    localStorage.setItem(this.USER_KEY, JSON.stringify(usuario));
    console.log(usuario)
  }

  obtenerToken(): string | null {
    return localStorage.getItem(this.TOKEN_KEY);
  }

  obtenerUsuario(): any | null {
    const usuarioLocalStorage = localStorage.getItem(this.USER_KEY);
    let usuario: any;

    if (usuarioLocalStorage) {
      usuario = JSON.parse(usuarioLocalStorage);
    }

    return usuario;
  }

  cerrarSesion() {
    localStorage.clear();
  }
}
