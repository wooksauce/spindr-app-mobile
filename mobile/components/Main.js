import React, { Component } from 'react';
import { 
  View, 
  Text, 
  StyleSheet, 
  StatusBar, 
  Image, 
  TouchableHighlight, 
  TouchableWithoutFeedback,
  Animated, 
  Dimensions } from 'react-native';
import { Button } from 'react-native-elements';
import axios from 'axios';
import Video from './Video';

const { width, height } = Dimensions.get('window');
const size = Math.min(width, height) - 1;

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userInfo: {},
      scale: new Animated.Value(0)
    }
  }

  animateOnPress = () => {
    Animated.timing(this.state.scale, {
      toValue: 6,
      duration: 600,
    }).start(() => {
      this.setState({
        scale: new Animated.Value(0)
      });
      this.props.navigation.navigate('Video');
    });
  }

  // readyToPlay = () => {
  //   axios.get(`http://13.57.52.97:3000/api/userId/${this.props.passUserId}`)
  //   .then(info => {
  //     this.setState({ userInfo : info.data });
  //     console.log('UserInfo:', this.state.userInfo);
  //   })
  //   .then(() => {
  //     this.postToFlask();
  //   })
  //   .catch(err => {
  //     console.log('Fetch err:', err);
  //   })
  // }

  // postToFlask = () => {
  //   axios.post('http://13.57.39.204/', this.state.userInfo)
  //   .then(() => {
  //     console.log('Posted to flask:', this.state.userInfo);
  //   })
  //   .catch(err => {
  //     console.log(err);
  //   })
  // }

  render() {
    const { navigate } = this.props.navigation;
    console.log('this is props in Main: ', this.props)
    return (
      <View style={styles.container}>
        <StatusBar barStyle='light-content'/>
        <Animated.View style={{
          position: 'absolute',
          backgroundColor: '#FFB2B4',
          width: size,
          height: size,
          borderRadius: size / 2,
          transform: [{
            scale: this.state.scale
          }]
        }} />
         {/* <TouchableWithoutFeedback  onPress = {() => {this.readyToPlay(), this.animateOnPress()}}> */}
        <TouchableWithoutFeedback  onPress = {() => {this.animateOnPress()}}>
          <Image
          style={styles.join}
          source={require('../images/Join.png')}
          />
        </TouchableWithoutFeedback>
        {/* <Button
        title = 'Ready'
        buttonStyle={styles.readyBtn}
        onPress = {() => {this.readyToPlay(), navigate('Video')}} /> */}
        <Button 
        title = 'Matches'
        onPress = {() => navigate('Matches')}
        />
        <Button 
        title = 'Profile'
        onPress = {() => navigate('Profile')} />
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
  },
  join: {
    alignItems: 'center',
    marginTop: 30,
    width: 200, 
    height: 200
  },
});

export default Main;