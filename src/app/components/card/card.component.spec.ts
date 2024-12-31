import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardComponent } from './card.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { Card } from '../../models/card';

describe('CardComponent', () => {
  let component: CardComponent;
  let fixture: ComponentFixture<CardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CardComponent, BrowserAnimationsModule]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardComponent);
    component = fixture.componentInstance;

    // fixed error in testing; watch out for components and null input!
    component.card = new Card();
    
    fixture.detectChanges();
  });

  it('should create', () => {;
    expect(component).toBeTruthy();
  });
});
