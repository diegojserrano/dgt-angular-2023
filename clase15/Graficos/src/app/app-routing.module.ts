import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Grafico1Component } from './grafico1/grafico1.component';

const routes: Routes = [
  { path: "g1", component: Grafico1Component },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
