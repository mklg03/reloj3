import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-agua',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './agua.component.html',
  styleUrls: ['./agua.component.css']
})
export class AguaComponent implements OnInit {
  waterLevel: number = 0;  // Nivel de agua inicial
  manualHour: number = new Date().getHours();  // Establece la hora manualmente

  ngOnInit() {
    this.updateWaterLevel();
  }

  // Función para actualizar el nivel de agua según la hora
  updateWaterLevel() {
    const hours = this.manualHour;
    // El tanque se llena basado en la hora, de 0 a 23 horas
    this.waterLevel = (hours / 23) * 100;  // Porcentaje de llenado
  }

  // Función para manejar el cambio en el slider
  onHourChange(event: Event) {
    const newHour = (event.target as HTMLInputElement).valueAsNumber;
    this.manualHour = newHour;
    this.updateWaterLevel();  // Actualiza el nivel de agua cuando cambia la hora
  }
}
