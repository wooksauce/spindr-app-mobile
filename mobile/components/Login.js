import React, { Component } from 'react';
import { 
  View, 
  Text, 
  StyleSheet,
  Button,
  TouchableOpacity
 } from 'react-native';
//  import AWS from ('aws-sdk/dist/aws-sdk-react-native');
import FBSDK, { LoginManager, LoginButton } from 'react-native-fbsdk';
import AWS from 'aws-sdk';


class Login extends Component {
  // _fbAuth(){
  //   LoginManager.logInWithReadPermissions(['public_profile']).then(
  //     function(result) {
  //       if (result.isCancelled) {
  //         alert('Login was cancelled');
  //       } else {
  //         alert('Login was successful with permissions: '
  //           + result.grantedPermissions.toString());
  //       }
  //     },
  //     function(error) {
  //       alert('Login failed with error: ' + error);
  //     }
  //   );
  // }

  render() {
    return (
      <View style={styles.container}>
        <Text>FACEBOOK SIGNIN</Text>
      <LoginButton 
        publishPermissions={["publish_actions"]}
        onLoginFinished={
          (error, result) => {
            if (error) {
              alert("Login failed with error: " + error);
            } else if (result.isCancelled) {
              alert("Login was cancelled");
            } else {
              alert("Login was successful with permissions: " + result.grantedPermissions)
            }
          }
        }
        onLogoutFinished={() => alert("User logged out")}/>
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
  }
});

export default Login;