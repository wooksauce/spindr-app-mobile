import React, { Component } from 'react';
import { View, Text, StyleSheet, Button, StatusBar } from 'react-native';

class Matches extends Component {
  render() {
    return (
      <View>
        <StatusBar
        barStyle='light-content'/>
        <Text>Matches are gonna be shown here</Text>
      </View>
    );
  }
}

export default Matches;