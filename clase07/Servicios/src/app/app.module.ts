import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BotonConteoComponent } from './boton-conteo/boton-conteo.component';
import { ConteoComponent } from './conteo/conteo.component';
import { ContadorService } from './contador.service';

@NgModule({
  declarations: [
    AppComponent,
    BotonConteoComponent,
    ConteoComponent,
  ],
  imports: [
    BrowserModule
  ],
  providers: [ContadorService],
  bootstrap: [AppComponent]
})
export class AppModule { }
