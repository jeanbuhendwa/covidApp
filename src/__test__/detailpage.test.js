import { render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import React from 'react';
import Country from '../pages/DetailsPage';
import store from '../store/configureStore';
import { GetStats } from '../store/reducer';
import FetchStats from '../store/api';
import '@testing-library/jest-dom';

jest.mock('../store/api');

describe('Country Component', () => {
  beforeAll(() => {
    const response = [
      {
        country: 'Canada',
        todays_cases: 100,
        todays_deaths: 10,
        todays_recovered: 90,
        total_cases: 1000,
        total_recovered: 900,
        total_active: 100,
        total_tests: 5000,
        total_deaths: 100,
      },
      {
        country: 'USA',
        todays_cases: 200,
        todays_deaths: 20,
        todays_recovered: 180,
        total_cases: 2000,
        total_recovered: 1800,
        total_active: 200,
        total_tests: 10000,
        total_deaths: 200,
      },
    ];
    FetchStats.mockResolvedValue(response);
    store.dispatch(GetStats(response));
  });

  it('should render "Country not found" if the country is not in the store', async () => {
    const { getByText } = render(
      <BrowserRouter>
        <Provider store={store}>
          <Country />
        </Provider>
      </BrowserRouter>,
      { route: '/not-a-country' },
    );
    expect(getByText('Country not found')).toBeInTheDocument();
  });
});
