import { PopChatsUnoReportarComponent } from './../../components/pop-chats-uno-reportar/pop-chats-uno-reportar.component';
import { PopChatsUnoComponent } from './../../components/pop-chats-uno/pop-chats-uno.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ChatsUnoPageRoutingModule } from './chats-uno-routing.module';

import { ChatsUnoPage } from './chats-uno.page';
import { ComponentsModule } from 'src/app/components/componets.module';



@NgModule({
  entryComponents:[PopChatsUnoComponent, PopChatsUnoReportarComponent],
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ChatsUnoPageRoutingModule,
    ComponentsModule,
  ],
  declarations: [ChatsUnoPage]
})
export class ChatsUnoPageModule {}
