import { Component, OnInit, ViewChild } from '@angular/core';
import { IonTabs } from '@ionic/angular';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.page.html',
  styleUrls: ['./menu.page.scss'],
})
export class MenuPage implements OnInit {

  @ViewChild(IonTabs,{static:false}) tabs:IonTabs;
  constructor(

  ) { }
    
  ngOnInit() {
    console.log(this.tabs);
    
  }


}
