export type colors =
  | 'primary'
  | 'secondary'
  | 'accent'
  | 'transparent'
  | 'white'
  | 'black'
  | 'blue-gray'
  | 'gray'
  | 'brown'
  | 'deep-orange'
  | 'orange'
  | 'amber'
  | 'yellow'
  | 'lime'
  | 'light-green'
  | 'green'
  | 'teal'
  | 'cyan'
  | 'light-blue'
  | 'blue'
  | 'indigo'
  | 'deep-purple'
  | 'purple'
  | 'pink'
  | 'red';

export interface IPropsMapper<T> {
  [key: string]: T;
}
