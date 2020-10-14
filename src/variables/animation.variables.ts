export const standardTransitionDuration = '150ms';
export const standardTransitionEasing = 'ease-in-out';
export const slowTransitionDuration = '300ms';

export const standardTransition = (prop: string) => `
  transition: ${prop} ${standardTransitionDuration}
  ${standardTransitionEasing};
`;

export const slowTransition = (prop: string) => `
  transition: ${prop} ${slowTransitionDuration}
  ${standardTransitionEasing};
`;
