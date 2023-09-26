import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListadoPersonasComponent } from './listado-personas/listado-personas.component';
import { DetallePersonaComponent } from './detalle-persona/detalle-persona.component';
import { Formulario1Component } from './formulario1/formulario1.component';
import { FormularioPersonasComponent } from './formulario-personas/formulario-personas.component';

const routes: Routes = [
  { path: "personas", component: ListadoPersonasComponent },
  { path: "personas/nueva", component: FormularioPersonasComponent },
  { path: "personas/:id", component: FormularioPersonasComponent, pathMatch: 'full' },
  { path: "personas/:id/detalle", component: DetallePersonaComponent },
  { path: "formulario", component: Formulario1Component },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
