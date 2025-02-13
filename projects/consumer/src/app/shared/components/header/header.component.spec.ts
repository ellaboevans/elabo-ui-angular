import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderComponent } from './header.component';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

describe('HeaderComponent', () => {
  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HeaderComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(HeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have a heading title', () => {
    const headingTitle: DebugElement = fixture.debugElement.query(
      By.css('[data-test-id="heading-title"]')
    );
    expect(headingTitle).toBeTruthy();
  });

  it('should have a heading title reading "Welcome to EUI Angular"', () => {
    const headingTitle: DebugElement = fixture.debugElement.query(
      By.css('[data-test-id="heading-title"]')
    );
    const innerText = headingTitle.nativeElement.innerText;
    expect(innerText).toEqual('Welcome to EUI Angular');
  });

  it('should have a heading description', () => {
    const headingDesc: DebugElement = fixture.debugElement.query(
      By.css('[data-test-id="heading-desc"]')
    );
    expect(headingDesc).toBeTruthy();
  });
});
