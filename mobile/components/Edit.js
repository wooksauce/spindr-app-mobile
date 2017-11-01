import React, { Component } from 'react';
import { View, Text, StyleSheet, Button, StatusBar } from 'react-native';
import interests from '../config/interests';

class Edit extends Component {
  render() {
    
    return (
      <View style={styles.container}>
        <StatusBar
        barStyle='light-content'/>
        {interests.map((interest, i) =>
        <Text key={i} style={styles.text}>{ interest }</Text>)}
        <Button
        title = 'Save'
        onPress = {() => console.log('Saved')} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexWrap: 'wrap',
    flexDirection: 'row',    
    justifyContent: 'center',
    backgroundColor: '#F5FCFF',
  },
  text: {
    fontSize: 20,
    margin: 10,
  },
});

export default Edit;