import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-reloj-de-flores',
  standalone: true,
  templateUrl: './reloj-de-flores.component.html',
  styleUrls: ['./reloj-de-flores.component.css'],
  imports: [CommonModule, FormsModule]
})
export class RelojDeFloresComponent {
  horaSeleccionada: number = new Date().getHours(); // Hora inicial

  // Método para determinar el estado de los pétalos según la hora
  getPetalState(): string {
    if (this.horaSeleccionada >= 6 && this.horaSeleccionada < 12) {
      return 'fully-open'; // Mañana
    } else if (this.horaSeleccionada >= 12 && this.horaSeleccionada < 18) {
      return 'semi-open'; // Tarde
    } else {
      return 'closed'; // Noche
    }
  }

  // Métodos para determinar el estado de cada pétalo
  get isPetalFullyOpen(): boolean {
    return this.getPetalState() === 'fully-open';
  }

  get isPetalSemiOpen(): boolean {
    return this.getPetalState() === 'semi-open';
  }

  get isPetalClosed(): boolean {
    return this.getPetalState() === 'closed';
  }

  // Método para ajustar la hora con el slider
  ajustarHora(event: Event): void {
    this.horaSeleccionada = (event.target as HTMLInputElement).valueAsNumber;
  }
}
