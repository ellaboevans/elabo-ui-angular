import {
  AfterViewInit,
  Component,
  ElementRef,
  inject,
  signal,
  ViewChild,
} from '@angular/core';
import { GitAvatarComponent } from '../git-avatar/git-avatar.component';
import { ButtonComponent } from '../button/button.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [GitAvatarComponent, ButtonComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
})
export class HeaderComponent implements AfterViewInit {
  protected content = signal<string>('');
  public isCopied = false;
  private readonly router = inject(Router);

  @ViewChild('code') npmCode!: ElementRef;

  public goToDocsPage(): void {
    this.router.navigateByUrl('/docs');
  }

  public copyCode(): void {
    navigator.clipboard.writeText(this.content());
    this.isCopied = true;
    setTimeout(() => {
      this.isCopied = false;
    }, 2000);
  }

  ngAfterViewInit(): void {
    this.content.set(this.npmCode.nativeElement.innerText);
  }
}
