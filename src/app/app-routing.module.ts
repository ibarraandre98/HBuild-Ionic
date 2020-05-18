import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'register',
    loadChildren: () => import('./pages/register/register.module').then( m => m.RegisterPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./pages/login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'menu',
    loadChildren: () => import('./pages/menu/menu.module').then( m => m.MenuPageModule)
  },
  {
    path: 'first-login',
    loadChildren: () => import('./pages/first-login/first-login.module').then( m => m.FirstLoginPageModule)
  },
  {
    path: 'cuenta',
    loadChildren: () => import('./pages/cuenta/cuenta.module').then( m => m.CuentaPageModule)
  },
  {
    path: 'cuenta-correo',
    loadChildren: () => import('./pages/cuenta-correo/cuenta-correo.module').then( m => m.CuentaCorreoPageModule)
  },
  {
    path: 'cuenta-contrasena',
    loadChildren: () => import('./pages/cuenta-contrasena/cuenta-contrasena.module').then( m => m.CuentaContrasenaPageModule)
  },
  {
    path: 'chats-uno',
    loadChildren: () => import('./pages/chats-uno/chats-uno.module').then( m => m.ChatsUnoPageModule)
  },
  {
    path: 'crear',
    loadChildren: () => import('./pages/crear/crear.module').then( m => m.CrearPageModule)
  },
  {
    path: 'editar',
    loadChildren: () => import('./pages/editar/editar.module').then( m => m.EditarPageModule),
  },
  {
    path: 'editar/detaller',
    loadChildren: () => import('./pages/detaller/detaller.module').then(m => m.DetallerPageModule)
  },   {
    path: 'profile',
    loadChildren: () => import('./pages/profile/profile.module').then( m => m.ProfilePageModule)
  }
 
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
