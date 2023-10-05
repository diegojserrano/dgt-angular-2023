import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IngresoComponent } from './autenticacion/ingreso/ingreso.component';
import { RegistroComponent } from './autenticacion/registro/registro.component';
import { PrincipalPublicoComponent } from './publico/principal-publico/principal-publico.component';
import { PrincipalPrivadoComponent } from './privado/principal-privado/principal-privado.component';
import { PerfilUsuarioComponent } from './privado/perfil-usuario/perfil-usuario.component';

@NgModule({
  declarations: [
    AppComponent,
    IngresoComponent,
    RegistroComponent,
    PrincipalPublicoComponent,
    PrincipalPrivadoComponent,
    PerfilUsuarioComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
