import { MenuController } from '@ionic/angular';
import { AuthService } from './../services/auth.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(
    private authService:AuthService,
    private menuController:MenuController,
  )
  {
    this.menuController.enable(false);
  }
}
