import { Component } from '@angular/core';
import { padron } from '../personas';

@Component({
  selector: 'app-listado-personas',
  templateUrl: './listado-personas.component.html',
  styleUrls: ['./listado-personas.component.css']
})
export class ListadoPersonasComponent {
  // Crea un atributo del componente llamado "personas"
  // Y lo asigna con una referencia al padron que está
  // importado desde personas.ts
  personas = padron
  seleccionada: any

  ver_detalle(p: any) {
    // template string
    alert(`La persona ${p.apellido}, ${p.nombre}
     (DNI: ${p.documento}) tiene ${p.edad} años`)
  }


  seleccionar(p: any) {
    this.seleccionada = p
  }
   
  eliminar(i: number) {
    if (this.personas[i] == this.seleccionada)
      this.seleccionada = null
    this.personas.splice(i,1)
  }
}
