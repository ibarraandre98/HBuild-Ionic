import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PublicacionEditarPageRoutingModule } from './publicacion-editar-routing.module';

import { PublicacionEditarPage } from './publicacion-editar.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PublicacionEditarPageRoutingModule
  ],
  declarations: [PublicacionEditarPage]
})
export class PublicacionEditarPageModule {}
