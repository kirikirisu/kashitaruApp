import React from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers/index';
import Router from './components/router';
import { getAllShare } from './actions/index';

const middleware = [thunk];
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  rootReducer,
  composeEnhancers(
    applyMiddleware(...middleware),
  ),
);

store.dispatch(getAllShare());

const App = () => (
  <Provider store={store}>
    <Router />
  </Provider>
);

export default App;
