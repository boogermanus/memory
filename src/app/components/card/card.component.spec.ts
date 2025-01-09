import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardComponent } from './card.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { Card } from '../../models/card';
import { GameService } from '../../services/game.service';

describe('CardComponent', () => {
  let component: CardComponent;
  let fixture: ComponentFixture<CardComponent>;
  let service: GameService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        CardComponent,
        NoopAnimationsModule
      ]
    }).compileComponents();

    service = TestBed.inject(GameService);
    fixture = TestBed.createComponent(CardComponent);
    component = fixture.componentInstance;

    // fixed error in testing; watch out for components and null input!
    component.card = new Card();

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should flip card', () => {
    component.onClick();
    expect(component.card.IsFlipped).toBeTrue();
  });

  it('should call game service', () => {
    spyOn(service, 'flipCard');
    component.onClick();
    expect(service.flipCard).toHaveBeenCalledWith(component.card);
  });
});
