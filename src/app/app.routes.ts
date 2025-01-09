import { Routes } from '@angular/router';
import { GameSettingsComponent } from './components/game-settings/game-settings.component';
import { GameBoardComponent } from './components/game-board/game-board.component';

export const routes: Routes = [
    { path: '', component: GameBoardComponent },
    { path: '**', redirectTo: '', pathMatch: 'full' },
];
