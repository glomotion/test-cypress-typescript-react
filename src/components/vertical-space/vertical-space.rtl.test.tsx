import React from 'react';
import { findByTestId, render, screen } from '@testing-library/react';

import { VerticalSpace } from './vertical-space.component';
import { measurements } from '../../variables';

describe('<VerticalSpace />', () => {
  it('Expect to not log errors in console', () => {
    const spy = jest.spyOn(global.console, 'error');
    render(
      <VerticalSpace>
        <div>mooo</div>
      </VerticalSpace>,
    );
    expect(spy).not.toHaveBeenCalled();
  });

  it.skip('Should render and match the snapshot', () => {
    const {
      container: { firstChild },
    } = render(
      <VerticalSpace>
        <div>mooo</div>
      </VerticalSpace>,
    );
    expect(firstChild).toMatchSnapshot();
  });

  it('should receive separate margin amount inputs correctly', () => {
    const top = 'small';
    const bottom = 'large';
    const fixture = render(
      <VerticalSpace testId="moo" top={top} bottom={bottom}>
        mooo cow
      </VerticalSpace>,
    );
    const el = fixture.queryByTestId('moo') as HTMLElement;
    const styles = window.getComputedStyle(el);
    expect(styles.getPropertyValue('--marginTop')).toBe(
      measurements.spacingAmountMapping.small,
    );
    expect(styles.getPropertyValue('--marginBottom')).toBe(
      measurements.spacingAmountMapping.large,
    );
  });
});
