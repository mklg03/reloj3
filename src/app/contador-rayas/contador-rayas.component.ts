import { Component } from '@angular/core';
import { CommonModule} from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-contador-rayas',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './contador-rayas.component.html',
  styleUrls: ['./contador-rayas.component.css']
})
export class ContadorRayasComponent {
  horaActual = new Date().getHours();
  minutoActual = new Date().getMinutes();

  // Método para generar un array de números para las rayas de horas y minutos
  generarArray(longitud: number): number[] {
    return Array.from({ length: longitud }, (_, i) => i);
  }
}