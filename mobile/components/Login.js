import React, { Component } from 'react';
import { View, Text, StyleSheet, Button, Image } from 'react-native';
import FBSDK, { LoginButton, AccessToken } from 'react-native-fbsdk';
import AWS, { Config, CognitoIdentityCredentials } from 'aws-sdk';


class Login extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    AccessToken.getCurrentAccessToken()
    .then(
      (data) => {
        console.log(data.accessToken.toString())
        AWS.config.region = 'us-west-2'; // Region
        AWS.config.credentials = new AWS.CognitoIdentityCredentials({
            IdentityPoolId: 'us-west-2:1c390ad4-2b5c-4db5-ba78-4f2d316961a7',
            Logins: {
              'graph.facebook.com': data.accessToken
            }
        });
      }
    ).then(() => {
      AWS.config.credentials.get(function() {
        console.log('AWS Session Token: ', AWS.config.credentials.sessionToken);
        console.log('AWS Access Key Id: ', AWS.config.credentials.accessKeyId);
        // alert('AWS Session Token: ', AWS.config.credentials.sessionToken);
        // alert('AWS Access Key Id: ', AWS.config.credentials.accessKeyId);
      })
    })
  }

  render() {
    // console.log('In Login, Props:', this.props.navigation.navigate);
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
        publishPermissions={["publish_actions"]}
        onLoginFinished={
          (error, result) => {
            if (error) {
              alert("Login failed with error: " + error.message);
              console.log("Login failed with error: " + error.message);
            } else if (result.isCancelled) {
              alert("Login was cancelled");
              console.log("Login was cancelled"); 
            } else {
              AccessToken.getCurrentAccessToken()
              .then(
                (data) => {
                  alert(data.accessToken.toString())
                  console.log(data.accessToken.toString())
                  AWS.config.region = 'us-west-2'; // Region
                  AWS.config.credentials = new AWS.CognitoIdentityCredentials({
                      IdentityPoolId: 'us-west-2:1c390ad4-2b5c-4db5-ba78-4f2d316961a7',
                      Logins: {
                        'graph.facebook.com': data.accessToken
                      }
                  });
                }
              ).then(() => {
                AWS.config.credentials.get(function() {
                  console.log('AWS Session Token: ', AWS.config.credentials.sessionToken);
                  console.log('AWS Access Key Id: ', AWS.config.credentials.accessKeyId);
                  alert('AWS Session Token: ', AWS.config.credentials.sessionToken);
                  alert('AWS Access Key Id: ', AWS.config.credentials.accessKeyId);
                })
              })
              alert("Login was successful with permissions: " + result.grantedPermissions)
              console.log("Login was successful with permissions: " + result.grantedPermissions)
            }
          }
        }
        onLogoutFinished={() => alert("User logged out")}/>
        <Text>Testing HAHAHAHAH</Text>
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

export default Login;