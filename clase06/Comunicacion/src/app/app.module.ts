import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { SubtituloComponent } from './subtitulo/subtitulo.component';
import { ListadoNumerosComponent } from './listado-numeros/listado-numeros.component';
import { DetalleNumeroComponent } from './detalle-numero/detalle-numero.component';

@NgModule({
  declarations: [
    AppComponent,
    SubtituloComponent,
    ListadoNumerosComponent,
    DetalleNumeroComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
