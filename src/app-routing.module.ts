// src/app/app-routing.module.ts
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './app/login/login.component';
import { RegisterComponent } from './app/register/register.component';
import { RelojComponent } from './app/reloj/reloj.component';

const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' }, // Ruta por defecto
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'reloj', component: RelojComponent }, // Agrega la ruta para el reloj
  
  // Otras rutas pueden añadirse aquí
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}