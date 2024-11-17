import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-hora-dia',
  standalone: true,
  templateUrl: './hora-dia.component.html',
  styleUrls: ['./hora-dia.component.css'],
  imports: [CommonModule, FormsModule],
})
export class HoraDiaComponent {
  horaActual = new Date().getHours(); // Obtener la hora actual
  
  // Función para determinar el color del fondo y los íconos según la hora
  getBackgroundAndIcon() {
    if (this.horaActual >= 6 && this.horaActual < 12) {
      // Mañana (6:00 - 12:00)
      return { background: 'linear-gradient(to bottom, #FFDD00, #FFB300)', icon: '🌞' }; // Sol
    } else if (this.horaActual >= 12 && this.horaActual < 18) {
      // Tarde (12:00 - 18:00)
      return { background: 'linear-gradient(to bottom, #FF6A13, #FF4500)', icon: '🌅' }; // Atardecer
    } else {
      // Noche (18:00 - 6:00)
      return { background: 'linear-gradient(to bottom, #2c3e50, #34495e)', icon: '🌙' }; // Luna
    }
  }
}
