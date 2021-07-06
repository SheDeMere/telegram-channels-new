import { createLogger } from 'redux-logger/src';
import { applyMiddleware, combineReducers, createStore } from 'redux';
import { cards, categories, header, ratings, reviews } from './ducks';
import thunk from 'redux-thunk';

const logger = createLogger({
  diff: true,
  collapsed: true,
});

const localUser = localStorage.getItem('auth');

const preloadedState = {
  auth: localUser ? JSON.parse(localUser) : undefined,
};
export const store = createStore(
  combineReducers({ header, categories, cards, reviews, ratings }),
  preloadedState,
  applyMiddleware(logger, thunk),
);

store.subscribe(() => {
  const state = store.getState();
  localStorage.setItem('auth', JSON.stringify(state.header));
});
