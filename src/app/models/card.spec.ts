import { Card } from './card';

describe('Card', () => {
  let card: Card;

  beforeEach(async () => {
    card = new Card();
  });

  it('should create an instance', () => {
    expect(new Card()).toBeTruthy();
  });

  it('should flip the card to true', () => {
    card.flip();
    expect(card.IsFlipped).toBeTrue();
  });

  it('should set state to active when flipped', () => {
    card.flip();
    expect(card.state).toEqual('active');
  });

  it('should flip the card to false', () => {
    card.flip();
    card.flip();
    expect(card.IsFlipped).toBeFalse();
  });

});
