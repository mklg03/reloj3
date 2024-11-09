import { Component, OnInit, OnDestroy, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-reloj-analogico',
  standalone: true,
  templateUrl: './reloj-analogico.component.html',
  styleUrls: ['./reloj-analogico.component.css']
})
export class RelojAnalogicoComponent implements OnInit, OnDestroy, AfterViewInit {
  private intervalId: any;

  ngOnInit(): void {}

  ngAfterViewInit(): void {
    this.setClock();
    this.intervalId = setInterval(() => this.setClock(), 1000);
  }

  ngOnDestroy(): void {
    if (this.intervalId) {
      clearInterval(this.intervalId);
    }
  }

  setClock() {
    const now = new Date();
    const seconds = now.getSeconds();
    const minutes = now.getMinutes();
    const hours = now.getHours();

    const secondHand = document.querySelector('.second-hand') as HTMLElement;
    const minuteHand = document.querySelector('.minute-hand') as HTMLElement;
    const hourHand = document.querySelector('.hour-hand') as HTMLElement;

    const secondDegrees = ((seconds / 60) * 360) - 90;
    const minuteDegrees = ((minutes / 60) * 360) - 90;
    const hourDegrees = ((hours / 12) * 360) + ((minutes / 60) * 30) - 90;

    secondHand.style.transform = `rotate(${secondDegrees}deg)`;
    minuteHand.style.transform = `rotate(${minuteDegrees}deg)`;
    hourHand.style.transform = `rotate(${hourDegrees}deg)`;
  }
}
