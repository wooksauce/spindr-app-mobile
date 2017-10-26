import React, { Component } from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import interests from '../config/interests';

class Edit extends Component {
  render() {
    
    return (
      <View >
        {interests.map(interest =>
        <Text>{ interest }</Text>)}
        <Button
        title = 'Save'
        onPress = {() => console.log('Saved')} />
      </View>
    );
  }
}

export default Edit;