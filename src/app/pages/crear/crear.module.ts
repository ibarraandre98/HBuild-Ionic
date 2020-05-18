import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CrearPageRoutingModule } from './crear-routing.module';

import { CrearPage } from './crear.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CrearPageRoutingModule
  ],
  declarations: [CrearPage]
})
export class CrearPageModule {}
