import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from './store';
import App from './App';
import './index.css';

const app = (
  <Provider store={store}>
    <App />
  </Provider>
);

ReactDOM.render(
  // {app}
  <React.StrictMode>{app}</React.StrictMode>,
  document.getElementById('root')
);
