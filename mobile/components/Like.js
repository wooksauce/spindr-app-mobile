import React, { Component } from 'react';
import { View, Text, StyleSheet} from 'react-native';
import { 
  Button,
  SearchBar,
 } from 'react-native-elements';

class Like extends Component {
  render() {
    const { navigate } = this.props.navigation;
    return (
      <View>
        <Button title='Like' onPress = {() => navigate('Video')}>
          <Text>Like</Text>
        </Button>
        <Button title='Dislike' onPress = {() => navigate('Video')}>
          <Text>Dislike</Text>
        </Button>
      </View>
    );
  }
}

export default Like;