import { ArrayType } from '@angular/compiler';
import { Component } from '@angular/core';

@Component({
  selector: 'app-listado-numeros',
  templateUrl: './listado-numeros.component.html',
  styleUrls: ['./listado-numeros.component.css']
})
export class ListadoNumerosComponent {
  numeros: number[]

  constructor() {
    this.numeros = Array(50)
      .fill(0)
      .map(x => Math.ceil(Math.random()*1000))
    }

  alBorrar(n:number) {
    //alert(n.toString())
    // Está mal porque si n se repite borra todas las repeticiones
    this.numeros = this.numeros.filter(x => x != n)
  }
}
