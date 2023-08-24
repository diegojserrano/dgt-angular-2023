import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ListadoPersonasComponent } from './listado-personas/listado-personas.component';
import { CantidadPersonasComponent } from './cantidad-personas/cantidad-personas.component';

@NgModule({
  declarations: [
    AppComponent,
    ListadoPersonasComponent,
    CantidadPersonasComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
