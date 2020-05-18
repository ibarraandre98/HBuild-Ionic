import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-tab3',
  templateUrl: './tab3.page.html',
  styleUrls: ['./tab3.page.scss'],
})
export class Tab3Page implements OnInit {

  show: boolean = true;

  constructor() { }

  ngOnInit() {
    setTimeout(()=> {
      this.show = false;
    }, 1500);
  }
 
}
