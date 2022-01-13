import React from 'react';
import '@testing-library/jest-dom';
import AddUser from './AddUser';
import { screen, fireEvent } from '@testing-library/react';
import { renderWithThemeProviders } from 'helpers/renderWithThemeProviders';
import Dashboard from './Dashboard';

describe('Form Field', () => {
  test('Render the component', () => {
    renderWithThemeProviders(
      <>
        <AddUser />
        <Dashboard />
      </>
    );
    fireEvent.change(screen.getByTestId('Name'), { target: { value: 'Olo' } });
    fireEvent.change(screen.getByTestId('Attendance'), { target: { value: '55%' } });
    fireEvent.change(screen.getByTestId('Average'), { target: { value: '4.5' } });
    fireEvent.click(screen.getByText('Add'));
    screen.getByText('Olo');
  });
});
