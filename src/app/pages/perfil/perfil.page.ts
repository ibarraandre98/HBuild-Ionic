import { Component, OnInit, Input } from '@angular/core';
import { User } from 'src/app/models/user';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.page.html',
  styleUrls: ['./perfil.page.scss'],
})
export class PerfilPage implements OnInit {

  usuario: User;
  cover: string;
  show: boolean = false;

  @Input() have: string;

  slideOpts: {};

  constructor() { }

  ngOnInit() {

    if(this.have == "true"){
      console.log("Es true");
    }else{
      console.log("Es false");
    }

    setTimeout( () => {
      this.usuario = {
        correo: '',
        password: '',
        imagen: '../../assets/exampleprofile.jpg'
      };
      this.cover = '../../assets/examplecover.jpg'
      this.show = true;
      console.log(this.usuario);
    }, 1500);
    
    this.slideOpts = {
      slidesPerView: 'auto',
      zoom: false,
      grabCursor: true
    }
  }

}
