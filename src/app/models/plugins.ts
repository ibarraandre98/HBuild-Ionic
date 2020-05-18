import { LoadingController, ToastController, ActionSheetController, ModalController, PopoverController } from '@ionic/angular'
import { ImagePicker, ImagePickerOptions } from '@ionic-native/image-picker/ngx';
import { File } from '@ionic-native/file/ngx'
import { DetallerPage } from '../pages/detaller/detaller.page';
import { PublicacionEditarPage } from '../pages/publicacion-editar/publicacion-editar.page';
import { Tab1Page } from '../pages/tab1/tab1.page';
import { PopChatsUnoReportarComponent } from '../components/pop-chats-uno-reportar/pop-chats-uno-reportar.component';

export class Plugins {


  loading: any;
  toast: any
  images: any;
  options: ImagePickerOptions = {
    maximumImagesCount: 1
  };
  detaller: DetallerPage;

  constructor(
    public loadingCtrl: LoadingController,
    public toastCtrl: ToastController,
    public imagePicker: ImagePicker,
    public file: File,
    public actionSheetController: ActionSheetController,
    public modalCtrl: ModalController,
    public popCtrl: PopoverController
  ) { }

  async presentActionSheet(options) {

    var op;

    if (options) {
      op = [
        {
          text: 'Editar',
          icon: 'create',
          handler: () => {
            this.openModal(PublicacionEditarPage);
          }
        }, {
          text: 'Eliminar',
          role: 'destructive',
          icon: 'trash',
          handler: () => {
            console.log('Delete clicked');
          }
        }
      ]
    }else{
      op = [
        {
          text: 'Reportar',
          role: 'destructive',
          icon: 'alert-circle',
          handler: () => {
            this.mostrarPopInfo();
          }
        }, {
          text: 'Eliminar',
          role: 'destructive',
          icon: 'trash',
          handler: () => {
            console.log('Delete clicked');
          }
        }
      ]
    }
    const actionSheet = await this.actionSheetController.create({
      buttons: op
    });
    await actionSheet.present();
  }

  async presentLoading(message) {
    this.loading = await this.loadingCtrl.create({
      message
    });
    this.loading.present();
  }

  async presentToast(message, color) {
    this.toast = await this.toastCtrl.create({
      message,
      color,
      duration: 2000
    });
    this.toast.present();
  }

  async openModal(component) {
    const modal = await this.modalCtrl.create({
      component,
      componentProps: {},
    });

    await modal.present();

    const { data } = await modal.onDidDismiss();

    console.log("Retorno del modal", data);
  }

  async mostrarPopInfo() {
    const popover = await this.popCtrl.create({
      component: PopChatsUnoReportarComponent,
      componentProps:{
      },
      mode: "md",
      backdropDismiss: true
    });
    return await popover.present();
  }

  PickMultipleImages(resolve: (img) => void): any {
    this.imagePicker.getPictures(this.options).then(
      (results) => {
        this.presentLoading('Cargando imagen');
        for (var interval = 0; interval < results.length; interval++) {
          let fileName = results[interval].substring(results[interval].lastIndexOf('/') + 1);
          let path = results[interval].substring(0, results[interval].lastIndexOf('/') + 1);
          this.file.readAsDataURL(path, fileName).then(
            (base64string) => {
              resolve(base64string);
            }
          );
        }
      }
    )
  }

}