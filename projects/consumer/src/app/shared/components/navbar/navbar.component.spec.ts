import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavbarComponent } from './navbar.component';
import { ActivatedRoute } from '@angular/router';
import { By } from '@angular/platform-browser';

describe('NavbarComponent', () => {
  let component: NavbarComponent;
  let fixture: ComponentFixture<NavbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NavbarComponent],
      providers: [
        {
          provide: ActivatedRoute,
          useValue: {
            ActivatedRoute: {
              snapshot: {
                data: {},
              },
            },
          },
        },
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(NavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have a navbar logo', () => {
    const navbarLogo = fixture.debugElement.query(
      By.css('[data-test-id="navbar-logo"]')
    );
    expect(navbarLogo).toBeTruthy();
  });

  it('should have navbar logo read "EUI Angular"', () => {
    const navbarLogo = fixture.debugElement.query(
      By.css('[data-test-id="navbar-logo"]')
    );
    const innerText = navbarLogo.nativeElement.innerText;
    expect(innerText).toEqual('EUI Angular');
  });

  it('should have a navbar item', () => {
    const navbarItem = fixture.debugElement.query(
      By.css('[data-test-id="navbar-item"]')
    );
    expect(navbarItem).toBeTruthy();
  });
});
