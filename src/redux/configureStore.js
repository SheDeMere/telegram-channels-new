import { createLogger } from 'redux-logger/src';
import { applyMiddleware, combineReducers, createStore } from 'redux';
import { cards, categories, header, ratings, reviews } from './ducks';
import thunk from 'redux-thunk';

const logger = createLogger({
  diff: true,
  collapsed: true,
});

export const store = createStore(
  combineReducers({ header, categories, cards, reviews, ratings }),
  applyMiddleware(logger, thunk),
);

