import React, { Component } from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import { Avatar } from 'react-native-elements';

class Profile extends Component {
  
  render() {
    const { navigate } = this.props.navigation;
    return (
      <View>
      <Avatar
        medium
        title="MC"
        onPress={() => console.log("Works!")}
        activeOpacity={0.7} />
        <Text>Profile is gonna be shown here</Text>
        <Button 
        title = 'Edit'
        onPress = {() => navigate('Edit')} />
      </View>
    );
  }
}

export default Profile;