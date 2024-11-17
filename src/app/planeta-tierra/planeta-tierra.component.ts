import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-planeta-tierra',
  standalone: true,
  templateUrl: './planeta-tierra.component.html',
  styleUrls: ['./planeta-tierra.component.css'],
  imports: [
    CommonModule,  // Asegura que Angular tenga acceso a directivas comunes como ngIf, ngFor, etc.
    FormsModule     // Permite el uso de [(ngModel)] para enlace bidireccional en formularios
  ]
})
export class PlanetaTierraComponent {
  horaSeleccionada: number = new Date().getHours(); // Hora inicial

  // Método para determinar la opacidad de la sombra según la hora
  get sombraOpacity(): number {
    if (this.horaSeleccionada >= 6 && this.horaSeleccionada < 18) {
      return 0;  // Durante el día, no hay sombra (todo iluminado)
    } else {
      return 1;  // Durante la noche, la parte oscura del planeta será visible
    }
  }

  // Método para ajustar la hora con el slider
  ajustarHora(event: Event): void {
    this.horaSeleccionada = (event.target as HTMLInputElement).valueAsNumber;
  }
}
