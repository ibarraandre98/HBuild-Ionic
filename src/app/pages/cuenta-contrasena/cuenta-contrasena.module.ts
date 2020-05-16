import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CuentaContrasenaPageRoutingModule } from './cuenta-contrasena-routing.module';

import { CuentaContrasenaPage } from './cuenta-contrasena.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CuentaContrasenaPageRoutingModule
  ],
  declarations: [CuentaContrasenaPage]
})
export class CuentaContrasenaPageModule {}
