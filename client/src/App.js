import React from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import rootReducer from './Reducer/index';
import Router from './Component/router';

const store = createStore(rootReducer);

const App = () => (
  <Provider store={store}>
    <Router />
  </Provider>
);

export default App;
