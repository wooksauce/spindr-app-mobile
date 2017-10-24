import React, { Component } from 'react';
import { Provider } from 'react-redux';

import store from './store';
import { AppNav } from '../navigators/appNavigator';

class Root extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <AppNav />
      </Provider>
    );
  }
}

export default Root;