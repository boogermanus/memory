import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-game-settings',
  standalone: true,
  imports: [
    MatCardModule
  ],
  templateUrl: './game-settings.component.html',
  styleUrl: './game-settings.component.css'
})
export class GameSettingsComponent {

}
