import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addNavigationHelpers, StackNavigator, NavigationActions } from 'react-navigation';
import routes from '../config/routes';

export const AppNavigator = StackNavigator(routes);

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <AppNavigator navigation={addNavigationHelpers({
        dispatch: this.props.dispatch,
        state: this.props.nav,
      })} />
    );
  }
}
const mapStateToProps = (state) => ({
  nav: state.nav
});
export const AppNav = connect(mapStateToProps)(App);