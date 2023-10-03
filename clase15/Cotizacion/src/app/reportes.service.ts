import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Valor } from './valor'

@Injectable({
  providedIn: 'root'
})
export class ReportesService {

  private url: string = 'https://api.bluelytics.com.ar/v2/latest'
  constructor(private http: HttpClient) { }

  public obtenerDatos(): Observable<Valor> {
    return this.http.get<Valor>(this.url)
  }
}
