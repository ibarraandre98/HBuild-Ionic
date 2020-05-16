import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ChatsUnoPage } from './chats-uno.page';

const routes: Routes = [
  {
    path: '',
    component: ChatsUnoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ChatsUnoPageRoutingModule {}
