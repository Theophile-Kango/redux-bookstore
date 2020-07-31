import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import App from './components/App';
import reducer from './reducers/index';
import initialState from './reducers/initialState';
import * as serviceWorker from './serviceWorker';

const STATE = { books: initialState };

const store = createStore(reducer, STATE);

console.log(STATE)

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root'),
);

serviceWorker.register();
