import { LoadingController, ToastController } from '@ionic/angular'
import { ImagePicker, ImagePickerOptions } from '@ionic-native/image-picker/ngx';
import { File } from '@ionic-native/file/ngx'
import { DetallerPage } from '../pages/detaller/detaller.page';

export class Plugins{


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
        public file: File
    ){}

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

    PickMultipleImages(resolve: (img)=> void): any{
        this.imagePicker.getPictures(this.options).then(
          (results) => {
              this.presentLoading('Cargando imagen');
            for(var interval = 0; interval < results.length; interval++){
              let fileName = results[interval].substring(results[interval].lastIndexOf('/')+1);
              let path = results[interval].substring(0, results[interval].lastIndexOf('/')+1);
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