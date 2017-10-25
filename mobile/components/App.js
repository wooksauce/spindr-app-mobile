import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Button
} from 'react-native';
import Loading from './Loading';
import Login from './Login';
import Main from './Main';
import Dummy from './Dummy';
import * as authActions from '../actions/authActions';

class App extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    if (!this.props.isReady) {
      return (
        <Loading />
      );
    }

    if (this.props.username) {
      return (
        <Main
        navigation={this.props.navigation} />
      );
    }

    return (
        <Login 
        successfulLogin={this.successfulLogin}
        navigation={this.props.navigation} />
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
});



const mainState = (store) => {
  return {
    username: store.Auth.username,
    userToken: store.Auth.userToken,
    email: store.Auth.email,
    picture: store.Auth.picture,
    isReady: true
  }
}

const appDispatch = (dispatch) => {
  return {
    actions: bindActionCreators(authActions, dispatch)
  }
}

export default connect(mainState, appDispatch)(App)
