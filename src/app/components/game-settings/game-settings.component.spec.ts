import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GameSettingsComponent } from './game-settings.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { GameService } from '../../services/game.service';
import { GameSettings } from '../../models/game-settings';

describe('GameSettingsComponent', () => {
  let component: GameSettingsComponent;
  let fixture: ComponentFixture<GameSettingsComponent>;
  let gameSerivce: GameService

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        GameSettingsComponent,
        NoopAnimationsModule
      ]
    })
    .compileComponents();

    gameSerivce = TestBed.inject(GameService);

    fixture = TestBed.createComponent(GameSettingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call init when button is clicked', () => {
    spyOn(gameSerivce, 'initGame');
    component.startGame();
    expect(gameSerivce.initGame).toHaveBeenCalled();
  });

  it('should shuffle when the button is clicked', () => {
    spyOn(gameSerivce, 'shuffle');
    component.boardSize = 4;
    component.startGame();
    expect(gameSerivce.shuffle).toHaveBeenCalled();
  })

});
