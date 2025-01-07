import { Component, OnInit } from '@angular/core';
import { CardComponent } from "../card/card.component";
import { GameService } from '../../services/game.service';
import { Card } from '../../models/card';
import { GameSettings } from '../../models/game-settings';

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

  // need to have cards here
  constructor(private readonly gameService: GameService) {
  }

  public ngOnInit(): void {
    this.gameService.initGame(new GameSettings(4))
    this.gameService.shuffle();
    let cards = this.gameService.Cards;
    for(let row = 0; row < this.gameService.BoardSize; row++) {
      this.cards.push(cards.splice(0, this.gameService.BoardSize));
    }
  }

}
