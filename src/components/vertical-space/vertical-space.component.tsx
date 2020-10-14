import React, { cloneElement, Children } from 'react';
import { css } from 'emotion';
import classNames from 'classnames';

import { measurements } from '../../variables';
import { breakpointSizeMapping } from '../../variables/breakpoints.variables';
import { ResponsiveBreakpoint, BreakpointSizes } from '../../types';
import styles from './vertical-space.style.module.css';

export function VerticalSpace({
  children,
  top,
  bottom,
  both,
  responsiveBreakpoints,
  testId,
}: {
  children: any;
  top?: string;
  bottom?: string;
  both?: string;
  responsiveBreakpoints?: any[];
  testId?: string;
}) {
  return children && children.props ? (
    cloneElement(Children.only(children), {
      className: classNames(
        children.props.className,
        styles.verticalSpace,
        renderDynamicStyles({
          top,
          bottom,
          both,
          breakpoints: responsiveBreakpoints,
        }),
      ),
      ...(typeof children.type === 'string' ? { 'data-testid': testId } : { testId }),
    })
  ) : (
    <span
      className={classNames(
        styles.verticalSpace,
        renderDynamicStyles({
          top,
          bottom,
          both,
          breakpoints: responsiveBreakpoints,
        }),
      )}
      data-testid={testId}
    >
      {children}
    </span>
  );
}

function pickMarginValue(both?: string, single?: string) {
  return both
    ? measurements.spacingAmountMapping[both]
    : single
    ? measurements.spacingAmountMapping[single]
    : 0;
}

function renderDynamicStyles({
  both,
  top,
  bottom,
  breakpoints,
}: {
  both?: string;
  top?: string;
  bottom?: string;
  breakpoints?: ResponsiveBreakpoint[];
}) {
  return css`
    --marginTop: ${pickMarginValue(both, top)};
    --marginBottom: ${pickMarginValue(both, bottom)};

    /* DEFINE RESPONSIVE SIZING */
    ${breakpoints
      ? breakpoints.map(({ breakpoint, topSize, bottomSize, bothSize }) => {
          const newTop = pickMarginValue(bothSize, topSize);
          const newBottom = pickMarginValue(bothSize, bottomSize);
          return generateMediaQuery({ breakpoint, newTop, newBottom });
        })
      : ''}
  `;
}

function generateMediaQuery({
  breakpoint,
  newTop,
  newBottom,
}: {
  breakpoint: BreakpointSizes;
  newTop?: string;
  newBottom?: string;
}) {
  return `@media screen and (min-width: ${breakpointSizeMapping[breakpoint]}) {
    ${newTop ? `--marginTop: ${newTop};` : ''}
    ${newBottom ? `--marginBottom: ${newBottom};` : ''}
  }`;
}


VerticalSpace.defaultProps = {
  top: '',
  bottom: '',
  both: '',
  testId: '',
  responsiveBreakpoints: [],
};
