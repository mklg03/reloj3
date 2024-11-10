import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common'; 
import { FormsModule } from '@angular/forms'; 

@Component({
  selector: 'app-carro',
  standalone: true,
  templateUrl: './carro.component.html',
  styleUrls: ['./carro.component.css'],
  imports: [CommonModule, FormsModule] 
})
export class CarroComponent implements OnInit {
  carPosition: number = 0;
  horaSeleccionada: number = new Date().getHours(); 

  ngOnInit(): void {
    this.updateCarPosition();
    setInterval(() => {
      this.updateCarPosition();
    }, 3600000); // Actualiza cada hora
  }

  updateCarPosition(): void {
    this.carPosition = (this.horaSeleccionada / 24) * 100; // Calcula la posición basada en la hora seleccionada
  }

  ajustarHora(event: Event): void {
    this.horaSeleccionada = (event.target as HTMLInputElement).valueAsNumber;
    this.updateCarPosition();
  }
}
