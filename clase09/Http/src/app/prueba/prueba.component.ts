import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http'


@Component({
  selector: 'app-prueba',
  templateUrl: './prueba.component.html',
  styleUrls: ['./prueba.component.css']
})
export class PruebaComponent {

  personas: any
  esperando = false
  documentoSeleccionado = 0

  constructor(private http: HttpClient)
  {
      this.iniciar()
  } 

  public iniciar() {
    this.esperando = true

    this.http.get("https://64ff99c0f8b9eeca9e2a4ba0.mockapi.io/personas").subscribe({
      next:  (datos) => { 
        this.personas = datos
        this.esperando = false
      },
      error: (motivo) => { 
        console.log(motivo.status)
        this.esperando = false
      }
      }
    )

  }

  public seleccionar(documento: number) {
    this.documentoSeleccionado = documento

  }

  public borrar(documento:number) {

    this.http.delete(`https://64ff99c0f8b9eeca9e2a4ba0.mockapi.io/personas/${documento}`).subscribe({
      next:  (datos) => { 
        this.iniciar()
      },
      error: (motivo) => { 
        console.log(motivo.status)
      }
      }
    )

  }
}
