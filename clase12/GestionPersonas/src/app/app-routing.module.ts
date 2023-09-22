import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListadoPersonasComponent } from './listado-personas/listado-personas.component';
import { DetallePersonaComponent } from './detalle-persona/detalle-persona.component';

const routes: Routes = [
  { path: "personas", component: ListadoPersonasComponent },
  { path: "personas/:id", component: DetallePersonaComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
