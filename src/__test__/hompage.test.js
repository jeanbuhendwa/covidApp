import '@testing-library/jest-dom';
import React from 'react';
import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { MemoryRouter } from 'react-router-dom';
import HomePage from '../pages/homepage';
import store from '../store/configureStore';

describe('HomePage', () => {
  it('renders a list of countries in Africa', async () => {
    const { container } = render(
      <Provider store={store}>
        <MemoryRouter initialEntries={['/']}>
          <HomePage />
        </MemoryRouter>
      </Provider>,
    );

    expect(screen.getByText('Get Covid Stats in Africa')).toBeInTheDocument();
    await screen.findByText('Angola');
    const countries = container.querySelectorAll('.countryDetails');
    expect(countries.length).toBeGreaterThan(0);
    expect(screen.getByText('Angola')).toBeInTheDocument();
  });
});
