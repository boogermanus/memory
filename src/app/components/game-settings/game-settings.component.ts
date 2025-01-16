import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { GameSettings } from '../../models/game-settings';

@Component({
  selector: 'app-game-settings',
  standalone: true,
  imports: [
    MatCardModule,
    MatSelectModule,
    MatFormFieldModule,
    MatButtonModule,
    MatDialogModule
  ],
  templateUrl: './game-settings.component.html',
  styleUrl: './game-settings.component.css'
})
export class GameSettingsComponent {
  public boardSize: number = 0;
  public boardSizes: number[] = [2, 4]

  constructor(private readonly dialogRef: MatDialogRef<GameSettingsComponent>) {

  }

  public startGame(): void {
    this.dialogRef.close({ boardSize: this.boardSize });
  }

}
