import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DetallerPageRoutingModule } from './detaller-routing.module';

import { DetallerPage } from './detaller.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DetallerPageRoutingModule
  ],
  declarations: [DetallerPage]
})
export class DetallerPageModule {}
