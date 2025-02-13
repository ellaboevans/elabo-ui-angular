import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'eui-button',
  standalone: true,
  imports: [],
  templateUrl: './button.component.html',
  styleUrl: './button.component.css',
})
export class ButtonComponent {
  @Input({ required: true })
  public buttonText: string = '';
  @Input({ required: true })
  public variant: 'filled' | 'outlined' = 'filled';

  @Output('onButtonClick') click = new EventEmitter<void>();

  get classes(): string {
    const mode =
      this.variant === 'filled'
        ? 'bg-neutral-900 font-semibold hover:bg-neutral-800 text-white duration-200 w-full hover:text-white px-4 py-3 rounded-md'
        : 'bg-transparent border border-neutral-600 duration-100 w-full hover:bg-neutral-100 text-neutral-600 hover:text-neutral-700 px-2 py-2 rounded-md';

    return `${mode} text-sm`;
  }

  protected handleClick(): void {
    this.click.emit();
  }
}
