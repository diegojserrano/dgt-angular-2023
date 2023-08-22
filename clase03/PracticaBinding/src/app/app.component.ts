import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
 
  fecha = new Date()
  numero: number

  constructor() {
    this.numero = Math.random()*100
  }

  verHora() {
    alert(new Date().toTimeString())
  }

}
