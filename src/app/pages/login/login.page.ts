import { AuthService } from './../../services/auth.service';
import { FormBuilder,Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  loginForm = this.formBuilder.group({
    correo:['',[Validators.required,Validators.email]],
    password:['',[Validators.required]],
  });
  constructor(
    private formBuilder:FormBuilder,
    private authService:AuthService,
    private router:Router
  ) { }

  ngOnInit() {
  }

  get correo(){
    return this.loginForm.get('correo');
  }

  get password(){
    return this.loginForm.get('password');
  }

  public errorMessages = {
    correo:[
      {type:'required',message:'Debe proporcionar su dirección de correo electrónico'},
      {type:'email',message:'Debe ingresar una dirección de correo válida'}
    ],
    password:[
      {type:'required',message:'Debe proporcionar su contraseña'}
    ]
  }

  onLogin(){
    this.router.navigate(['/menu']);
    console.log("login");/*
    let correo = this.loginForm.value.correo;
    let password = this.loginForm.value.password;
    this.authService.signIn(correo,password)
    .then(result =>{
      console.log(result);
      let uid = result.user.uid;
      this.authService.getCurrentUser(uid)
      .subscribe(result =>{
        console.log(result);
      });
    })
    .catch(error =>{
      console.log(error);
    });
  }*/

}
}