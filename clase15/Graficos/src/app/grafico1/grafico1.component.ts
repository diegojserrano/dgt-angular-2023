import { Component } from '@angular/core';

@Component({
  selector: 'app-grafico1',
  templateUrl: './grafico1.component.html',
  styleUrls: ['./grafico1.component.css']
})
export class Grafico1Component {
  datos =  {
    datasets:[
      { 
        data: [4,7,1,8,3],
        label: "Serie1",
        backgroundColor: "#9999EE",
        borderColor: "#1111EE",
        borderWidth: 2,
        rotation: 90,
//        spacing: 0,
        offset: [0,0,100]
      },
      { 
        data: [5,1,6,4,9],
        label: "Serie2",
        backgroundColor: "#99EE99",
        borderColor: "#11EE11",
        borderWidth: 2,
        offset: [0,0,100]

      }
    ],
    labels:["Enero","Febrero","Marzo", "Abril", "Mayo"]


  }

  opciones = {

  }
}
