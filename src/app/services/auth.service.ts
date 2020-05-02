import { User } from './../models/user';
import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import {Observable}from 'rxjs';
import {AngularFirestore} from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private fireauth:AngularFireAuth,
    private firestore: AngularFirestore,
  ){}

  registerAuthUser(user:any):Promise<any>{
    return this.fireauth.createUserWithEmailAndPassword(user.correo,user.password);
  }

  async isEmailAvailable(email:string){
    let methods = await this.fireauth.fetchSignInMethodsForEmail(email);
    console.log(methods);
    return methods.length == 0;
  }

  addUser(user:User):Promise<void>{
    return this.firestore.doc<User>(`users/${user.uid}`).set(user);
  }

  signIn(email:string,password:string){
    return this.fireauth.signInWithEmailAndPassword(email,password);
  }

  getCurrentUser(uid:string){
    return this.firestore.doc<User>(`users/${uid}`).valueChanges();
  }
}
