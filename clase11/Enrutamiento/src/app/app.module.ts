import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AcercaDeComponent } from './acerca-de/acerca-de.component';
import { PrincipalComponent } from './principal/principal.component';
import { DivisoresComponent } from './divisores/divisores.component';

@NgModule({
  declarations: [
    AppComponent,
    AcercaDeComponent,
    PrincipalComponent,
    DivisoresComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
