import React, { Component } from 'react';
import { AppRegistry } from 'react-native';

import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from "redux";
import thunk from 'redux-thunk';
import promise from 'redux-promise-middleware';
import { createLogger as logger } from 'redux-logger';

// import { AppNav } from './mobile/navigators/appNavigator'
import App from './mobile/components/App';
import appReducer from './mobile/reducers';

// Initialize middleware for redux
const middleware = applyMiddleware(promise(), thunk, logger());

// Initialize redux state with (reducers, middleware)
const store = createStore(appReducer, middleware);

class SpindrAppMobile extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <App />
      </Provider>
    );
  }
}

AppRegistry.registerComponent('spindr_app_mobile', () => SpindrAppMobile);
