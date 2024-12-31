import { trigger, state, style, transition, animate } from '@angular/animations';
import { Component, Input } from '@angular/core';
import { Card } from '../../models/card';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [],
  templateUrl: './card.component.html',
  styleUrl: './card.component.css',
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
export class CardComponent {
  @Input() card = new Card();
}
