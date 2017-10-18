import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';
import Loading from './Loading';
import Login from './Login';
import Main from './Main';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isReady: true
    }
  }

  render() {
    if (!this.state.isReady) {
      return (
        <Loading />
      );
    }

    if (this.props.username) {
      return (
        <Main />
      );
    }

    return (
      <Login successfulLogin={this.successfulLogin} />
    );
  }
}

export default App;

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
