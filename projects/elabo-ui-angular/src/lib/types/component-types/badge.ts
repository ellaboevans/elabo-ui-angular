import { colors, IPropsMapper } from '../generic';

export type variants =
  | 'primary'
  | 'secondary'
  | 'success'
  | 'danger'
  | 'warning'
  | 'info';

export type color = 'white' | colors;
export type size = 'sm' | 'md' | 'lg';
export type className = string | null;

export interface IBadgeProps {
  label: string;
  color: color;
  variant: variants;
  size: size;
  className?: className;
}

export const DefaultBadgeProps: IBadgeProps = {
  label: 'Badge',
  color: 'white',
  variant: 'primary',
  size: 'lg',
};

export const defaultBadgePropsMapper: IPropsMapper<string> = {
  sm: 'py-2 px-4 text-xs rounded-lg',
  md: 'py-3 px-6 text-xs rounded-lg',
  lg: 'py-3.5 px-7 text-xs rounded-lg',
};
