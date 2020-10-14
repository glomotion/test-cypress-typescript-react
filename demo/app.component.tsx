import React from 'react';

import { VerticalSpace, SimpleText } from '../src/components';
import { ParagraphText } from '../src/components/text/paragraph-text.component';
import { colors, gradients } from '../src/variables';
import styles from './app.styles.module.css';

export const App = ({ ...props }) => (
  <div className={styles.moo}>
    <VerticalSpace
      top="large"
      responsiveBreakpoints={[
        { breakpoint: 'small', topSize: '3x-large' },
        { breakpoint: 'medium', topSize: '9x-large' },
      ]}
    >
      <div className="godClass">
        RESPONSIVE VERTICAL SPACING ABOVE HERE ^ <br />
        REACT App consuming and using` css variables ...
        <div>
          the cow sais: <strong>moo</strong>
        </div>
      </div>
    </VerticalSpace>

    <VerticalSpace
      top="small"
      bottom="large"
      responsiveBreakpoints={[
        { breakpoint: 'medium', topSize: '2x-large' },
        { breakpoint: 'large', topSize: '6x-large' },
      ]}
      testId="2ndVerticalSpace"
    >
      <SimpleText fontSize="large" fontWeight="bold" fillColor={colors.bg.dark}>
        A SECOND USE OF VerticalSpace
      </SimpleText>
    </VerticalSpace>

    <SimpleText testId="firstSimpleText">
      this is a piece of SimpleText. SimpleText is always display: inline{' '}
    </SimpleText>
    <SimpleText fontSize="large" fontWeight="bold" fillColor={colors.bg.dark}>
      <div>SimpleText can have color, and contain anything (almost)</div>
    </SimpleText>

    <SimpleText fontSize="large" fontWeight="bold" fillColor={colors.bg.dark}>
      <div>differen text here...</div>
    </SimpleText>

    <SimpleText fontSize="large" fontWeight="bold" fillColor={colors.bg.dark}>
      <div>Sand still more different text</div>
    </SimpleText>

    <SimpleText fontSize="large" fontWeight="bold" fillColor={colors.bg.dark}>
      no div tag!
    </SimpleText>

    <SimpleText fontSize="large" fontWeight="bold" fillColor={colors.bg.dark}>
      more different text!
    </SimpleText>

    <SimpleText fontSize="large" fontWeight="bold" fillColor={colors.bg.dark}>
      <div>how no brown cow?</div>
    </SimpleText>

    <ParagraphText fontSize="large" fillGradient={gradients.blue.simple()}>
      this is ParagraphText (which extends SimpleText). it is always display:
      block; this particular one is large sized and &quot;blue&quot; gradient
      filled
    </ParagraphText>

    <ParagraphText
      fontSize="tag"
      fillGradient={gradients.bg.simple('bottom left')}
      align="right"
    >
      this is a block of right aligned, &quot;bg&quot; gradient filled,
      &quot;tag&quot; sized ParagraphText (which extends SimpleText)
    </ParagraphText>

    <ParagraphText
      fontSize="tag"
      fontWeight="bold"
      fillGradient={gradients.red.simple('right')}
      testId="redParagraph"
      responsiveSize={[{ breakpoint: 'small', fontSize: 'large' }]}
      align="center"
    >
      this ParagraphText has a left to right red simple gradient and is center
      aligned
    </ParagraphText>
  </div>
);
