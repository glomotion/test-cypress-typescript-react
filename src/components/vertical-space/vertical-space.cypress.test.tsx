/// <reference types="Cypress" />

import React from 'react';
import { mount } from 'cypress-react-unit-test';

import { VerticalSpace } from './vertical-space.component';

describe('VerticalSpace component', () => {
  it('works', () => {
    mount(<VerticalSpace>moooo</VerticalSpace>);
    cy.contains('moooo').should('be.visible');
  });
});
