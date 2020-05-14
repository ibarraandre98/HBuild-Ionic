import { Toast } from '../../models/toast';
import { User } from './../../models/user';
import { AuthService } from './../../services/auth.service';
import { Component, OnInit } from '@angular/core';
import {FormBuilder, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import { ToastController, AlertController, MenuController } from '@ionic/angular';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {

  registerForm = this.formBuilder.group({
    uid:[''],
    nombre:['',[Validators.required]],
    apellidos:[''],
    correo:['',[Validators.required,Validators.email]],
    password:['',[Validators.required,Validators.pattern(/^(?=.*?[a-z])(?=.*?[0-9]).{6,}$/)]],
    cpassword:['',[Validators.required]],
    telefono:'',
    locacion:'',
    imagen:'',
    oficio:'',
  });
  user:User;


  constructor(
    private authService:AuthService,
    private formBuilder:FormBuilder,
    private router:Router,
    private alerts:Toast,
    private menuController:MenuController,
  )
  {
    this.menuController.enable(false);
  }

  
  get nombre(){
    return this.registerForm.get('nombre');
  }

  get correo(){
    return this.registerForm.get('correo');
  }

  get password(){
    return this.registerForm.get('password');
  }

  get cpassword(){
    return this.registerForm.get('cpassword');
  }

  public errorMessages = {
    nombre:[
      {type:'required',message:'El nombre es obligatorio'}
    ],
    correo:[
      {type:'required',message:'El correo es obligatorio'},
      {type:'email',message:'Ingrese una dirección de correo válida'}
    ],
    password:[
      {type:'required', message:'La contraseña es obligatoria'},
      {type:'pattern', message:'La contraseña debe de tener por lo menos 6 digitos y un numero'}
    ],
    cpassword:[
      {type:'required', message:'Debe confirmar su contraseña'}
    ],
  }

  ngOnInit() {
  }

  async onSubmitCorreo(){
    let correo = this.registerForm.value.correo;
    let isEmailAvailable = await this.authService.isEmailAvailable(correo);
    if(!isEmailAvailable){
      this.alerts.toast('Error','Este correo electronico ya está en uso');
      return;
    }
    this.onRegister();
  }

  onRegister(){
    let user: User = {
      correo: this.registerForm.value.correo,
      password: this.registerForm.value.password,
      nombre:this.registerForm.value.nombre,
    }
    this.authService.registerAuthUser(user)
    .then(result =>{
      console.log(result);
      user.uid = result.user.uid;

      this.authService.addUser(user)
      .then(result =>{
        console.log(result);
        this.alerts.toast('Exito','Usuario registrado con éxito');
        this.router.navigate(['/home']);
      });
    });
  }

}
