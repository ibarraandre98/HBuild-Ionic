import { Component, OnInit } from '@angular/core';
import { Edit } from '../../models/edit';
import { ServicesService } from 'src/app/services/services.service';

@Component({
  selector: 'app-editar',
  templateUrl: './editar.page.html',
  styleUrls: ['./editar.page.scss'],
})
export class EditarPage implements OnInit {

  edit : Array<Edit> = new Array<Edit>();
  constructor(
    private _servicios: ServicesService
  ) { }

  ngOnInit() {
    this._servicios.getEdit().subscribe(
      data => {
        this.edit = data;
        console.log(this.edit);
      }
    )
    
  }

}
