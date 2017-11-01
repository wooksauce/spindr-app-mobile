// React
import React, { Component } from 'react';

// Navigation
import { addNavigationHelpers, TabNavigator } from 'react-navigation'

//Redux
import { connect } from 'react-redux'
import { tabRoutes } from '../config/routes';

export const TabBar = TabNavigator(tabRoutes);

class TabBarNavigation extends React.Component {

  render(){
    return (
      <TabBar
        navigation={addNavigationHelpers({
            dispatch: this.props.dispatch,
            state:  this.props.nav,
          })}/>
    )
  }
}

const mapStateToProps = (state) => {
  return {
   navigationState: state.tabBar,
   }
 }

export const TabNav = connect(mapStateToProps)(TabBarNavigation)