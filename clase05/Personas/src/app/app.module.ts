import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ListadoPersonasComponent } from './listado-personas/listado-personas.component';
import { CantidadPersonasComponent } from './cantidad-personas/cantidad-personas.component';
import { FormsModule } from '@angular/forms';
import { ApellidoComponent } from './apellido/apellido.component';
import { PuntajeComponent } from './puntaje/puntaje.component';
import { SemaforoComponent } from './semaforo/semaforo.component';

@NgModule({
  declarations: [
    AppComponent,
    ListadoPersonasComponent,
    CantidadPersonasComponent,
    ApellidoComponent,
    PuntajeComponent,
    SemaforoComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
