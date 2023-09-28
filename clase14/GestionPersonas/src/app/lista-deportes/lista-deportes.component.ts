import { Component } from '@angular/core';
import { Deporte } from '../deporte';
import { APIDeporteService } from '../apideporte.service';

@Component({
  selector: 'app-lista-deportes',
  templateUrl: './lista-deportes.component.html',
  styleUrls: ['./lista-deportes.component.css']
})
export class ListaDeportesComponent {

  private deportes: Deporte[] = [];

  constructor(private apiDeportes: APIDeporteService){
    apiDeportes.getDeportes().subscribe({
      next: (response)=>{
        this.deportes = response;
      }
    })
  }

  public get Deportes(){
    return this.deportes;
  }

}
