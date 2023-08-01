import { Component } from '@angular/core';

@Component({selector: 'app-root',templateUrl: './app.component.html',styleUrls: ['./app.component.css']})

export class AppComponent {
  titulo  = "Hola, esta es la clase 1, hoy es martes 1 de agosto"
  c = 0


  constructor() {
    setTimeout(() => { this.c ++ }, 3000)
  }
}
