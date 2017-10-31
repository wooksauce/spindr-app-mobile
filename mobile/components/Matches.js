import React, { Component } from 'react';
import { View, Text, StyleSheet, Button, StatusBar } from 'react-native';

class Matches extends Component {
  render() {
    const { navigate } = this.props.navigation;
    return (
      <View>
        <StatusBar
        barStyle='light-content'/>
        <Text>Matches are gonna be shown here</Text>
        <Text>Say hi to Tara for me Mark</Text>
        <Button
        title = 'Chats'
        onPress = {() => navigate('Chat')} />
      </View>
    );
  }
}

export default Matches;