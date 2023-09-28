import { Component } from '@angular/core';
import { APIPersonasService } from '../apipersonas.service';
import { Persona } from '../persona';
import { APIDeporteService } from '../apideporte.service';
import { Deporte } from '../deporte';

@Component({
  selector: 'app-listado-personas',
  templateUrl: './listado-personas.component.html',
  styleUrls: ['./listado-personas.component.css']
})
export class ListadoPersonasComponent {

  constructor (private apiPersonas: APIPersonasService, private apiDeportes: APIDeporteService){
    // this.personas = personasService.obtenerTodas();
    this.refrescar();
    apiDeportes.getDeportes().subscribe({
      next:(response)=>{
        response.forEach((deporte:Deporte)=>{
          this.deportes[deporte.id] = deporte.nombre
        })
      }
    })
  }
  // Crea un atributo del componente llamado "personas"
  // Y lo asigna con una referencia al padron que está
  // importado desde personas.ts
  personas: Persona[] = [];
  deportes:any = [];
  seleccionada: any
  agregando = false
  filtro: string = ""

  getNombreDeporte(idDeporte: string):string {
    return this.deportes[idDeporte];
  }

  refrescar(){
    if(this.filtro!=""){
      this.buscar();
    } else {
      this.apiPersonas.obtenerTodas().subscribe({
        next: (response)=>{
          this.personas = response;
        },
        error: ()=>{
          alert('error');
        }
      });
    }
  }

  agregar() {
    this.seleccionada = {}
    this.agregando = true
  }

  guardar() {
    if (this.agregando) {
      this.apiPersonas.nueva(this.seleccionada).subscribe({
        next: ()=>{
          this.refrescar();
        },
        error: ()=>{

        }
      });
      this.seleccionada = null;
      this.agregando = false;
    } else {
      this.apiPersonas.guardar(this.seleccionada).subscribe({
        next:()=>{
          this.refrescar();
        },
        error: (error)=>{console.log(error)}
      });
    }
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
     (DNI: ${p.id}) tiene ${p.edad} años`)
  }


  eliminar(id: string) {
    this.apiPersonas.borrar(parseInt(id)).subscribe({
      next: (response) => {
        this.refrescar()
      },
      error: (errorObj) => {alert('error')}
    });
    if(this.seleccionada?.id==id){
      this.seleccionada=null;
      this.agregando=false;
    }

  }

  buscar() {
    this.apiPersonas.buscarPorApellido(this.filtro).subscribe({
      next: (response)=>{
        this.personas = response;
      }
    })
  }

}
