import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ButtonComponent } from './button.component';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

describe('ButtonComponent', () => {
  let component: ButtonComponent;
  let fixture: ComponentFixture<ButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ButtonComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have button defined', () => {
    const button: DebugElement = fixture.debugElement.query(
      By.css('[data-test-id="button"]')
    );
    expect(button).toBeTruthy();
  });

  it('should accept a buttonText input prop', () => {
    component.buttonText = 'Button';
    fixture.detectChanges();

    const button: DebugElement = fixture.debugElement.query(
      By.css('[data-test-id="button"]')
    );
    const buttonText = button.nativeElement.innerText;

    expect(buttonText).toEqual('Button');
  });

  it('should accept a variant input prop', () => {
    component.variant = 'outlined';
    fixture.detectChanges();

    const button: DebugElement = fixture.debugElement.query(
      By.css('[data-test-id="button"]')
    );
    const buttonClasses = button.nativeElement.classList;
    const buttonClass = buttonClasses.item(0);

    expect(buttonClass).toContain('rounded-md');
  });

  it('should emit a click event when button is clicked', () => {
    const clickSpy = spyOn(component.click, 'emit');

    const button: DebugElement = fixture.debugElement.query(
      By.css('[data-test-id="button"]')
    );
    button.nativeElement.click();

    expect(clickSpy).toHaveBeenCalled();
  });
});
