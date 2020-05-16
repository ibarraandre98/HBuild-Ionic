import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DetallerPage } from './detaller.page';

const routes: Routes = [
  { path: '', component: DetallerPage },
  { path: ':nombre', component: DetallerPage }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DetallerPageRoutingModule {}
