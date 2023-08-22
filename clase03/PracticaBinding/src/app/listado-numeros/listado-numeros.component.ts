import { Component } from '@angular/core';

/*
- Generar un conjunto de numeros al azar y 
guardarlos en un vector
- Mostrar una tabla con una fila por cada número
- Mostrar con colores diferentes los pares de los impares
- Mostar más grandes los mayores a 500
- A la derecha de cada número mostrar un boton
- Al presionar cualquier boton mostrar un alert con el número
*/
@Component({
  selector: 'app-listado-numeros',
  templateUrl: './listado-numeros.component.html',
  styleUrls: ['./listado-numeros.component.css']
})

export class ListadoNumerosComponent {

  numeros: number[]

  constructor() {
    // Genera un vector de 100 posiciones y las 
    // llena con números al azar de tres dígitos
    this.numeros = new Array(100).fill(0)
    .map(x => Math.floor(Math.random()*1000))

  }  

  esPar(n: number) {
    return n % 2 == 0
  }

  detalle(n: number) {
    alert(n)
  }


}
