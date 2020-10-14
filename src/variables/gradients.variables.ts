import { FillGradientTarget, ThemeGradients } from '../types';
import {
  blue as blueColor,
  red as redColor,
  orange as orangeColor,
  bg as bgColor,
} from './colors.variables';

export const blue = {
  simple: (direction: FillGradientTarget = 'bottom') => `linear-gradient(
    to ${direction},
    ${blueColor[300]} 0%,
    ${blueColor[700]} 100%
  );`,
  mirror: (direction: FillGradientTarget = 'bottom') => `linear-gradient(
    to ${direction},
    ${blueColor[300]} 0%,
    ${blueColor[700]} 50%,
    ${blueColor[300]} 100%
  );`,
} as ThemeGradients;

export const red = {
  simple: (direction: FillGradientTarget = 'bottom') => `linear-gradient(
    to ${direction},
    ${redColor[100]} 0%,
    ${redColor[300]} 100%
  );`,
  mirror: (direction: FillGradientTarget = 'bottom') => `linear-gradient(
    to ${direction},
    ${redColor[100]} 0%,
    ${redColor[300]} 50%,
    ${redColor[100]} 100%
  );`,
} as ThemeGradients;

export const orange = {
  simple: (direction: FillGradientTarget = 'bottom') => `linear-gradient(
    to ${direction},
    ${orangeColor[300]} 0%,
    ${orangeColor[700]} 100%
  );`,
  mirror: (direction: FillGradientTarget = 'bottom') => `linear-gradient(
    to ${direction},
    ${orangeColor[300]} 0%,
    ${orangeColor[700]} 50%,
    ${orangeColor[300]} 100%
  );`,
} as ThemeGradients;

export const bg = {
  simple: (direction: FillGradientTarget = 'bottom') => `linear-gradient(
    to ${direction},
    ${bgColor.med} 0%,
    ${bgColor.dark} 100%
  );`,
  mirror: (direction: FillGradientTarget = 'bottom') => `linear-gradient(
    to ${direction},
    ${bgColor.med} 0%,
    ${bgColor.dark} 50%,
    ${bgColor.med} 100%
  );`,
} as ThemeGradients;  

export const textFill = (gradient: string): string =>
  `background: ${gradient};
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;`;
