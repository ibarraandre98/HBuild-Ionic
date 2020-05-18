import { Component, OnInit } from '@angular/core';
import { Plugins } from 'src/app/models/plugins';
import { PopoverController, ModalController, ActionSheetController } from '@ionic/angular';
import { PublicacionPage } from '../publicacion/publicacion.page';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})
export class InicioPage implements OnInit {

  plugin: Plugins;
  show: boolean = true;

  constructor(private popCtrl: PopoverController,
    private modalCtrl: ModalController,
    public actionSheetController: ActionSheetController,
    public popOverCtrl: PopoverController
  ) {
    this.plugin = new Plugins(null, null, null, null, this.actionSheetController, this.modalCtrl, this.popOverCtrl);
  }

  ngOnInit() {
    setTimeout(() => {
      this.show =false;
    }, 1000);
  }

  openAlert(){
    this.plugin.presentActionSheet(true);
  }

  openComment(){
    this.plugin.openModal(PublicacionPage);
  }
}
