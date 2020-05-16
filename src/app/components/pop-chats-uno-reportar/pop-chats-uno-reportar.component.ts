import { Component, OnInit } from '@angular/core';
import {NavParams} from '@ionic/angular';

@Component({
  selector: 'app-pop-chats-uno-reportar',
  templateUrl: './pop-chats-uno-reportar.component.html',
  styleUrls: ['./pop-chats-uno-reportar.component.scss'],
})
export class PopChatsUnoReportarComponent implements OnInit {

  constructor(
    private navParams:NavParams,
  ) { }

  ngOnInit() {}

}
