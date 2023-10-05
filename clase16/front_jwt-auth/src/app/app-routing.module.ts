import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IngresoComponent } from './autenticacion/ingreso/ingreso.component';
import { RegistroComponent } from './autenticacion/registro/registro.component';
import { AutenticadoGuard } from './guards/autenticado.guard';
import { AutorizadoGuard } from './guards/autorizado.guard';
import { PerfilUsuarioComponent } from './privado/perfil-usuario/perfil-usuario.component';
import { PrincipalPrivadoComponent } from './privado/principal-privado/principal-privado.component';
import { PrincipalPublicoComponent } from './publico/principal-publico/principal-publico.component';

const routes: Routes = [
  {
    path: 'privado/perfil',
    component: PerfilUsuarioComponent,
    canActivate: [AutorizadoGuard],
    data: {
      permiso: 'ADMIN'
    }
  },
  {
    path: 'privado/principal',
    component: PrincipalPrivadoComponent,
 //   canActivate: [AutenticadoGuard,]
  },
  { path: 'publico/principal', component: PrincipalPublicoComponent },
  { path: 'ingreso', component: IngresoComponent },
  { path: 'registro', component: RegistroComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
