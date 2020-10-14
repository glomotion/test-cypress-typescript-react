import emojiRegex from 'emoji-regex';

export const stringContainsEmoji = (text: string) => emojiRegex().test(text);

export const enhancedTextRenderingStyles = `
  /* Get fonts to look slightly nicer where possible */
  -webkit-font-smoothing: subpixel-antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-rendering: optimizeLegibility
`;
