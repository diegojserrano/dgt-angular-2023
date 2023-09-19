import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Enrutamiento';
  numeros:any
  
  constructor() {
    let i = 0
    this.numeros = Array(100).fill(0).map(x => ++i)
  }
}
