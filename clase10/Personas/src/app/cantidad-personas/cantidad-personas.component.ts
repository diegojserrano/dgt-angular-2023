import { Component } from '@angular/core';
import { PersonasService } from '../personas.service';


@Component({
  selector: 'app-cantidad-personas',
  templateUrl: './cantidad-personas.component.html',
  styleUrls: ['./cantidad-personas.component.css']
})
export class CantidadPersonasComponent {
  
  constructor(public servicioPersonas: PersonasService) {}


}
