// src/app/app.component.ts
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RelojAnalogicoComponent } from './reloj-analogico/reloj-analogico.component';
import { RelojComponent } from './reloj/reloj.component';
import { RelojDeCubosComponent } from './reloj-de-cubos/reloj-de-cubos.component';
import { CarroComponent } from './carro/carro.component';
import { RelojDeFormasGeometricasComponent } from './reloj-de-formas-geometricas/reloj-de-formas-geometricas.component';
import { RelojDeFloresComponent } from './reloj-de-flores/reloj-de-flores.component';
import { AguaComponent } from './agua/agua.component';
import { PlanetaTierraComponent } from './planeta-tierra/planeta-tierra.component';
import { ContadorRayasComponent } from './contador-rayas/contador-rayas.component';
import { HoraDiaComponent } from './hora-dia/hora-dia.component'; // Importar el nuevo componente
import { RouterModule } from '@angular/router'; // Asegúrate de importar RouterModule

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  imports: [
    CommonModule,
    RouterModule, // Importar RouterModule para que funcione el router-outlet
    RelojAnalogicoComponent,
    RelojComponent,
    RelojDeCubosComponent,
    CarroComponent,
    RelojDeFormasGeometricasComponent,
    RelojDeFloresComponent,
    AguaComponent,
    PlanetaTierraComponent, 
    ContadorRayasComponent,
    HoraDiaComponent, // Añadir el componente HoraDia
  ]
})
export class AppComponent {
  clocks = [
    { name: 'Digital', component: RelojComponent },
    { name: 'Analogico', component: RelojAnalogicoComponent },
    { name: 'Cubos', component: RelojDeCubosComponent },
    { name: 'Carro', component: CarroComponent },
    { name: 'Geometricas', component: RelojDeFormasGeometricasComponent },
    { name: 'Flores', component: RelojDeFloresComponent },
    { name: 'Agua', component: AguaComponent },
    { name: 'Planeta Tierra', component: PlanetaTierraComponent },
    { name: 'Rayas', component: ContadorRayasComponent },
    { name: 'Hora y Día', component: HoraDiaComponent }, // Añadir la opción para el nuevo componente
  ];

  currentClockIndex = 0;

  get currentClockComponent() {
    return this.clocks[this.currentClockIndex].component;
  }

  toggleClock() {
    // Cambiar al siguiente reloj en el array
    this.currentClockIndex = (this.currentClockIndex + 1) % this.clocks.length;
  }
}
