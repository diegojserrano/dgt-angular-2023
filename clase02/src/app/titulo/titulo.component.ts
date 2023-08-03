import { Component } from '@angular/core';

@Component({
  selector: 'app-titulo',
  templateUrl: './titulo.component.html',
  styleUrls: ['./titulo.component.css'],
})
export class TituloComponent {
  numero: number;
  texto: string;
  codigos: Array<number>;

  constructor() {
    this.numero = Math.ceil(Math.random() * 100);
    this.texto = 'Es la hora ' + new Date().getMilliseconds();
    this.codigos = Array(5);
    for (let i = 0; i < 5; i++)
      this.codigos[i] = Math.ceil(Math.random() * 100);
  }
}
