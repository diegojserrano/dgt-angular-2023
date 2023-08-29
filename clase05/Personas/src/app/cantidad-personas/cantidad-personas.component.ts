import { Component } from '@angular/core';
import { padron } from '../personas';
@Component({
  selector: 'app-cantidad-personas',
  templateUrl: './cantidad-personas.component.html',
  styleUrls: ['./cantidad-personas.component.css']
})
export class CantidadPersonasComponent {
  personas = padron
}
