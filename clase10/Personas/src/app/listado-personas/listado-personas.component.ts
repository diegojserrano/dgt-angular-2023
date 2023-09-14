import { Component } from '@angular/core';
//import { PersonasService } from '../personas.service';
import { APIPersonasService } from '../apipersonas-service.service';

@Component({
  selector: 'app-listado-personas',
  templateUrl: './listado-personas.component.html',
  styleUrls: ['./listado-personas.component.css']
})
export class ListadoPersonasComponent {

  // Crea un atributo del componente llamado "personas"
  // Y lo asigna con una referencia al padron que está
  // importado desde personas.ts
  personas: any
  seleccionada: any
  agregando = false
  filtro: string = ""

  constructor(private servicioPersonas: APIPersonasService) {
    this.refrescar()
  }

  refrescar() {
    this.servicioPersonas.obtenerTodas(this.filtro).subscribe({
      next: (personas) => this.personas = personas,
      error: (error) => alert(JSON.stringify(error))
    })
  }

  agregar() {
    this.seleccionada = {}
    this.agregando = true
  }

  guardar() {
    console.log(JSON.stringify(this.seleccionada))
    if (this.agregando) {
      this.servicioPersonas.agregar(this.seleccionada).subscribe({
        next: () => this.refrescar(),
        error: (error) => alert(JSON.stringify(error))
      })
      this.agregando = false
      this.seleccionada = null
    }
    else { // Cuando está modificando
      this.servicioPersonas.modificar(this.seleccionada).subscribe({
        next: () => this.refrescar(),
        error: (error) => alert(JSON.stringify(error))
      })
    }

    //if (this.filtro) 
    //  this.buscar()
    
  }
  
  cancelar() {
    this.seleccionada = null
    this.agregando = false
  }

  seleccionar(p: any) {
    this.seleccionada = {...p}
    this.agregando = false
  }
   

  ver_detalle(p: any) {
    // template string
    alert(`La persona ${p.apellido}, ${p.nombre}
     (DNI: ${p.documento}) tiene ${p.edad} años`)
  }


  eliminar(documento: number) {
    this.servicioPersonas.borrar(documento).subscribe({
      next: () => this.refrescar(),
      error: (error) => alert(JSON.stringify(error))
    })

    // Oculto el formulario si se borra 
    // la persona que está seleccionada
    if (this.seleccionada && documento == this.seleccionada.id) 
      this.seleccionada = null  
    //if (this.filtro) 
    //  this.buscar()
    
  }

  buscar() {
    this.refrescar()
  }

  limpiar() {
    this.filtro = ""
    this.refrescar()
  }

}

