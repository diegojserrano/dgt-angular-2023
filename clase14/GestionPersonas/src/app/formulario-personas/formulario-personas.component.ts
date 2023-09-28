import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { APIPersonasService } from '../apipersonas.service';
import { ActivatedRoute } from '@angular/router';
import { Persona } from '../persona';
import { APIDeporteService } from '../apideporte.service';
import { Deporte } from '../deporte';

@Component({
  selector: 'app-formulario-personas',
  templateUrl: './formulario-personas.component.html',
  styleUrls: ['./formulario-personas.component.css']
})
export class FormularioPersonasComponent implements OnInit {

  titulo = "Alta de personas";

  formularioPersonas: FormGroup;
  private modifica = false;
  private deportes:Deporte[] = [];

  constructor(
    private fb: FormBuilder,
    private apiPersonas: APIPersonasService,
    private route: ActivatedRoute,
    private apiDeportes: APIDeporteService
  ){
    this.formularioPersonas = fb.group({
        id: [null],
        nombre: ["",[Validators.required]],
        apellido: ["",[Validators.required]],
        edad: [0,[Validators.required]],
        idDeporte: [0,[Validators.required]]
      })
  }

  guardar() {
    if(this.modifica){
      this.apiPersonas.guardar(this.formularioPersonas.value).subscribe({
        next:(response)=>{
          alert('Modificado correctamente')
        },
        error:(response)=>{
          alert(JSON.stringify(response))
        }
      });
    } else {
      this.apiPersonas.nueva(this.formularioPersonas.value).subscribe({
        next:(response)=>{
          alert('Creado correctamente')
        },
        error:(response)=>{
          alert(JSON.stringify(response))
        }
      });
    }
  }

  ngOnInit(): void {
    this.route.params.subscribe(
      (parametros) =>{
        if(parametros['id']){
          this.modifica = true;
          this.titulo= "Modificando persona";
          this.apiPersonas.buscarPorID(parametros['id']).subscribe({
            next: (response:Persona) => {
              this.formularioPersonas.setValue(response);
            }
          });
        }
      }
    )
    this.apiDeportes.getDeportes().subscribe({
      next: (deportes)=>{
        this.deportes=deportes;
      }
    })
  }

  public get Deportes(){
    return this.deportes;
  }
}
