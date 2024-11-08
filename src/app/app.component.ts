import { Component } from '@angular/core';
import { RelojComponent } from './reloj/reloj.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  standalone: true,
  imports: [RelojComponent]
})
export class AppComponent { }
