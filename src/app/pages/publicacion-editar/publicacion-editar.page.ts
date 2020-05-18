import { Component, OnInit } from '@angular/core';
import { ImagePicker, ImagePickerOptions } from '@ionic-native/image-picker/ngx';
import { File } from '@ionic-native/file/ngx'
import { ModalController } from '@ionic/angular';
import { Plugins } from 'src/app/models/plugins';

@Component({
  selector: 'app-publicacion-editar',
  templateUrl: './publicacion-editar.page.html',
  styleUrls: ['./publicacion-editar.page.scss'],
})
export class PublicacionEditarPage implements OnInit {

  plugins: Plugins;
  image: any = "https://planosdecasasmodernas.com/wp-content/uploads/2017/06/Casa-minimalista-fachada-una-planta.jpg";

  constructor(private modalCtrl: ModalController,
    public imagePicker: ImagePicker,
    public file: File) {
    this.plugins = new Plugins(null,
      null,
      imagePicker,
      file, null, null, null);
  }

  ngOnInit() {
  }
  
  salirSinArgumentos() {
    this.modalCtrl.dismiss();
  }

  editImg(){ 
    this.selectImage();
  }

  selectImage(){
    this.plugins.PickMultipleImages(
      img => {
        this.image = img;
        this.plugins.loading.dismiss();
      }
    );
  }
}
