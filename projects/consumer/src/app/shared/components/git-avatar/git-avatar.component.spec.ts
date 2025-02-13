import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GitAvatarComponent } from './git-avatar.component';
import { By } from '@angular/platform-browser';

describe('GitAvatarComponent', () => {
  let component: GitAvatarComponent;
  let fixture: ComponentFixture<GitAvatarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GitAvatarComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(GitAvatarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have anchor tag defined', () => {
    const anchorTag = fixture.debugElement.query(
      By.css('[data-test-id="git-avatar"]')
    );
    expect(anchorTag).toBeTruthy();
  });

  it('should have anchor tag with correct href', () => {
    const anchorTag = fixture.debugElement.query(
      By.css('[data-test-id="git-avatar"]')
    );
    const href = anchorTag.nativeElement.href;
    const destinationUrl = 'https://github.com/ellaboevans';
    expect(href).toEqual(destinationUrl);
  });

  it('should have anchor tag with correct target', () => {
    const anchorTag = fixture.debugElement.query(
      By.css('[data-test-id="git-avatar"]')
    );
    const target = anchorTag.nativeElement.target;
    expect(target).toEqual('_blank');
  });

  it('should have anchor tag with correct rel', () => {
    const anchorTag = fixture.debugElement.query(
      By.css('[data-test-id="git-avatar"]')
    );
    const rel = anchorTag.nativeElement.rel;
    expect(rel).toEqual('noopener');
  });

  it('should have anchor tag with correct title attribute', () => {
    const anchorTag = fixture.debugElement.query(
      By.css('[data-test-id="git-avatar"]')
    );
    const title = anchorTag.nativeElement.title;
    expect(title).toEqual('Evans on GitHub');
  });

  it('should have img tag defined', () => {
    const imgTag = fixture.debugElement.query(
      By.css('[data-test-id="git-avatar-img"]')
    );
    expect(imgTag).toBeTruthy();
  });

  it('should have img tag with correct src', () => {
    const imgTag = fixture.debugElement.query(
      By.css('[data-test-id="git-avatar-img"]')
    );
    const src = imgTag.nativeElement.src;
    const avatarUrl = 'https://avatars.githubusercontent.com/u/74984305?v=4';
    expect(src).toEqual(avatarUrl);
  });

  it('should have img tag with correct alt', () => {
    const imgTag = fixture.debugElement.query(
      By.css('[data-test-id="git-avatar-img"]')
    );
    const alt = imgTag.nativeElement.alt;
    expect(alt).toEqual('Evans');
  });
});
