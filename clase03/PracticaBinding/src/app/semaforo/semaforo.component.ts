import { Component } from '@angular/core';

@Component({
  selector: 'app-semaforo',
  templateUrl: './semaforo.component.html',
  styleUrls: ['./semaforo.component.css']
})
export class SemaforoComponent {
    imagen = "assets/verde.png"
    imagenes = ["verde", "amarillo", "rojo"]
    color = 0

    cambiar() {
      this.color --
      if (this.color < 0) this.color = 2;
    }

    lampara() {
      return `assets/${this.imagenes[this.color]}.png`
    }
}
