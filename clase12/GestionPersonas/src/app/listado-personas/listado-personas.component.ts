import { Component, OnInit } from '@angular/core';
import { Persona } from '../persona';
import { PersonasService } from '../personas.service';

@Component({
  selector: 'app-listado-personas',
  templateUrl: './listado-personas.component.html',
  styleUrls: ['./listado-personas.component.css']
})
export class ListadoPersonasComponent implements OnInit{
  personas: Persona[] = []
  filtro: string = ""
  
  constructor(private servicio: PersonasService) { }

  ngOnInit(): void { this.buscar() }
  
  buscar() {
    this.servicio.obtenerTodas(this.filtro).subscribe({
      next: (resultado) => { this.personas = resultado },
      error: (e) => { alert(JSON.stringify(e))}
    })
  }
}
