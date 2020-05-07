import { Injectable } from '@angular/core';
import {HttpClient } from '@angular/common/http';
import { Menu } from '../interfaces/interfaces';

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
}
