import { Component, OnInit } from '@angular/core';
import {PopoverController} from '@ionic/angular';

@Component({
  selector: 'app-pop-chats-uno',
  templateUrl: './pop-chats-uno.component.html',
  styleUrls: ['./pop-chats-uno.component.scss'],
})
export class PopChatsUnoComponent implements OnInit {

  constructor(
    private popoverController:PopoverController,
  ) { }

  ngOnInit() {}

  clickReportar(){
    console.log("Reportar");
    this.popoverController.dismiss({
      item:"Reportar"
    });
  }

  clickBorrar(){
    console.log("Borrar");
    this.popoverController.dismiss({
      item:"Borrar"
    });
  }

}
