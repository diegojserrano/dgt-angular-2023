import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PersonasService } from '../personas.service';
import { ActivatedRoute } from '@angular/router';
import { Persona } from '../persona';

@Component({
  selector: 'app-formulario-personas',
  templateUrl: './formulario-personas.component.html',
  styleUrls: ['./formulario-personas.component.css']
})
export class FormularioPersonasComponent implements OnInit {
  titulo = "Alta de persona"
  nueva = true
  public formPersona: FormGroup
 
  constructor(
    private fb: FormBuilder, 
    private servicio: PersonasService,  
    private ruta: ActivatedRoute) {
    this.formPersona = this.fb.group({
      id: [null],
      nombre: ["", Validators.required],
      apellido: ["", Validators.required],
      edad: [0, Validators.required],
    })
  }


  ngOnInit(): void {
    this.ruta.params.subscribe(
      (parametros) => {
        let id = parametros["id"]
        if (id)
          this.servicio.buscarPorDocumento(id).subscribe({
            next: (p: Persona) => {  
                // Llegó la persona desde la api
                // Hay que actualizar el formulario con los datos de la persona
                this.formPersona.setValue(p)
                this.titulo = "Edición de la persona " + p.nombre + " " + p.apellido
                this.nueva = false
            },
            error: (e) => alert(JSON.stringify(e))
          })
      }
    )
  }

  public guardar() {

    if (this.nueva)
      this.servicio.agregar(this.formPersona.value).subscribe({
        next: (value) => {alert ("Persona guardada correctamente")},
        error: (err) => { alert(JSON.stringify(err))}
      })
    else
      this.servicio.modificar(this.formPersona.value).subscribe({
        next: (value) => {alert ("Persona guardada correctamente")},
        error: (err) => { alert(JSON.stringify(err))}
      })
    //alert(JSON.stringify(this.formPersona.value))
  }
}
