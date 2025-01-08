import { Component, OnInit, Signal } from '@angular/core';
import { CardComponent } from "../card/card.component";
import { GameService } from '../../services/game.service';
import { Card } from '../../models/card';

@Component({
  selector: 'app-game-board',
  standalone: true,
  imports: [
    CardComponent
  ],
  templateUrl: './game-board.component.html',
  styleUrl: './game-board.component.css'
})
export class GameBoardComponent implements OnInit {
  public cards: Card[][] = [[]];
  public rows: number[] = [];
  public matches!: Signal<number>;
  public attempts!: Signal<number>;

  // need to have cards here
  constructor(private readonly gameService: GameService) {
    this.matches = this.gameService.MatchCount;
    this.attempts = this.gameService.AttemptsCount;
  }

  public ngOnInit(): void {
    let cards = this.gameService.Cards;
    for(let row = 0; row < this.gameService.BoardSize; row++) {
      this.cards.push(cards.splice(0, this.gameService.BoardSize));
    }
  }

}
