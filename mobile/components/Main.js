import React, { Component } from 'react';
import { View, Text, StyleSheet, StatusBar } from 'react-native';
import { Button } from 'react-native-elements';
import axios from 'axios';
import Video from './Video'

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userInfo: {},
    }
  }

  readyToPlay = () => {
    axios.get(`http://13.57.52.97:3000/api/userId/${this.props.passUserId}`)
    .then(info => {
      this.setState({ userInfo : info.data });
      console.log('UserInfo:', this.state.userInfo);
    })
    .then(() => {
      this.postToFlask();
    })
    .catch(err => {
      console.log('Fetch err:', err);
    })
  }

  postToFlask = () => {
    axios.post('http://localhost:5000/', this.state.userInfo)
    .then(() => {
      console.log('Posted to flask:', this.state.userInfo);
    })
    .catch(err => {
      console.log(err);
    })
  }

  render() {
    const { navigate } = this.props.navigation;
    console.log('this is props in Main: ', this.props)
    return (
      <View style={styles.container}>
        <StatusBar
        barStyle='light-content'/>
        <Button
        title = 'Ready'
        buttonStyle={styles.readyBtn}
        onPress = {() => {this.readyToPlay(), navigate('Video')}} />
        <Button 
        title = 'Matches'
        onPress = {() => navigate('Matches')}
        />
        <Button 
        title = 'Profile'
        onPress = {() => navigate('Profile')} />
        <Button
        title = 'Chats'
        onPress = {() => navigate('Chat')} />
        
        {/* <Button 
        title = 'Video'
        onPress = {() => navigate('Video')} /> */}
        
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',    
    justifyContent: 'center',
    backgroundColor: '#ffffff',
  },
  readyBtn: {
    borderRadius: 100,
  }
});

export default Main;