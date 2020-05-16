import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CuentaCorreoPage } from './cuenta-correo.page';

const routes: Routes = [
  {
    path: '',
    component: CuentaCorreoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CuentaCorreoPageRoutingModule {}
