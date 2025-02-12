import { ChangeDetectorRef, Component, Input } from '@angular/core';
import { cva } from 'class-variance-authority';
import {
  DefaultBadgeProps,
  size,
  variants,
} from '../../types/component-types/badge';
import { CommonModule } from '@angular/common';
import { mergeTailwind } from '../../utils/mergeTailwind';

const badgeColors = cva('px-2 py-1 text-xs font-medium rounded', {
  variants: {
    variant: {
      primary: ['bg-blue-500', 'text-white', 'border-transparent'],
      secondary: ['bg-blue-100', 'text-blue-500', 'border-transparent'],
      success: ['bg-green-500', 'text-white', 'border-transparent'],
      danger: ['bg-red-500', 'text-white', 'border-transparent'],
      warning: ['bg-yellow-500', 'text-white', 'border-transparent'],
      info: ['bg-blue-500', 'text-white', 'border-transparent'],
    },
  },
  defaultVariants: {
    variant: 'primary',
  },
});

@Component({
  selector: 'eui-badge',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './badge.component.html',
  styleUrl: './badge.component.css',
})
export class BadgeComponent {
  @Input() textColor!: string;
  @Input() size!: size;
  @Input() variant: variants = 'primary';
  @Input() class!: string;

  constructor(public cd: ChangeDetectorRef) {
    this.textColor = DefaultBadgeProps.color;
    this.size = DefaultBadgeProps.size;
    this.variant = DefaultBadgeProps.variant;
  }

  get classes(): string {
    return mergeTailwind(badgeColors({ variant: this.variant }), this.class);
  }
}
