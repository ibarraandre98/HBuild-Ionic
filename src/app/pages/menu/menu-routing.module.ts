import { NgModule } from '@angular/core';
import { Routes, RouterModule, OutletContext } from '@angular/router';

import { MenuPage } from './menu.page';

const routes: Routes = [
  {
    path: '',
    component: MenuPage,
    children:[
     
      {
        path:'tab1',
        children:[
          {
            path:'',
            loadChildren: () => import('../tab1/tab1.module').then(m => m.Tab1PageModule)
          }
        ]
      },
      {
        path:'tab2',
        children:[
          {
            path:'',
            loadChildren: () => import('../tab2/tab2.module').then(m => m.Tab2PageModule),
            
         
          },

        ]
      },
      {
        path:'tab3',
        children:[
          {
            path:'',
            loadChildren: () => import('../tab3/tab3.module').then(m => m.Tab3PageModule)
          }
        ]
      },
      {
        path:'tab4',
        children:[
          {
            path:'',
            loadChildren: () => import('../tab4/tab4.module').then(m => m.Tab4PageModule)
          }
        ]
      }
    ]
  }
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MenuPageRoutingModule {}
