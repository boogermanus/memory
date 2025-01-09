import { ComponentFixture, TestBed } from '@angular/core/testing';
import { GameBoardComponent } from './game-board.component';
import { MatDialog, MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { of } from 'rxjs';
import { GameSettingsComponent } from '../game-settings/game-settings.component';

describe('GameBoardComponent', () => {
  let component: GameBoardComponent;
  let fixture: ComponentFixture<GameBoardComponent>;
  let mockDialog = {
    open: jasmine.createSpy('open')
      .and
      .returnValue({ afterClosed: () => of('4') } as MatDialogRef<GameSettingsComponent>),
  }

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GameBoardComponent],
      providers: [
        { provide: MatDialog, useValue: mockDialog }
      ]
    })
      .compileComponents();

    fixture = TestBed.createComponent(GameBoardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
