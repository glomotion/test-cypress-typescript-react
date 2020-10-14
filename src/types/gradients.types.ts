export interface ThemeGradients {
  simple: (direction?: string) => string;
  mirror?: (direction?: string) => string;
}

export type FillGradientTarget =
  'bottom'
  | 'left'
  | 'right'
  | 'top'
  | 'bottom'
  | 'top left'
  | 'top right'
  | 'bottom left'
  | 'bottom right';
