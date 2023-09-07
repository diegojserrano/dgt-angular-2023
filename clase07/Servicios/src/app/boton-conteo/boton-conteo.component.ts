import { Component } from '@angular/core';
import { ContadorService } from '../contador.service';

@Component({
  selector: 'app-boton-conteo',
  templateUrl: './boton-conteo.component.html',
  styleUrls: ['./boton-conteo.component.css']
})
export class BotonConteoComponent {
  contar() {
    // incrementar el contador
    this.contador.incrementar()
  }
  constructor(public contador: ContadorService) {}

}
