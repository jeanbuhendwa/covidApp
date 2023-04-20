import React from 'react';
import { render, screen } from '@testing-library/react';
import { BrowserRouter, useLocation } from 'react-router-dom';
import NavBar from '../components/navbar';
import '@testing-library/jest-dom';

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useLocation: jest.fn(),
}));

describe('NavBar component', () => {
  let mockUseLocation;

  beforeEach(() => {
    mockUseLocation = useLocation.mockImplementation(() => ({
      pathname: '/some/path',
    }));
  });

  afterEach(() => {
    mockUseLocation.mockRestore();
  });

  test('renders without errors', () => {
    render(
      <BrowserRouter>
        <NavBar />
      </BrowserRouter>,
    );
  });

  test('does not render the back button when not on country page', () => {
    const mockLocation = { pathname: '/' };
    mockUseLocation.mockReturnValue(mockLocation);

    render(
      <BrowserRouter>
        <NavBar />
      </BrowserRouter>,
    );

    expect(screen.queryByText('<')).toBeNull();
  });
});
