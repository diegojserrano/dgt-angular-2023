import { Component, OnInit } from '@angular/core';
import { ChartData, ChartOptions } from 'chart.js';
import { ReportesService } from './reportes.service';
import { Valor } from './valor';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  implements OnInit {

  constructor(private reportes: ReportesService) { }

  ngOnInit(): void { }
  
  title = 'graficos';

  datos: ChartData<'bar'> = {
    labels: ['Promedio', 'Venta', 'Compra'],
    datasets: [
      {  data: [0,0,0], label: "Oficial ", borderColor: 'blue', borderWidth: 1},
    ]
  }


  opciones: ChartOptions = {
    plugins: {
      title: {text: "Cotización", display: true, font: {size: 30, family: 'monospace'} ,fullSize: true}
    }
  }

  public actualizar() {
    this.reportes.obtenerDatos().subscribe( {
      next: (v: Valor) => {
          console.log(v)
          console.log(this.datos.datasets[0])
          this.datos = {
            labels: ['Promedio', 'Venta', 'Compra'],
            datasets: [
              {  
                data: [v.oficial.value_avg, v.oficial.value_sell, v.oficial.value_buy], 
                label: "Oficial ", 
                borderColor: 'green', 
                backgroundColor:'lightgreen', 
                borderWidth: 1
              },
              { data: [v.blue.value_avg, v.blue.value_sell, v.blue.value_buy],
                label: "Blue ",
                borderColor: 'blue', 
                borderWidth: 1
              },
            ]
          }

      },
    }

    )  
  }


}
