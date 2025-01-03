import { Component } from '@angular/core';
import { MatGridListModule } from '@angular/material/grid-list'
import { CardComponent } from "../card/card.component";

@Component({
  selector: 'app-game-board',
  standalone: true,
  imports: [
    CardComponent
],
  templateUrl: './game-board.component.html',
  styleUrl: './game-board.component.css'
})
export class GameBoardComponent {

}
