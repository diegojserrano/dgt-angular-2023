import { Component, OnInit } from '@angular/core';
import { APIPersonasService } from '../apipersonas.service';
import { ActivatedRoute } from '@angular/router';
import { Persona } from '../persona';
import { APIDeporteService } from '../apideporte.service';
import { Deporte } from '../deporte';

@Component({
  selector: 'app-detalle-persona',
  templateUrl: './detalle-persona.component.html',
  styleUrls: ['./detalle-persona.component.css']
})
export class DetallePersonaComponent implements OnInit {

  persona:Persona | any;
  deporte: Deporte | any;

  constructor(
    private apiPersona: APIPersonasService,
    private route: ActivatedRoute,
    private apiDeportes: APIDeporteService
  ){}

  ngOnInit(): void {
    this.route.params.subscribe(
      (parametros) =>{
        this.apiPersona.buscarPorID(parametros['id']).subscribe({
          next: (response:Persona) => {
            this.persona = response;
            this.apiDeportes.getDeportePorID(this.persona.idDeporte).subscribe({
              next:(deporte) =>{
                this.deporte = deporte;
              }
            })
          }
        });
      }
    )

  }
}
