import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { Provider } from 'react-redux'
// Store
import store from './Store/Store'


ReactDOM.render(
<Provider store={store}>
  <App />
</Provider>, document.getElementById('root'));