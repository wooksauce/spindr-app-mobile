import React, { Component } from 'react';
import { View, Text, StyleSheet, Button, StatusBar } from 'react-native';
import interests from '../config/interests';

class Edit extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userInterests: []
    }
  }

  addInterest = (interest) => {
    if (!this.state.userInterests.includes(interest)) {
      this.state.userInterests.push(interest);
      console.log('Added', interest);
    }
  }

  saveInterests = () => {
    console.log('INTERESTS:', this.state.userInterests);
  }

  render() {
    return (
      <View style={styles.container}>
        <StatusBar
        barStyle='light-content'/>
        {interests.map((interest, i) =>
          <Text
          key={i} 
          style={styles.text}
          onPress={() => this.addInterest(interest)}
          >{ interest }</Text>)}
          <Button
          title = 'Save'
          onPress = {() => this.saveInterests()} />
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