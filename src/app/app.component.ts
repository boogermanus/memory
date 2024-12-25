import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  animations: []
})
export class AppComponent {
  title = 'Memory';
  isFlipped = false;

  public toggleFlip() {
    this.isFlipped = !this.isFlipped;
  }
}
