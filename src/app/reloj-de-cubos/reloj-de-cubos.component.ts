import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-reloj-de-cubos',
  standalone: true,
  templateUrl: './reloj-de-cubos.component.html',
  styleUrls: ['./reloj-de-cubos.component.css'],
  imports: [CommonModule, FormsModule]
})
export class RelojDeCubosComponent implements OnInit, OnDestroy {
  cubos: { color: string }[][] = [];
  horaSeleccionada: number = new Date().getHours();
  private intervalId: any;

  ngOnInit(): void {
    this.generarCubos();
    this.intervalId = setInterval(() => this.generarCubos(), 10000); // Genera nuevas filas cada 10 segundos
  }

  ngOnDestroy(): void {
    if (this.intervalId) {
      clearInterval(this.intervalId);
    }
  }

  generarCubos() {
    const horaActual = this.horaSeleccionada;
    let color = 'blue';
    if (horaActual >= 6 && horaActual < 12) {
      color = 'yellow';
    } else if (horaActual >= 12 && horaActual < 18) {
      color = 'orange';
    }
    const newCubos = Array(10).fill({ color });
    this.cubos.push(newCubos);
    if (this.cubos.length > 30) {
      this.cubos.shift(); // Elimina la fila más antigua para mantener el contenedor manejable
    }
  }

  ajustarHora(event: Event) {
    this.horaSeleccionada = (event.target as HTMLInputElement).valueAsNumber;
    this.cubos = []; // Reinicia los cubos
    this.generarCubos();
  }
}
