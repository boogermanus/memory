import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  animations: [
    trigger('cardFlip', [
      state('active', style({
        transform: 'rotateY(180deg)'
      })),
      state('inactive', style({
        transform: 'rotateY(0)'
      })),
      transition('active => inactive', [
        animate('400ms')
      ]),
      transition('inactive => active', [
        animate('400ms')
      ])
    ])
  ]
})
export class AppComponent {
  title = 'Memory';
  isFlipped = false;

  public toggleFlip() {
    this.isFlipped = !this.isFlipped;
  }
}
