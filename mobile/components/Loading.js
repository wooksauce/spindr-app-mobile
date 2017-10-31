import React, { Component } from 'react';
import { View, Text, StyleSheet, Button, Image } from 'react-native';

class Loading extends Component {
  render() {
    console.log('you are in the loading component')
    return (
      <View style={styles.container}>
        <Image
        style={styles.logo}
        source={require('../images/Logo.png')}
      />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FF5A5F',
  },
  logo: {
    alignItems: 'center',
    width: 120, 
    height: 170
  }
});

export default Loading;
