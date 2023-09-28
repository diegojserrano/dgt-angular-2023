import { Component, Input } from '@angular/core';
@Component({
  selector: 'app-cantidad-personas',
  templateUrl: './cantidad-personas.component.html',
  styleUrls: ['./cantidad-personas.component.css']
})
export class CantidadPersonasComponent {
  
  @Input() cantidad:any;

}
