import React from 'react';
import ReactDom from 'react-dom';

import '../assets/style/main.scss';

import { Provider } from 'react-redux';
import store from './store/store';

import App from './App';

ReactDom.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.querySelector('.root')
);
