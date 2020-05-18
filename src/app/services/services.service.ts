import { Injectable } from '@angular/core';
import {HttpClient } from '@angular/common/http';
import { Menu } from '../interfaces/interfaces';
import { Edit} from '../models/edit';
import { Places } from '../models/places';
import { City } from '../models/city';

@Injectable({
  providedIn: 'root'
})
export class ServicesService {

  constructor(
    private http: HttpClient
  ) { }

  getMenu(){
    return this.http.get<Menu[]>('../../assets/data/menu.json');
  }

  getEdit(){
    return this.http.get<Edit[]>('../../assets/data/edit.json');
  }

  getPlaces(){
    return this.http.get<Places[]>('../../assets/data/places.json');
  }

  getCity(){
    return this.http.get<City[]>('../../assets/data/city.json');
  }
}
