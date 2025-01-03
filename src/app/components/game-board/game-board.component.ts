import { Component, OnInit } from '@angular/core';
import { MatGridListModule } from '@angular/material/grid-list'
import { CardComponent } from "../card/card.component";
import { GameService } from '../../services/game.service';

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

  constructor(private readonly gameService: GameService) {

  }

  public ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

}
