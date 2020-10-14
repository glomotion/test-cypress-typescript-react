import React, { cloneElement, Children } from 'react';
import { css } from 'emotion';
import classNames from 'classnames';

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
      ),
      ...(typeof children.type === 'string' ? { 'data-testid': testId } : { testId }),
    })
  ) : (
    <span
      className={classNames(
        styles.verticalSpace,
      )}
      data-testid={testId}
    >
      {children}
    </span>
  );
}

VerticalSpace.defaultProps = {
  top: '',
  bottom: '',
  both: '',
  testId: '',
  responsiveBreakpoints: [],
};
