import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Button,
} from 'react-native';
import Loading from './Loading';
import Login from './Login';
import Main from './Main';
import Dummy from './Dummy';
import * as authActions from '../actions/authActions';
import { AppNav } from '../navigators/appNavigator'

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      isReady: false,
    } 
  }
  componentDidMount() {
    setTimeout(() => this.successfulLogin(), 1000);
  }
  
  successfulLogin = () => {
      this.setState({isReady: true})
  }

  render() {
    console.log('this is App.js props: ', this.props)
    if (!this.state.isReady) {
      return (
        <Loading />
      );
    }

    if (this.props.username) {
      return (
        <AppNav
        passUserId={this.props.userId} />
      );
    }

    return (
        <Login />
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
    userId: store.Auth.userId,
    email: store.Auth.email,
    picture: store.Auth.picture,
  }
}

const appDispatch = (dispatch) => {
  return {
    actions: bindActionCreators(authActions, dispatch)
  }
}

export default connect(mainState, appDispatch)(App)
