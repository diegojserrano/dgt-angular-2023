import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { APIPersonasService } from './apipersonas.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ListadoPersonasComponent } from './listado-personas/listado-personas.component';
import { CantidadPersonasComponent } from './cantidad-personas/cantidad-personas.component';
import { MenuComponent } from './menu/menu.component';
import { InicioComponent } from './inicio/inicio.component';
import { DetallePersonaComponent } from './detalle-persona/detalle-persona.component';
import { Formulario1Component } from './formulario1/formulario1.component';
import { FormularioPersonasComponent } from './formulario-personas/formulario-personas.component';
import { ListaDeportesComponent } from './lista-deportes/lista-deportes.component';

@NgModule({
  declarations: [
    AppComponent,
    CantidadPersonasComponent,
    ListadoPersonasComponent,
    MenuComponent,
    InicioComponent,
    DetallePersonaComponent,
    Formulario1Component,
    FormularioPersonasComponent,
    ListaDeportesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [APIPersonasService],
  bootstrap: [AppComponent]
})
export class AppModule { }
