import { Component } from '@angular/core';
import { CardComponent } from "./components/card/card.component";

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  imports: [CardComponent]
})
export class AppComponent {
  title = 'Memory';
}
