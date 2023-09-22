import { Component, OnInit } from '@angular/core';
import { PersonasService } from '../personas.service';
import { ActivatedRoute } from '@angular/router';
import { Persona } from '../persona';

@Component({
  selector: 'app-detalle-persona',
  templateUrl: './detalle-persona.component.html',
  styleUrls: ['./detalle-persona.component.css']
})
export class DetallePersonaComponent implements OnInit {

  persona: Persona | any

  constructor(
    private personas: PersonasService,
    private ruta: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.ruta.params.subscribe(
      (parametros) => {
        let id = parametros["id"]
        this.personas.buscarPorDocumento(id).subscribe({
          next: (p: Persona) => {this.persona = p},
          error: (e) => alert(JSON.stringify(e))
        })
      }
    )
  }

  



}
