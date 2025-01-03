import { TestBed } from '@angular/core/testing';

import { GameService } from './game.service';
import { GameSettings } from '../models/game-settings';

describe('GameService', () => {
  let service: GameService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GameService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should throw if BoardSize is 0', () => {
    expect(() => service.initGame(new GameSettings(0))).toThrow();
  });

  it('should throw message if BoardSize is 0', () => {
    expect(() => service.initGame(new GameSettings(0))).toThrowError(service.SIZE_ERROR);
  });

  it('should initialize the cards if initGame is called', () => {
    let settings = new GameSettings(4);
    service.initGame(settings)
    expect(service.Cards).not.toEqual([]);
  });

  it('should have 16 cards after initGame is called', () => {
    let settings = new GameSettings(4);
    service.initGame(settings)
    expect(service.Cards.length).toEqual(16);
  });

  it('should shuffle cards if initGame is', () => {
    service.initGame(new GameSettings(4));
    const unshuffledCards = service.Cards;
    service.shuffle();
    const shuffledCards = service.Cards;

    expect(unshuffledCards).not.toEqual(shuffledCards);
  });

  it('should still have 16 cards after shuffle is called', () => {
    service.initGame(new GameSettings(4));
    const unshuffledCards = service.Cards;
    service.shuffle();
    const shuffledCards = service.Cards;
    expect(shuffledCards.length).toEqual(16);
  });
});
