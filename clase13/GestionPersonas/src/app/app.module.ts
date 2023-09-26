import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { ListadoPersonasComponent } from './listado-personas/listado-personas.component';
import { DetallePersonaComponent } from './detalle-persona/detalle-persona.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Formulario1Component } from './formulario1/formulario1.component';
import { FormularioPersonasComponent } from './formulario-personas/formulario-personas.component';

@NgModule({
  declarations: [
    AppComponent,
    ListadoPersonasComponent,
    DetallePersonaComponent,
    Formulario1Component,
    FormularioPersonasComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
