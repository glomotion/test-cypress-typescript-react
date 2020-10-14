export const userSelect = (mode: 'none' | 'auto') => `
  user-select: ${mode};
  pointer-events: ${mode};
`;
