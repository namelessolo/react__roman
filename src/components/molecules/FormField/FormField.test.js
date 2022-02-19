import React from 'react';
import '@testing-library/jest-dom';
import FormField from './FormField';
import { renderWithProviders } from 'helpers/renderWithProviders';

describe('Input With Button', () => {
  it('Render the component', () => {
    renderWithProviders(<FormField label="name" name="name" id="name" />);
  });
});
