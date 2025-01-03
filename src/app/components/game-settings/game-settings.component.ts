import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { GameService } from '../../services/game.service';
import { GameSettings } from '../../models/game-settings';
@Component({
  selector: 'app-game-settings',
  standalone: true,
  imports: [
    MatCardModule,
    MatSelectModule,
    MatFormFieldModule,
    MatButtonModule
  ],
  templateUrl: './game-settings.component.html',
  styleUrl: './game-settings.component.css'
})
export class GameSettingsComponent {
  public boardSize: number = 0;

  constructor(private readonly gameService: GameService) {

  }

  public startGame(): void {
    this.gameService.initGame(new GameSettings(this.boardSize));
    this.gameService.shuffle();
  }
}
