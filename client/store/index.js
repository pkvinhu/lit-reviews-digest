import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import { authReducer } from './auth'
import { userReducer } from './user'
import { booksReducer } from './books';
import { mapReducer } from './map';
import { historyReducer } from './history';

const reducer = combineReducers({
  auth: authReducer,
  user: userReducer,
  books: booksReducer,
  map: mapReducer,
  history: historyReducer,
})

export const store = createStore(reducer, applyMiddleware(thunk));