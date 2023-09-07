import { Component } from '@angular/core';
import { ContadorService } from '../contador.service';

@Component({
  selector: 'app-conteo',
  templateUrl: './conteo.component.html',
  styleUrls: ['./conteo.component.css']
})
export class ConteoComponent {

   constructor(public contador: ContadorService) {

   }

}
