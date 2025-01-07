import { Injectable } from '@angular/core';
import { GameSettings } from '../models/game-settings';
import { Card } from '../models/card';

@Injectable({
  providedIn: 'root'
})
export class GameService {

  public readonly SIZE_ERROR = "BoardSize is 0";
  private cards: Card[] = []
  public get Cards(): Card[] {
    return this.cards;
  }

  private gameSettings: GameSettings = new GameSettings(0);
  public get GameSettings(): GameSettings {
    return this.gameSettings;
  }
  public get BoardSize(): number {
    return this.gameSettings.BoardSize;
  }
  constructor() { }

  public initGame(settings: GameSettings) {

    this.validateGameSettings(settings);
    this.gameSettings = settings;
    this.initCards();

  }

  private validateGameSettings(settings: GameSettings) {

    if (settings.BoardSize === 0) {
      throw new Error(this.SIZE_ERROR);
    }

  }

  private initCards(): void {
    const boardSize = this.gameSettings.BoardSize * 2;
    let cardFace = 1;
    let cardId = 0;
    for (let i = 0; i < boardSize; i++) {
      this.cards.push(new Card(cardId++, cardFace.toString()));
      this.cards.push(new Card(cardId, cardFace.toString()));
      cardFace++;
    }
  }

  public shuffle(): void {
    let unshuffledCards = this.cards;
    let shuffledCards: Card[] = []
    let shuffling = true;

    do {
      // find the index we want to shuffle
      const index = Math.floor(Math.random() * unshuffledCards.length);
      const cardToShuffle = unshuffledCards[index];

      // splice it out
      this.cards.splice(index, 1);

      // add it to shuffled
      shuffledCards.push(cardToShuffle);

      if(unshuffledCards.length === 0) {
        shuffling = false;
      }
      
    } while(shuffling)

    this.cards = shuffledCards;
  }
}
