import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { View, Text, StyleSheet, Button, Image } from 'react-native';
import FBSDK, { LoginButton, AccessToken } from 'react-native-fbsdk';
import AWS, { Config, CognitoIdentityCredentials } from 'aws-sdk';

import * as authActions from '../actions/authActions';

class Login extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.actions.getToken();
  }

  render() {
    // console.log('In Login, Props:', this.props.navigation.navigate);
    console.log('In Login, Props:', this.props);
    const { navigate } = this.props.navigation;
    console.log('Navigate:', navigate);
    return (
      <View style={styles.container}>
      <Image
        style={styles.logo}
        source={require('../images/Logo.png')}
      />
      <Text>FACEBOOK SIGNIN</Text>
      <LoginButton 
        readPermissions={["email", "public_profile"]}
        onLoginFinished={
          (error, result) => {
            if (error) {
              console.log("Login failed with error: " + error.message);
            } else if (result.isCancelled) {
              console.log("Login was cancelled"); 
            } else {
              this.props.actions.getToken();
              {/* this.props.actions.getFbUserInfo(); */}
              navigate('Main');
              console.log("Login was successful with permissions: " + result.grantedPermissions)
            }
          }
        }
        onLogoutFinished={
          (error, result) => {
            if (error) {
              console.log("Logout failed with error: " + error.message);
            } else {
              this.props.actions.logout();
            }
          }
        }/>
        <Button 
          title='Mark LOL'
          onPress = {() => navigate('Dummy')} />
    </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ffffff',
  },
  loginTitle: {
    alignItems: 'center',
  },
  logo: {
    alignItems: 'center',
    width: 250, 
    height: 250
  }
});

const loginDispatch = (dispatch) => {
  return {
    actions: bindActionCreators(authActions, dispatch)
  }
};

export default connect(null, loginDispatch)(Login);

