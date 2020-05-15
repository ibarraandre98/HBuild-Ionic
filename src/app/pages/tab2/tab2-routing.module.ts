import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Tab2Page } from './tab2.page';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/menu/tab2/personas',
    pathMatch: 'full'
  },
  {
    path: '',
    component: Tab2Page,
    children: [
      {
        path: 'personas',
        loadChildren: () => import('../personas/personas.module').then(m => m.PersonasPageModule)
      },
      {
        path: 'publicaciones',
        loadChildren: () => import('../publicaciones/publicaciones.module').then(m => m.PublicacionesPageModule)
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Tab2PageRoutingModule { }
