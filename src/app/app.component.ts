import { Component } from '@angular/core';
import { CardComponent } from "./components/card/card.component";
import { GameBoardComponent } from "./components/game-board/game-board.component";

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [
        GameBoardComponent
    ]
})
export class AppComponent {
  title = 'Memory';
}
