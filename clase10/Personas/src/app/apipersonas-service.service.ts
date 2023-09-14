import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

const uri = "https://64ff99c0f8b9eeca9e2a4ba0.mockapi.io/personas";

@Injectable({
  providedIn: 'root'
})
export class APIPersonasService {

  constructor(private http: HttpClient) { }

  public obtenerTodas(apellidos: string): Observable<any> {
    return this.http.get(`${uri}/?apellido=${apellidos}`);
  }

  public buscarPorDocumento(documentoBuscado: number) { return null }

  public agregar(nueva: any): Observable<any> {  
    return this.http.post(`${uri}`, nueva);
  }

  public modificar(persona: any): Observable<any> {  
    return this.http.put(`${uri}/${persona.id}`, persona);
  }

  public borrar(documentoBuscado: number): Observable<any> {  
    return this.http.delete(`${uri}/${documentoBuscado}`);
  }

  public get cantidad(): number { return 0 }

  public buscarPorNombre(filtro: string): any[] { return [] }
}
