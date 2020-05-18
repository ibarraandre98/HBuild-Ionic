import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NavController, LoadingController, ToastController } from '@ionic/angular'
import { Edit } from '../../models/edit';
import { ServicesService } from 'src/app/services/services.service';
import { Plugins } from '../../models/plugins'
import { Places } from 'src/app/models/places';
import { ImagePicker, ImagePickerOptions } from '@ionic-native/image-picker/ngx';
import { File } from '@ionic-native/file/ngx'
import { City } from 'src/app/models/city';
import { Town } from 'src/app/models/town';

@Component({
  selector: 'app-detaller',
  templateUrl: './detaller.page.html',
  styleUrls: ['./detaller.page.scss'],
})
export class DetallerPage implements OnInit {

  default: any = '../../assets/examplecover.jpg';
  places: Array<Places> = new Array<Places>();
  edit: Array<Edit> = new Array<Edit>();
  city: Array<City> = new Array<City>();
  town: Array<Town> = new Array<Town>();
  ban: boolean = false;
  nombre: string;
  datos: Edit;
  plugins: Plugins;
  image: any;

  constructor(
    private navCtrl: NavController,
    private activatedRoute: ActivatedRoute,
    private toastCtrl: ToastController,
    private _services: ServicesService,
    private loadingCtrl: LoadingController,
    public imagePicker: ImagePicker,
    public file: File
  ) {
    this.plugins = new Plugins(loadingCtrl,
      toastCtrl,
      imagePicker,
      file, null, null, null);
  }

  ngOnInit() {
    this.getEditMenu();
  }

  getEditMenu(){
    this._services.getEdit().subscribe(
      data => {
        this.edit = data;
        this.edit.forEach(element => {
          if(element.id == this.activatedRoute.snapshot.params.nombre)
            this.getOpts(element);
        });
      }
    );
  }

  getOpts(element){
    this.datos = {
      id: element.id,
      name: element.name
    }

    if(this.datos.id == 1 || this.datos.id == 2)
      this.selectImage();

    if(this.datos.id == 5)
      this.getPlaces();

    if(this.datos.id == 7)
      this.getCity();
  }

  selectImage(){
    this.plugins.PickMultipleImages(
      img => {
        this.image = img;
        this.plugins.loading.dismiss();
      }
    );
  }


  getPlaces(){
    this._services.getPlaces().subscribe(
      data => {
        this.places = data;
      }
    );
  }

  getCity(){
    this._services.getCity().subscribe(
      data => {
        this.city = data;
      }
    );
  }

  getTowns(event){
    for(let citi of this.city){
      if(citi.estado == event.detail.value){
        this.ban = true;
        this.town = citi.ciudades;
        console.log(this.town);
      }
    }
    
  }

  guardar(id){
    console.log(id, this.datos.name);
    this.plugins.presentLoading('Guardando datos');

    setTimeout( () => {
      this.plugins.loading.dismiss();
      this.plugins.presentToast('Datos Actualizados', 'success');
      this.navCtrl.back();
    }, 3000);
  }
}
