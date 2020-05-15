import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Tab1PageRoutingModule } from './tab1-routing.module';

import { Tab1Page } from './tab1.page';
import { PublicacionPage } from '../publicacion/publicacion.page';
import { PublicacionPageModule } from '../publicacion/publicacion.module';
import { PopTab1Component } from 'src/app/components/pop-tab1/pop-tab1.component';
import { ComponentsModule } from 'src/app/components/components.module';
import { PublicacionEditarPageModule } from '../publicacion-editar/publicacion-editar.module';
import { PublicacionEditarPage } from '../publicacion-editar/publicacion-editar.page';

@NgModule({
  entryComponents: [
    PublicacionPage,
    PopTab1Component,
    PublicacionEditarPage,
  ],
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Tab1PageRoutingModule,
    PublicacionPageModule,
    PublicacionEditarPageModule,
    ComponentsModule,
  ],
  declarations: [Tab1Page]
})
export class Tab1PageModule { }
