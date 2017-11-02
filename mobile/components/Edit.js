import React, { Component } from 'react';
import { ScrollView, View, Text, StyleSheet, StatusBar } from 'react-native';
import { 
  Card, 
  ListItem, 
  Button
 } from 'react-native-elements';
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
      <View Style={styles.container}>
      <ScrollView>
        <StatusBar
        barStyle='light-content'/>
        {/* {interests.map((interest, i) =>
          <Text
          key={i} 
          style={styles.text}
          onPress={() => this.addInterest(interest)}
          >{ interest }</Text>)}
          <Button
          title = 'Save'
          onPress = {() => this.saveInterests()} /> */}
          
          <Card title="Interest">
          <ScrollView contentContainerStyle={styles.interestSection}>
          {
            interests.map((interest, i) => {
              return (
                <Card key={i} containerStyle={styles.interest}>
                {/* <View> */}
                  <Text 
                  style={styles.text}
                  onPress={() => this.addInterest(interest)}
                  >
                  { interest }
                  </Text>
                {/* </View> */}
                </Card>
              );
            })
          }
           </ScrollView>
           <Button
          title = 'Save'
          onPress = {() => this.saveInterests()} />
          </Card>
      </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1, 
    justifyContent: 'center',
    backgroundColor: '#F5FCFF',
  },
  interestSection: {
    flexWrap: 'wrap',
    flexDirection: 'row',
    justifyContent: 'center',
  },
  interest: {
    margin: 10,
    padding: 10,
  },
  text: {
    fontSize: 16,
  },
});

export default Edit;