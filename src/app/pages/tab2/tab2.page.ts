import { Component, OnInit, ViewChild } from '@angular/core';
import { PopoverController, ModalController, IonSegment } from '@ionic/angular';
import { PopTab1Component } from 'src/app/components/pop-tab1/pop-tab1.component';
import { PublicacionEditarPage } from '../publicacion-editar/publicacion-editar.page';

@Component({
  selector: 'app-tab2',
  templateUrl: './tab2.page.html',
  styleUrls: ['./tab2.page.scss'],
})
export class Tab2Page implements OnInit {

  @ViewChild(IonSegment, {static: true}) Button: IonSegment;
  tab: any;

  constructor(private popCtrl: PopoverController,
    private modalCtrl: ModalController
    ) { }

  ngOnInit() {
    this.Button.value="personas";
    this.tab = "personas";
  }

  segmentChanged(event){
    const valorSegment = event.detail.value;
    this.tab = valorSegment;
  }

  async mostrarPop(evento) {
    const popover = await this.popCtrl.create({
      component: PopTab1Component,
      event: evento,
      mode: 'ios',
      backdropDismiss: true,
      translucent: true
    });
    await popover.present();

    const { data } = await popover.onDidDismiss(); //Para recibir los datos cuando se cierre el pop
    // const {data} = await popover.onWillDismiss();  Para que se dispare rápido sin esperar que e cierre el pop

    for (var clave in data) {
      // Controlando que json realmente tenga esa propiedad
      if (data.hasOwnProperty(clave)) {
        // Mostrando en pantalla la clave junto a su valor
        console.log("La clave es " + clave + " y el valor es " + data[clave]);

        if (data[clave] == "Editar") {
          this.ediarPublicacion();
        } else if (data[clave] == "Borrar") {
          //this.borrarAlarma();
        }

      }

    }

    console.log('Padre:', data);


  }

  async ediarPublicacion() {
    const modal = await this.modalCtrl.create({
      component: PublicacionEditarPage,
      componentProps: {
        
      },
    });

    await modal.present();

    const { data } = await modal.onDidDismiss();

    console.log("Retorno del modal", data);
  }

}
