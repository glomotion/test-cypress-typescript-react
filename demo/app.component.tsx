import React from 'react';

import { VerticalSpace } from '../src/components';
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
      <div>
        A SECOND USE OF VerticalSpace
      </div>
    </VerticalSpace>

  </div>
);
