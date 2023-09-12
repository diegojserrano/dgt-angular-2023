import { HttpClient } from '@angular/common/http';
import { Component, Input, OnChanges, OnInit, SimpleChanges, numberAttribute } from '@angular/core';

@Component({
  selector: 'app-detalle',
  templateUrl: './detalle.component.html',
  styleUrls: ['./detalle.component.css']
})
export class DetalleComponent implements OnInit, OnChanges {

  @Input({transform: numberAttribute, required: true }) documento: number
  persona: any

  constructor(private http: HttpClient) {
    this.documento = 0
  }
  ngOnChanges(changes: SimpleChanges): void {
    this.refrescar()
  }
  ngOnInit(): void {
    this.refrescar()
  }

  refrescar() {
    this.http.get(`https:/64ff99c0f8b9eeca9e2a4ba0.mockapi.io/personas/${this.documento}`).subscribe({
      next:  (datos) => { 
        this.persona = datos
      },
      error: (motivo) => { 
        console.log(motivo.status)
      }
      }
    )
  }

}
