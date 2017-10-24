import FBSDK, { LoginButton, AccessToken, GraphRequest, GraphRequestManager, } from 'react-native-fbsdk';
import AWS, { Config, CognitoIdentityCredentials } from 'aws-sdk';

export const getToken = () => {
  return (dispatch) => {
    //get user token if logged in
    AccessToken.getCurrentAccessToken()
    .then(
      (data) => {
        console.log('in getToken')
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
      })
      console.log('dispatching')
      dispatch({type: 'USER_TOKEN_SUCCESSFUL'})
    })
  }
}

export const logout = () => {
  return (dispatch) => {
    dispatch({type: 'USER_LOGOUT_SUCCESSFUL'})
  }
}

export const getFbUserInfo = () => {
  return (dispatch) => {
    //Create response callback.
    responseInfoCallback = (error, result) => {
      if (error) {
        alert('Error fetching data: ' + error.toString());
      } else {
        console.log('Success fetching data: ' + result);
      }
    }

    // Create a graph request asking for user information with a callback to handle the response.
    const infoRequest = new GraphRequest(
      '/me',
      null,
      this.responseInfoCallback,
    );
    // Start the graph request.
    new GraphRequestManager().addRequest(infoRequest).start();
    }
}

