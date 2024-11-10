import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RelojAnalogicoComponent } from './reloj-analogico/reloj-analogico.component';
import { RelojComponent } from './reloj/reloj.component';
import { RelojDeCubosComponent } from './reloj-de-cubos/reloj-de-cubos.component';
import { CarroComponent } from './carro/carro.component'; // Importar el componente Carro

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  imports: [CommonModule, RelojAnalogicoComponent, RelojComponent, RelojDeCubosComponent, CarroComponent] // Asegúrate de importar el nuevo componente
})
export class AppComponent {
  showDigitalClock: boolean = true;
  showAnalogClock: boolean = false;
  showCubeClock: boolean = false;
  showCarClock: boolean = false; // Nueva propiedad para el reloj del carro

  toggleClock() {
    if (this.showDigitalClock) {
      this.showDigitalClock = false;
      this.showAnalogClock = true;
    } else if (this.showAnalogClock) {
      this.showAnalogClock = false;
      this.showCubeClock = true;
    } else if (this.showCubeClock) {
      this.showCubeClock = false;
      this.showCarClock = true; // Activar el reloj del carro
    } else if (this.showCarClock) {
      this.showCarClock = false;
      this.showDigitalClock = true;
    }
  }
}
