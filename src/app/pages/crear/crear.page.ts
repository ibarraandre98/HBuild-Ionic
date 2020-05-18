import { Component, OnInit } from '@angular/core';
import { ImagePicker, ImagePickerOptions } from '@ionic-native/image-picker/ngx';
import { File } from '@ionic-native/file/ngx'


@Component({
  selector: 'app-crear',
  templateUrl: './crear.page.html',
  styleUrls: ['./crear.page.scss'],
})
export class CrearPage implements OnInit {

  images: any;

  options: ImagePickerOptions = {
    maximumImagesCount: 1
  };

  constructor(
    public imagePicker: ImagePicker,
    public file: File
  ) { }

  ngOnInit() {
  } 

  PickMultipleImages(){
    this.imagePicker.getPictures(this.options).then(
      (results) => {
        for(var interval = 0; interval < results.length; interval++){
          let fileName = results[interval].substring(results[interval].lastIndexOf('/')+1);
          let path = results[interval].substring(0, results[interval].lastIndexOf('/')+1);
          this.file.readAsDataURL(path, fileName).then(
            (base64string) => {
              this.images = base64string;
            }
          );
        }
      }
    )
  }

}
