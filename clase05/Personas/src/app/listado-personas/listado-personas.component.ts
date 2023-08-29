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
  agregando = false
  filtro: string = ""

  agregar() {
    this.seleccionada = {}
    this.agregando = true
  }

  guardar() {
    console.log(JSON.stringify(this.seleccionada))
    if (this.agregando) {
      this.personas.unshift(this.seleccionada)
      this.agregando = false
    }
  }
  
  cancelar() {
    this.seleccionada = null
    this.agregando = false
  }

  seleccionar(p: any) {
    this.seleccionada = p
    this.agregando = false
  }
   

  ver_detalle(p: any) {
    // template string
    alert(`La persona ${p.apellido}, ${p.nombre}
     (DNI: ${p.documento}) tiene ${p.edad} años`)
  }


  eliminar(i: number) {
    if (this.personas[i] == this.seleccionada)
      this.seleccionada = null
    this.personas.splice(i,1)
  }

  buscar() {
    if (this.filtro)
      this.personas = padron.filter(p => p.apellido.includes(this.filtro))
    else
      this.personas = padron
  }

}
