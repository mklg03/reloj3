import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RelojAnalogicoComponent } from './reloj-analogico/reloj-analogico.component';
import { RelojComponent } from './reloj/reloj.component';
import { RelojDeCubosComponent } from './reloj-de-cubos/reloj-de-cubos.component';
import { CarroComponent } from './carro/carro.component';
import { RelojDeFormasGeometricasComponent } from './reloj-de-formas-geometricas/reloj-de-formas-geometricas.component';
import { RelojDeFloresComponent } from './reloj-de-flores/reloj-de-flores.component';
import { AguaComponent } from './agua/agua.component'; 

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  imports: [
    CommonModule,
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
    { name: 'Agua', component: AguaComponent }, // Agregar el componente Agua
  ];

  currentClockIndex = 0; // Índice del reloj actual

  get currentClockComponent() {
    return this.clocks[this.currentClockIndex].component;
  }

  toggleClock() {
    // Cambiar al siguiente reloj en el array
    this.currentClockIndex = (this.currentClockIndex + 1) % this.clocks.length;
  }
}
