import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-personas',
  templateUrl: './personas.page.html',
  styleUrls: ['./personas.page.scss'],
})
export class PersonasPage implements OnInit {

  show: boolean = true;
  constructor() { }

  ngOnInit() {
    setTimeout( () => {
      this.show = false;
    }, 1500);
  }

}
