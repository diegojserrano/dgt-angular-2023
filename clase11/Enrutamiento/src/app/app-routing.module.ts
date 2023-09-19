import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AcercaDeComponent } from './acerca-de/acerca-de.component';
import { PrincipalComponent } from './principal/principal.component';
import { DivisoresComponent } from './divisores/divisores.component';

const routes: Routes = [
  { path: "inicio", component: PrincipalComponent },
  { path: "acerca-de", component: AcercaDeComponent },
  { path: "divisores-de/:n", component: DivisoresComponent },
  { path: "", redirectTo: "inicio", pathMatch: 'full'},
  { path: "**", redirectTo: "acerca-de"}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
