import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

class Dummy extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Mark sucks my toto</Text>
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
});

export default Dummy;
