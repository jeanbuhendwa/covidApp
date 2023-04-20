import { GetStats, StatsReducer } from '../store/reducer';

describe('GetStats action creator', () => {
  test('returns the correct action', () => {
    const payload = { stat: 123 };
    const expectedAction = { type: 'covid/GET_STATS', payload };
    const action = GetStats(payload);
    expect(action).toEqual(expectedAction);
  });
});

describe('StatsReducer', () => {
  test('returns the initial state', () => {
    const initialState = [];
    expect(StatsReducer(undefined, {})).toEqual(initialState);
  });

  test('handles GET_STATS action', () => {
    const state = [{ stat: 123 }];
    const payload = [{ stat: 456 }];
    const action = { type: 'covid/GET_STATS', payload };
    const expectedState = [...state, ...payload];
    expect(StatsReducer(state, action)).toEqual(expectedState);
  });
});
