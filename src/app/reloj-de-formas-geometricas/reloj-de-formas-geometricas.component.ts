import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'; // Importa FormsModule

@Component({
  selector: 'app-reloj-de-formas-geometricas',
  standalone: true,
  imports: [CommonModule, FormsModule], // Añade FormsModule aquí
  templateUrl: './reloj-de-formas-geometricas.component.html',
  styleUrls: ['./reloj-de-formas-geometricas.component.css']
})
export class RelojDeFormasGeometricasComponent implements OnInit {
  shapes: string[] = [];
  manualHour: number = new Date().getHours();

  ngOnInit() {
    this.updateClock();
    setInterval(() => this.updateClock(), 1000);
  }

  updateClock() {
    const hours = this.manualHour;

    // Generar un array de figuras basado en la hora manual
    this.shapes = Array.from({ length: hours }, (_, i) => {
      if (i % 3 === 0) return 'circle';
      if (i % 3 === 1) return 'square';
      return 'triangle';
    });
  }

  onHourChange(newHour: number) {
    this.manualHour = newHour;
    this.updateClock();
  }

  getTransform(shape: string): string {
    const now = new Date();
    const seconds = now.getSeconds();
    switch (shape) {
      case 'circle':
        return `rotate(${seconds * 6}deg)`;
      case 'square':
        return `rotate(${seconds * 6}deg)`;
      case 'triangle':
        return `rotate(${seconds * 10}deg)`;
      default:
        return '';
    }
  }
}
