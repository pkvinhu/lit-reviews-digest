import React, { Component } from 'react';
import ReactDOM, { render } from 'react-dom';
import Home from './Home';
import { Provider } from 'react-redux';
import store from './store'

render(
  <Provider store={store}>
    <Home />
  </Provider>,
  document.getElementById('app')
)