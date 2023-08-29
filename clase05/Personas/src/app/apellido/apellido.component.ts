import { Component } from '@angular/core';

@Component({
  selector: 'app-apellido',
  templateUrl: './apellido.component.html',
  styleUrls: ['./apellido.component.css']
})
export class ApellidoComponent {

  apellido: string = "Ingrese su apellido..."

  limpiar() {
    this.apellido = "";
  }


}
