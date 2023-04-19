import React from 'react';
import { render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import NavBar from '../components/navbar';
import '@testing-library/jest-dom';

test('renders navbar without errors', () => {
  render(
    <BrowserRouter>
      <NavBar />
    </BrowserRouter>,
  );
});

test('renders navlink with correct text', () => {
  const { getByText } = render(
    <BrowserRouter>
      <NavBar />
    </BrowserRouter>,
  );
  const linkElement = getByText(/2023/i);
  expect(linkElement).toBeInTheDocument();
});
