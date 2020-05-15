import { Component, OnInit } from '@angular/core';
import { PopoverController } from '@ionic/angular';

@Component({
  selector: 'app-pop-tab1',
  templateUrl: './pop-tab1.component.html',
  styleUrls: ['./pop-tab1.component.scss'],
})
export class PopTab1Component implements OnInit {

  constructor(private popoverCtrl: PopoverController) { }

  ngOnInit() { }
  
  clickEditar() {
    console.log("Se oprimio editar");
    this.popoverCtrl.dismiss({
      item: "Editar",
    });
  }

  clickBorrar() {
    console.log("Se oprimio borrar");
    this.popoverCtrl.dismiss({
      item: "Borrar",
    });
  }
}
