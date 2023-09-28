import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicioComponent } from './inicio/inicio.component';
import { ListadoPersonasComponent } from './listado-personas/listado-personas.component';
import { DetallePersonaComponent } from './detalle-persona/detalle-persona.component';
import { Formulario1Component } from './formulario1/formulario1.component';
import { FormularioPersonasComponent } from './formulario-personas/formulario-personas.component';
import { ListaDeportesComponent } from './lista-deportes/lista-deportes.component';

const routes: Routes = [
  {path:"", component:InicioComponent},
  {path:"personas", component:ListadoPersonasComponent},
  {path:"personas/nueva", component:FormularioPersonasComponent},
  {path:"personas/modificar/:id", component:FormularioPersonasComponent},
  {path:"personas/:id/detalle", component:DetallePersonaComponent, pathMatch:'full'},
  {path:"formulario", component:Formulario1Component},
  {path:"deportes", component:ListaDeportesComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
