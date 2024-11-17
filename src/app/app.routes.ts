// src/app/app.routes.ts
import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';

 
export const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' }, // Redirige a login al cargar la aplicación
  { path: 'login', component: LoginComponent }, // Ruta para el componente de inicio de sesión
   { path: 'register', component: RegisterComponent }, 
  { path: '**', redirectTo: '/login' } // Redirige a login si la ruta no es válida
];