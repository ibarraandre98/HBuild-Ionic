import { Component, OnInit, ViewChild } from '@angular/core';
import { IonTabs } from '@ionic/angular';
@Component({
  selector: 'app-tab2',
  templateUrl: './tab2.page.html',
  styleUrls: ['./tab2.page.scss'],
})
export class Tab2Page implements OnInit {
  @ViewChild(IonTabs, { static: false }) tabs: IonTabs;
  constructor() { }

  ngOnInit() {

  }



}
