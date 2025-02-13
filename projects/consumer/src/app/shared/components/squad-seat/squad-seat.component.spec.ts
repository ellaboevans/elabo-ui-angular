import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SquadSeatComponent } from './squad-seat.component';
import { DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';

describe('SquadSeatComponent', () => {
  let component: SquadSeatComponent;
  let fixture: ComponentFixture<SquadSeatComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SquadSeatComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(SquadSeatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have each squad member with correct name', () => {
    const squadMembers: DebugElement[] = fixture.debugElement.queryAll(
      By.css('[data-test-id="squad-seat"]')
    );
    squadMembers.forEach((squadMember) => {
      const headingTag = squadMember.query(By.css('h1'));
      const nameContent = headingTag.nativeElement.textContent.trim();
      expect(nameContent).toEqual(
        component.users[squadMembers.indexOf(squadMember)].name
      );
    });
  });

  it('should have each squad member with correct avatar', () => {
    const squadMembers: DebugElement[] = fixture.debugElement.queryAll(
      By.css('[data-test-id="squad-seat"]')
    );
    squadMembers.forEach((squadMember) => {
      const avatarTag = squadMember.query(By.css('img'));
      const avatarSrc = avatarTag.nativeElement.src;
      const avatarAlt = avatarTag.nativeElement.alt;
      expect(avatarSrc).toEqual(
        component.users[squadMembers.indexOf(squadMember)].avatarUrl
      );
      expect(avatarAlt).toEqual(
        component.users[squadMembers.indexOf(squadMember)].name
      );
    });
  });
});
