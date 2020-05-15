import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PublicacionEditarPage } from './publicacion-editar.page';

const routes: Routes = [
  {
    path: '',
    component: PublicacionEditarPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PublicacionEditarPageRoutingModule {}
