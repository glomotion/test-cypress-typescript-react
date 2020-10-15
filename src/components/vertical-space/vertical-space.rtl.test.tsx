/// <reference types="Jest" />

import React from 'react';
import { findByTestId, render, screen } from '@testing-library/react';

import { VerticalSpace } from './vertical-space.component';

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

  it('Should render and match the snapshot', () => {
    const {
      container: { firstChild },
    } = render(
      <VerticalSpace>
        <div>mooo</div>
      </VerticalSpace>,
    );
    expect(firstChild).toMatchSnapshot();
  });
});
