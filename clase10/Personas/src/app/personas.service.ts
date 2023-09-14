import { Injectable } from '@angular/core';
import { padron } from './personas'; 

@Injectable({
  providedIn: 'root'
})
export class PersonasService {

  padron = padron

  constructor() { }

  public obtenerTodas(): any[] {
    return this.padron
  }

  public buscarPorDocumento(documentoBuscado: number) {
    let encontrada = this.padron.find(p => p.documento == documentoBuscado)
    if (encontrada) return encontrada
    return null
  }

  public agregar(nueva: any) {
    this.padron.unshift(nueva)
  }

  public borrar(documentoBuscado: number) {
    let posicion = this.padron.findIndex(p => p.documento == documentoBuscado)
    if (posicion != -1)
      this.padron.splice(posicion, 1)
  }

  public get cantidad(): number {
    return this.padron.length
  }

  public buscarPorNombre(filtro: string): any[] {
    return this.padron.filter(p => p.apellido.includes(filtro) || p.nombre.includes(filtro))
  }
}
