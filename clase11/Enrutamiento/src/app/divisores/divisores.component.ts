import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-divisores',
  templateUrl: './divisores.component.html',
  styleUrls: ['./divisores.component.css']
})
export class DivisoresComponent implements OnInit {

  n: number 
  divisores: number[]

  constructor(private ruta: ActivatedRoute) {
    this.n = 0
    this.divisores = []
  }

  ngOnInit() {
    this.ruta.params.subscribe(
      (parametros) => {
        this.n = +parametros["n"]
        let i = 1
        this.divisores = Array(this.n-2)
          .fill(0)
          .map(x => ++i)
          .filter(d => this.n % d == 0)
      }
    )
    //this.n = Math.ceil(Math.random()*1000);
  }
}
