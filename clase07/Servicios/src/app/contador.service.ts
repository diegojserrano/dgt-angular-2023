import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ContadorService {

  private _cantidad = 0

  constructor() { }

  public incrementar() { this._cantidad++ }

  public decrementar() { this._cantidad-- }

  public reiniciar() { this._cantidad = 0 }

  public get cantidad() { return this._cantidad }

  //public set cantidad(valor) { this._cantidad = valor}

  
}
