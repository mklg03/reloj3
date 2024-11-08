import { Component } from '@angular/core';

@Component({
  selector: 'app-reloj',
  templateUrl: './reloj.component.html',
  styleUrls: ['./reloj.component.css'],
  standalone: true
})
export class RelojComponent {
  time: string;

  constructor() {
    this.time = new Date().toLocaleTimeString();
    this.updateTime();
  }

  updateTime(): void {
    setInterval(() => {
      this.time = new Date().toLocaleTimeString();
    }, 1000);
  }
}
