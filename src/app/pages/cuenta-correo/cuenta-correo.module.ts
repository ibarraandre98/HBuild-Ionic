import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CuentaCorreoPageRoutingModule } from './cuenta-correo-routing.module';

import { CuentaCorreoPage } from './cuenta-correo.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CuentaCorreoPageRoutingModule
  ],
  declarations: [CuentaCorreoPage]
})
export class CuentaCorreoPageModule {}
