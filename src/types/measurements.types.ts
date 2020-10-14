export const spacingAmounts = [
  '2x-small',
  'x-small',
  'small',
  'medium',
  'large',
  'x-large',
  '2x-large',
  '3x-large',
  '4x-large',
  '5x-large',
  '6x-large',
  '7x-large',
  '8x-large',
  '9x-large',
] as const;

export type SpacingSizes = typeof spacingAmounts[number];
