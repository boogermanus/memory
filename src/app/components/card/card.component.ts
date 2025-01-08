import { trigger, state, style, transition, animate } from '@angular/animations';
import { Component, Input } from '@angular/core';
import { Card } from '../../models/card';
import { GameService } from '../../services/game.service';

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
  @Input() card!: Card;

  constructor(private readonly gameService: GameService) {
    if(this.card === undefined) {
      this.card = new Card();
    }
  }

  public onClick(): void {
    this.card.flip();
    this.gameService.flipCard(this.card);
  }
}
