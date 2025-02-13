import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeComponent } from './home.component';
import { By } from '@angular/platform-browser';

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HomeComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have 3 cards in the grid', () => {
    const cards = fixture.debugElement.queryAll(
      By.css('[data-test-id="card"]')
    );
    expect(cards.length).toBe(3);
  });

  it('should have each card render an svg', () => {
    const cards = fixture.debugElement.queryAll(
      By.css('[data-test-id="card"]')
    );
    cards.forEach((card) => {
      const svg = card.query(By.css('svg'));
      expect(svg).toBeTruthy();
    });
  });

  it('should have each card render a heading', () => {
    const cards = fixture.debugElement.queryAll(
      By.css('[data-test-id="card"]')
    );
    cards.forEach((card) => {
      const heading = card.query(By.css('h1'));
      expect(heading).toBeTruthy();
    });
  });

  it('should have each card render a paragraph', () => {
    const cards = fixture.debugElement.queryAll(
      By.css('[data-test-id="card"]')
    );
    cards.forEach((card) => {
      const paragraph = card.query(By.css('p'));
      expect(paragraph).toBeTruthy();
    });
  });
});
