import { Injectable } from '@angular/core';
import { AlertController, ToastController } from '@ionic/angular';

@Injectable()
export class Toast{
    constructor(
        private toastController:ToastController,
        private alertController:AlertController,
    ){}

    public async toast(title:string,mensaje:string) {
      const toast = await this.toastController.create({
        header:title,
        message: mensaje,
        duration: 2000,
        position:'top',
        animated:true,
        color:'light',
        buttons: [
          {
            text: 'Cerrar',
            role: 'cancel',
            //handler: () => {
              //console.log('Cancel clicked');
            //}
          }
        ]
      });
      toast.present();
    }

    async showAlert(title: string, content: string) {
      const alert = await this.alertController.create({
        header: title,
        message: content,
        buttons: ["Ok"],
      });
  
      await alert.present();
    }
}