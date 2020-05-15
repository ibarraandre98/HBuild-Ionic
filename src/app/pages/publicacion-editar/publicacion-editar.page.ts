import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-publicacion-editar',
  templateUrl: './publicacion-editar.page.html',
  styleUrls: ['./publicacion-editar.page.scss'],
})
export class PublicacionEditarPage implements OnInit {

  constructor(private modalCtrl: ModalController) { }

  ngOnInit() {
  }
  salirSinArgumentos() {
    this.modalCtrl.dismiss();
  }
}
