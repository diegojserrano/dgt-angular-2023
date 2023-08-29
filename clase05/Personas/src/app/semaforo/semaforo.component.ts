import { Component } from '@angular/core';

@Component({
  selector: 'app-semaforo',
  templateUrl: './semaforo.component.html',
  styleUrls: ['./semaforo.component.css']
})
export class SemaforoComponent {
  //luces = ["assets/verde.png","assets/amarillo.png","assets/rojo.png"]
  luces = ["verde","amarillo","rojo"]
  estado = 0;

  //asignarEstado(nombre: string) {
  //  this.estado = "assets/" + nombre + ".png"
  //}

  public color() {
    return `assets/${this.luces[this.estado]}.png`;
  }

  public cambiar() {
    //switch(this.estado) {
    //  case "verde.png": this.asignarEstado("amarillo"); break;
    //  case "amarillo.png": this.asignarEstado("rojo"); break;
    //  default: this.asignarEstado("verde");
      

    //}
    this.estado++
    this.estado %= 3
  }
}
