import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Persona } from './persona';

const uri = "https://64ff99c0f8b9eeca9e2a4ba0.mockapi.io/personas";

@Injectable({
  providedIn: 'root'
})
export class PersonasService {

  
  constructor(private http: HttpClient) { }

  public obtenerTodas(apellidos: string): Observable<Persona[]> {
    return this.http.get<Persona[]>(`${uri}/?apellido=${apellidos}`);
  }

  public buscarPorDocumento(documentoBuscado: number): 
  Observable<Persona> { 
    return this.http
    .get<Persona>(`${uri}/${documentoBuscado}`);
  }

  public agregar(nueva: any): Observable<any> {  
    return this.http.post(`${uri}`, nueva);
  }

  public modificar(persona: any): Observable<any> {  
    return this.http.put(`${uri}/${persona.id}`, persona);
  }

  public borrar(documentoBuscado: number): Observable<any> {  
    return this.http.delete(`${uri}/${documentoBuscado}`);
  }

  public get cantidad(): number {
    return 0 
  }

  public buscarPorNombre(filtro: string): any[] {
    return [] 
  }

}
