import React from 'react';
import '@testing-library/jest-dom';
import FormField from './FormField';
import { renderWithThemeProviders } from 'helpers/renderWithThemeProviders';

describe('Input With Button', () => {
  test('Render the component', () => {
    renderWithThemeProviders(<FormField label="name" name="name" id="name" />);
  });
});
