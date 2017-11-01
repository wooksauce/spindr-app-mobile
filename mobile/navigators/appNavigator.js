import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addNavigationHelpers, StackNavigator } from 'react-navigation';
import {stackRoutes} from '../config/routes';

export const StackNav = StackNavigator(stackRoutes);

class Stack extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <StackNav navigation={addNavigationHelpers({
        dispatch: this.props.dispatch,
        state: this.props.nav,
      })} />
    );
  }
}
const mapStackStateToProps = (state) => ({
  nav: state.nav
});

export const AppNav = connect(mapStackStateToProps)(Stack);
