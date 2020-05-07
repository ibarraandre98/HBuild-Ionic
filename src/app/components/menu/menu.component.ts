import { AppComponent } from './../../app.component';
import { Component, OnInit, ViewChild } from '@angular/core';
import {Router}from '@angular/router';
import { ServicesService } from 'src/app/services/services.service';
import { Observable } from 'rxjs';
import { Menu } from 'src/app/interfaces/interfaces';
import { IonMenu } from '@ionic/angular';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
})
export class MenuComponent implements OnInit {

  @ViewChild(IonMenu, {static: false}) ionMenu: IonMenu;

  menu: Observable<Menu[]>;

  constructor(private router:Router,
     private dataService: ServicesService) { }

  ngOnInit() {
    console.log(this.ionMenu);
    this.menu = this.dataService.getMenu();
  }

  Logout(){
      this.router.navigate(['/login']);
  }
}
