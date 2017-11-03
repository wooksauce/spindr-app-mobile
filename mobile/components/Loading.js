import React, { Component } from 'react';
import { View, Text, StyleSheet, Button, Image, StatusBar } from 'react-native';
import LinearGradient from 'react-native-linear-gradient'

class Loading extends Component {
  render() {
    return (
      <LinearGradient colors={['#FF5A5F', '#FF5A5F', '#EE8426']} style={styles.linearGradient}>
        <StatusBar
        barStyle='light-content'/>
        <Image
        style={styles.logo}
        source={require('../images/Logo.png')}
        />
      </LinearGradient>
    );
  }
}

const styles = StyleSheet.create({
  linearGradient: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
  },
  logo: {
    alignItems: 'center',
    width: 120, 
    height: 170
  }
});

export default Loading;
