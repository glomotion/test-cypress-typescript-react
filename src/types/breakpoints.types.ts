import { HeadingSizes, SimpleTextSizes } from './typography.types';
import { SpacingSizes } from './measurements.types';

export const breakpointNames = [
  '2x-small',
  'x-small',
  'small',
  'medium',
  'large',
  'x-large',
  '2x-large',
] as const;

export type BreakpointSizes = typeof breakpointNames[number];

export interface ResponsiveBreakpoint {
  breakpoint: BreakpointSizes;
  fontSize?: HeadingSizes | SimpleTextSizes;
  topSize?: SpacingSizes;
  bottomSize?: SpacingSizes;
  bothSize?: SpacingSizes;
}
