import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Deporte } from './deporte';

@Injectable({
  providedIn: 'root'
})
export class APIDeporteService {

  constructor(private http: HttpClient) { }

  public getDeportes():Observable<Deporte[]>{
    return this.http.get<Deporte[]>('https://64ff99c0f8b9eeca9e2a4ba0.mockapi.io/deportes');
  }

  public getDeportePorID(idDeporte:string):Observable<Deporte>{
    return this.http.get<Deporte>('https://64ff99c0f8b9eeca9e2a4ba0.mockapi.io/deportes/'+idDeporte);
  }
}
