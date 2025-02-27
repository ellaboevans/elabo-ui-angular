import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-docs',
  standalone: true,
  imports: [],
  templateUrl: './docs.component.html',
  styleUrl: './docs.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DocsComponent {}
