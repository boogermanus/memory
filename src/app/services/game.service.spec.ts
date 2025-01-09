import { fakeAsync, TestBed, tick } from '@angular/core/testing';

import { GameService } from './game.service';
import { GameSettings } from '../models/game-settings';
import { Card } from '../models/card';

describe('GameService', () => {
  let service: GameService;

  beforeEach(() => {
    TestBed.configureTestingModule({
    });
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
    service.shuffle();
    const shuffledCards = service.Cards;
    expect(shuffledCards.length).toEqual(Math.pow(service.GameSettings.BoardSize, 2));
  });

  it('should set GameRunning to true', () => {
    service.initGame(new GameSettings(4));

    expect(service.GameRunning()).toBeTrue();
  });

  it('should not throw on flipCard', () => {
    let card = new Card(0, '1');
    expect(() => service.flipCard(card)).not.toThrow();
  });

  it('should not match cards if card faces to not match', () => {
    let card1 = new Card(0, '1');
    let card2 = new Card(1, '2');

    service.flipCard(card1);
    service.flipCard(card2);

    expect(service.MatchCount()).toBe(0);
  });

  it('should match card if card faces match', () => {
    let card1 = new Card(0, '1');
    let card2 = new Card(1, '1');

    service.flipCard(card1);
    service.flipCard(card2);

    expect(service.MatchCount()).toBe(1)
  });

  it('should set the cards as cannot be flipped if they match', () => {
    let card1 = new Card(0, '1');
    let card2 = new Card(1, '1');

    service.flipCard(card1);
    service.flipCard(card2);

    expect(card1.CanBeFlipped && card2.CanBeFlipped).toBeFalse();
  });

  it('should flip cards back if they do not match', fakeAsync(() => {

    let card1 = new Card(0, '1');
    let card2 = new Card(1, '2');
    card1.flip();
    service.flipCard(card1);
    card2.flip();
    service.flipCard(card2);

    setTimeout(() => {}, 3000);
    tick(3000);
        
    expect(card1.IsFlipped && card2.IsFlipped).toBeFalse();
  }));

  it('should signal if game is not running', () => {
    service.initGame(new GameSettings(2));
    for(let card of service.Cards) {
      service.flipCard(card);
    }

    expect(service.GameRunning()).toBeFalse();
  });

  it('should signal if game is over', () => {
    service.initGame(new GameSettings(2));
    for(let card of service.Cards) {
      service.flipCard(card);
    }

    expect(service.GameOver()).toBeTrue();
  });
});
