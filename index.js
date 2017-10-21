import React, { Component } from 'react';
import { AppRegistry } from 'react-native';
import Landing from './mobile/components/Landing';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, combineReducers, compose} from 'redux';
import thunkMiddleware from 'redux-thunk';
import createLogger from 'redux-logger';
import reducer from './mobile/reducers';

// const loggerMiddleware = createLogger({ predicate: (getState, action) => __DEV__  });

function configureStore(initialState) {
  const enhancer = compose(
    applyMiddleware(
      thunkMiddleware, // lets us dispatch() functions
      // loggerMiddleware,
    ),
  );
  return createStore(reducer, initialState, enhancer);
}

const store = configureStore({});

const App = () => {
  <Provider store={store}>
    <Landing />
  </Provider>
}

AppRegistry.registerComponent('spindr_app_mobile', () => App);
