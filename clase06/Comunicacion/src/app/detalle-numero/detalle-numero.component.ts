import { Component, EventEmitter, Input, Output, numberAttribute } from '@angular/core';

@Component({
  selector: 'app-detalle-numero',
  templateUrl: './detalle-numero.component.html',
  styleUrls: ['./detalle-numero.component.css']
})
export class DetalleNumeroComponent {
  @Input({ transform: numberAttribute, required:true }) n: number = 0
  @Output() onBorrar: EventEmitter<number> 
                        = new EventEmitter()
    
  borrar() { this.onBorrar.emit(this.n) }

  paridad(n: number) { return (n % 2 == 0)? "Par" : "Impar" }
 
  ultimoDigito(n: number) { return n % 10 }

  longitud(n:number) { return  n.toString().length }

}
