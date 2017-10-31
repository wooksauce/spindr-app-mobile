import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addNavigationHelpers, TabNavigator, NavigationActions } from 'react-navigation';
import tabRoutes from '../config/tabRoutes';

export const AppTabNavigator = TabNavigator(tabRoutes);

class TabApp extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <AppTabNavigator navigation={addNavigationHelpers({
        dispatch: this.props.dispatch,
        state: this.props.nav,
      })} />
    );
  }
}
const mapStateToProps = (state) => ({
  nav: state.nav
});
export const AppTabNav = connect(mapStateToProps)(TabApp);