import { combineReducers, applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';
import { StatsReducer } from './reducer';

const reducers = combineReducers({
  details: StatsReducer,
});

const middlewares = [thunk];

const store = createStore(reducers, applyMiddleware(...middlewares));

export default store;
