import { Component } from '@angular/core';
import { RelojAnalogicoComponent } from '../reloj-analogico/reloj-analogico.component';
import { RelojComponent } from '../reloj/reloj.component';
import { RelojDeCubosComponent } from '../reloj-de-cubos/reloj-de-cubos.component';
import { CarroComponent } from '../carro/carro.component';
import { RelojDeFormasGeometricasComponent } from '../reloj-de-formas-geometricas/reloj-de-formas-geometricas.component';
import { RelojDeFloresComponent } from '../reloj-de-flores/reloj-de-flores.component';
import { AguaComponent } from '../agua/agua.component';
import { PlanetaTierraComponent } from '../planeta-tierra/planeta-tierra.component';
import { ContadorRayasComponent } from '../contador-rayas/contador-rayas.component';
import { HoraDiaComponent } from '../hora-dia/hora-dia.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-clock-dashboard',
  templateUrl: './clock-dashboard.component.html',
  styleUrls: ['./clock-dashboard.component.css'],
  standalone: true,
  imports: [
    CommonModule
  ]
})
export class ClockDashboardComponent {
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
    { name: 'Hora y Día', component: HoraDiaComponent }
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


