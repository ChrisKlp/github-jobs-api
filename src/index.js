import React from 'react';
import ReactDOM from 'react-dom';
import Root from './views/Root';
import { Provider } from 'react-redux';
import configureStore from './data/store/';

const store = configureStore();

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <Root />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
