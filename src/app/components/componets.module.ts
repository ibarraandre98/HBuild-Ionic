import { PopChatsUnoReportarComponent } from './pop-chats-uno-reportar/pop-chats-uno-reportar.component';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { PopChatsUnoComponent } from './pop-chats-uno/pop-chats-uno.component';
import { NgModule } from '@angular/core';


@NgModule({
    declarations:[PopChatsUnoComponent,PopChatsUnoReportarComponent],
    exports:[PopChatsUnoComponent, PopChatsUnoReportarComponent],
    imports:[CommonModule,IonicModule],
})

export class ComponentsModule {

}