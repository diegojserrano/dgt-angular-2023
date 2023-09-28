import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Persona } from './persona';


@Injectable({
  providedIn: 'root'
})
export class APIPersonasService {

  uri = 'https://64ff99c0f8b9eeca9e2a4ba0.mockapi.io/personas';

  constructor(private http: HttpClient) { }

  public obtenerTodas(): Observable<Persona[]>{
    return this.http.get<Persona[]>(this.uri);
  }

  public buscarPorApellido(apellido: string): Observable<Persona[]>{
    return this.http.get<Persona[]>(`${this.uri}/?apellido=${apellido}`);  
  }

  public buscarPorID(id:string){
    return this.http.get<Persona>(`${this.uri}/${id}`);  
  }

  public nueva(nueva: any): Observable<any>{
      return this.http.post(this.uri,nueva);
  }

  public guardar(persona: any): Observable<any>{
    return this.http.put(`${this.uri}/${persona.id}`,persona);
  }

  public borrar(documento:number): Observable<any>{
    return this.http.delete(`${this.uri}/${documento}`);
  } 
}
