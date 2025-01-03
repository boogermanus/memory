import { Component } from '@angular/core';
import { CardComponent } from "./components/card/card.component";
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  imports: [
    CardComponent,
    RouterOutlet
  ]
})
export class AppComponent {
  title = 'Memory';
}
