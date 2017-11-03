import React, { Component } from 'react';
import { ScrollView, View, Text, StyleSheet, StatusBar, TouchableHighlight } from 'react-native';
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
      userInterests: [],
      toggled: false,
    }
  }

  selectInterest = (interest) => {
    let current;
    if(this.state[interest] === undefined) {
      current = interest;
      this.setState({ [interest]: false });
      console.log('dynamic event state created')
    }
    console.log('this is this checking: ', this.state)
    if (!this.state.userInterests.includes(interest)) {
      this.state.userInterests.push(interest);
      this.setState({ [interest]: !this.state[interest] })
      console.log('Added', interest);
      console.log('this is interest checking: ', this.state.userInterests)
      console.log('this is toggle checking: ', this.state.toggled)
    } else if (this.state.userInterests.includes(interest)) {
      let index = this.state.userInterests.indexOf(interest);
      this.state.userInterests.splice(index, 1);
      this.setState({ [interest]: !this.state[interest] })
      console.log('Removed', interest);
      console.log('this is interest checking: ', this.state.userInterests)
      console.log('this is toggle checking: ', this.state.toggled)
    }
  }

  saveInterests = () => {
    console.log('INTERESTS:', this.state.userInterests);
  }

  render() {
    return (
      <View Style={styles.container}>
      <ScrollView>
        <StatusBar barStyle='light-content'/>
          <Card title="Interest">
          <ScrollView contentContainerStyle={styles.interestSection}>
          {
            interests.map((interest, i) => {
              return (
                <TouchableHighlight key={i} underlayColor='transparent' onPress={() => {this.selectInterest(interest)}}>
                  <View >
                    <Card containerStyle={[this.state[interest] ? styles.interestOn : styles.interestOff]}>
                      <Text style={[this.state[interest] ? styles.textOn : styles.textOff]}>
                        { interest }
                      </Text>
                    </Card>
                  </View>
                </TouchableHighlight>
              );
            })
          }
           </ScrollView>
           <Button
            raised
            fontSize = {26}
            containerViewStyle={{paddingTop: 20,paddingBottom: 20}}
            buttonStyle={styles.saveBtn}
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
  interestOn: {
    margin: 10,
    padding: 10,
    backgroundColor: '#FF5A5F',
  },
  interestOff: {
    margin: 10,
    padding: 10,
  },
  textOn: {
    fontSize: 16,
    color: 'white',
  },
  textOff: {
    fontSize: 16,
  },
  overlay: {
    alignItems:'center'
  },
  saveBtn: {
    borderRadius: 10,
    backgroundColor: '#FF5A5F',
  }
});

export default Edit;