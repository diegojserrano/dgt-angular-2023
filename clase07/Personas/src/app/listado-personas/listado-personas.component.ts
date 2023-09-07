import { Component } from '@angular/core';
import { PersonasService } from '../personas.service';

@Component({
  selector: 'app-listado-personas',
  templateUrl: './listado-personas.component.html',
  styleUrls: ['./listado-personas.component.css']
})
export class ListadoPersonasComponent {

  // Crea un atributo del componente llamado "personas"
  // Y lo asigna con una referencia al padron que está
  // importado desde personas.ts
  personas: any[]
  seleccionada: any
  agregando = false
  filtro: string = ""

  constructor(private servicioPersonas: PersonasService) {
    this.personas = servicioPersonas.obtenerTodas()
  }

  agregar() {
    this.seleccionada = {}
    this.agregando = true
  }

  guardar() {
    console.log(JSON.stringify(this.seleccionada))
    if (this.agregando) {
      this.servicioPersonas.agregar(this.seleccionada)
      this.agregando = false
    }
    if (this.filtro) 
      this.buscar()
    
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


  eliminar(documento: number) {
    this.servicioPersonas.borrar(documento)
    if (this.seleccionada && documento == this.seleccionada.documento) 
      this.seleccionada = null  
    if (this.filtro) 
      this.buscar()
    
  }

  buscar() {
    if (this.filtro)
      this.personas = this.servicioPersonas.buscarPorNombre(this.filtro)
    else
      this.personas = this.servicioPersonas.obtenerTodas()
  }

}
