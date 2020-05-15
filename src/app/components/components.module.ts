import { NgModule } from '@angular/core';
import { PopTab1Component } from './pop-tab1/pop-tab1.component';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';


@NgModule({
    declarations: [
        PopTab1Component,
    ],
    exports: [
        PopTab1Component,
    ],
    imports: [
        CommonModule,
        IonicModule
    ]
})
export class ComponentsModule { }
