import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import { authReducer } from './auth'
import { userReducer } from './user'
import { booksReducer } from './books';

const reducer = combineReducers({
  auth: authReducer,
  user: userReducer,
  books: booksReducer
})

export const store = createStore(reducer, applyMiddleware(thunk));