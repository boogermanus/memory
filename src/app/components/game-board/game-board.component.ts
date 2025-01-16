import { Component, effect, OnInit, Signal } from '@angular/core';
import { CardComponent } from "../card/card.component";
import { GameService } from '../../services/game.service';
import { Card } from '../../models/card';
import { MatDialog } from '@angular/material/dialog';
import { GameSettingsComponent } from '../game-settings/game-settings.component';
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
  public matches!: Signal<number>;
  public attempts!: Signal<number>;

  // need to have cards here
  constructor(
    private readonly gameService: GameService,
    private readonly dialog: MatDialog
  ) {
    this.matches = this.gameService.MatchCount;
    this.attempts = this.gameService.AttemptsCount;
    effect(() => {
      if(!this.gameService.GameRunning() && this.gameService.GameOver()) {
        this.showNewGameDialog();
      }
    })
  }

  public ngOnInit(): void {
    this.showNewGameDialog();
  }

  private showNewGameDialog() {
    if (!this.gameService.GameRunning()) {
      const dialogRef = this.dialog.open(GameSettingsComponent, {disableClose: true});
      dialogRef.afterClosed().subscribe(result => {
        this.startGame(+result.boardSize);
      });
    }
  }

  private startGame(boardSize: number): void {
    this.gameService.initGame(new GameSettings(boardSize));
    this.gameService.shuffle();
    let cards = this.gameService.Cards;
    this.cards = [[]]
    for (let row = 0; row < this.gameService.BoardSize; row++) {
      this.cards.push(cards.splice(0, this.gameService.BoardSize));
    }
  }

}
