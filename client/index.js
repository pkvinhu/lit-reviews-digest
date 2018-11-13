import React, { Component, Fragment } from 'react';
import ReactDOM, { render } from 'react-dom';
import Home from './Home';
import { Provider } from 'react-redux';
import { store } from './store'

render(
<Fragment>
  <Provider store={store}>
    <Home />
  </Provider>
</Fragment>,
  document.getElementById('app')
)